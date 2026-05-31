<script setup>
import axios from "@/services/axios-config";
import {reactive, ref, onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import AuthForm from "@/components/auth/AuthForm.vue";
import AuthBtn from "@/components/auth/AuthBtn.vue";
import AuthWrapForm from "@/components/auth/AuthWrapForm.vue";
import AuthLogo from "@/components/auth/AuthLogo.vue";
import AuthPasswordInput from "@/components/auth/AuthPasswordInput.vue";

const route        = useRoute();
const router       = useRouter();
const tokenValid   = ref(null);
const passwordValid = ref(false);
const loading      = ref(false);
const done         = ref(false);

const form = reactive({
  password: "",
  confirm:  "",
});

const confirmError = ref("");

onMounted(async () => {
  try {
    const { data } = await axios.get("/api/v1/zenif/activation-verify", {
      params: { token: route.params.token },
    });
    tokenValid.value = data.valid;
  } catch {
    tokenValid.value = false;
  }
});

function onPasswordValid(valid) {
  passwordValid.value = valid;
}

async function submit() {
  confirmError.value = "";

  if (form.password !== form.confirm) {
    confirmError.value = "Passwords do not match.";
    return;
  }

  if (!passwordValid.value) return;

  loading.value = true;
  try {
    await axios.post("/api/v1/zenif/activation-account", {
      token:    route.params.token,
      password: form.password,
    });
    done.value = true;
    setTimeout(() => router.push("/login"), 2000);
  } catch {
    // error handled by axios interceptor global modal
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <AuthWrapForm>
    <div class="p-0 flex flex-col gap-5 m-5" v-if="tokenValid === null">
      <AuthLogo />
      <p class="text-center text-white">Validating your invitation link...</p>
    </div>

    <div class="p-0 flex flex-col gap-5 m-5" v-else-if="tokenValid === false">
      <AuthLogo />
      <h2 class="text-center text-red-500 !text-2xl">Invalid or expired link.</h2>
      <p class="text-center text-white text-sm">This invitation link has already been used or is no longer valid.</p>
      <router-link to="/login" class="flex justify-center items-center hover:underline gap-2 text-white">
        <font-awesome-icon icon="fa-regular fa-arrow-left-long" />
        <span>Back to <b class="text-green-brand">Log In</b></span>
      </router-link>
    </div>

    <div class="p-0 flex flex-col gap-5 m-5" v-else-if="done">
      <AuthLogo />
      <h2 class="text-center !text-2xl">Password set!</h2>
      <p class="text-center text-white text-sm">Redirecting you to the login page...</p>
    </div>

    <AuthForm @submit="submit" v-else>
      <AuthLogo />

      <span>
        <h1 class="text-center !text-3xl">Set Your <span class="text-green-brand">Password</span>.</h1>
        <span class="h-[1px] w-[50px] bg-green-brand mx-auto mt-8 mb-4 block"></span>
      </span>

      <p class="text-center text-white text-sm" v-if="route.query.email">
        Setting password for <b>{{ route.query.email }}</b>
      </p>

      <div class="flex flex-col gap-2">
        <label class="text-white text-sm">New Password</label>
        <AuthPasswordInput v-model="form.password" @valid="onPasswordValid" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-white text-sm">Confirm Password</label>
        <input
          v-model="form.confirm"
          type="password"
          placeholder="Confirm password"
          required
          class="bg-[#0D0D0D] w-full py-3 px-5 text-white border border-[#646464] rounded-lg focus:border-[#BBFF00] focus:outline-hidden"
        />
        <p v-if="confirmError" class="text-red-500 text-sm">{{ confirmError }}</p>
      </div>

      <AuthBtn type="submit" version="fill" :disabled="!passwordValid || loading">
        <span v-if="loading">Setting password...</span>
        <span v-else>Activate Account</span>
      </AuthBtn>
    </AuthForm>
  </AuthWrapForm>
</template>
