<script setup>
import axios from "@/services/axios-config";
import layoutState from "@/store/layoutState";
import {reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

import AuthForm from "@/components/auth/AuthForm.vue";
import AuthBtn from "@/components/auth/AuthBtn.vue";
import AuthWrapForm from "@/components/auth/AuthWrapForm.vue";
import AuthLogo from "@/components/auth/AuthLogo.vue";

const route = useRoute();
const router = useRouter();
const passwordValid = ref(false);
const form = reactive({password: null});
const tokenValid = ref(null);
const loading = ref(false);

const submit = async () => {
  try {
    if (passwordValid.value) {
      loading.value = true;
      const res = await axios.post("/api/v1/zenif/recovery-password", {
        password: form.password,
        token: route.params.token,
        email: route.query.email,
      });
      router.push("/");
    } else {
      console.log("Password is not valid");
    }
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

function onPasswordValid(valid) {
  passwordValid.value = valid;
}
</script>

<template>
  <AuthWrapForm>
    <AuthLogo />
    <AuthForm @submit="submit" v-if="route.params.token && route.query.email">
      <AuthPasswordInput @valid="onPasswordValid" v-model="form.password" />

      <AuthBtn type="submit" version="fill" :disabled="!passwordValid || loading">
        <span v-if="loading"> Loading...</span>
        <span v-else> Confirm </span>
      </AuthBtn>
    </AuthForm>
    <div v-else>
      <h2 class="text-red text-center mb-4">Token Not Valid.</h2>
      <router-link to="/login" class="flex justify-center items-center hover:underline gap-2">
        <font-awesome-icon icon="fa-regular fa-arrow-left-long" />
        <span>Back To <b class="text-green-brand">Log In</b></span>
      </router-link>
    </div>
  </AuthWrapForm>
</template>
