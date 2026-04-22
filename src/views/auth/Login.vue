<script setup>
import axios from "@/services/axios-config";
import {ref} from "vue";
import {useRouter} from "vue-router";
import layoutState from "@/store/layoutState";
import AuthForm from "@/components/auth/AuthForm.vue";
import AuthInput from "@/components/auth/AuthInput.vue";
import AuthBtn from "@/components/auth/AuthBtn.vue";
import AuthVerificationCodeInput from "@/components/auth/AuthVerificationCodeInput.vue";
import AuthWrapForm from "@/components/auth/AuthWrapForm.vue";

const router = useRouter();
// const email = ref("francesco@gudideas.co.uk");
// const password = ref("test246");
const email = ref("");
const password = ref("");
const step = ref(1);
const user = ref(null);
const childRef = ref(null);
const loading = ref(false);
const errorEmail = ref("");
const errorPassword = ref("");

const submitLogin = async () => {
  emptyError();
  if (errorPassword.value !== "") {
    return;
  }
  loading.value = true;
  try {
    await axios.get("/sanctum/csrf-cookie");

    const res = await axios.post("/api/v1/sub/login", {email: email.value, password: password.value});

    if (res?.data?.user) {
      step.value = 3;
      user.value = res?.data?.user;
    }
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

const submitCode = async () => {
  loading.value = true;
  let code = childRef.value.getCode();
  code = code.join("");
  try {
    const res = await axios.post("/api/v1/sub/login/verify-code", {user: user.value, code: code});
    console.log(res);

    // if (res.data.token) {
    //   localStorage.setItem("zenif_auth_token", res.data.token);
    window.location.href = res.data.redirect;
    // }
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

const validEmail = () => {
  if (email.value.length > 0) {
    errorEmail.value = "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email.value)) {
      step.value = 2;
    } else {
      errorEmail.value = "Invalid email address";
    }
  } else {
    errorEmail.value = "Email is required";
  }
};

const emptyError = () => {
  if (password.value.length > 0) {
    errorPassword.value = "";
  } else {
    errorPassword.value = "Password is required";
  }
};
</script>
<template>
  <AuthWrapForm>
    <div class="p-0 flex flex-col gap-5 m-5" v-if="step == 1">
      <AuthLogo />
      <span>
        <h1 class="text-center !text-3xl">Your Journey To <span class="text-green-brand">Success</span>.</h1>
        <span class="h-[1px] w-[50px] bg-green-brand mx-auto mt-8 mb-4 block"></span>
      </span>

      <span class="flex flex-col gap-3">
        <span v-if="step == 1">
          <AuthInput v-model="email" type="email" placeholder="Email" :required="true" :isError="errorEmail" />
          <div class="text-white mt-4 bg-[#62301D] px-6 py-2 rounded-full flex gap-3 items-center" v-if="errorEmail">
            <span class="font-bold text-2xl text-[#ea343d]">!</span>
            {{ errorEmail }}
          </div>
        </span>

        <div class="text-right" v-if="step == 1">
          <RouterLink class="text-sm hover:underline" to="/forgot-password">Forgot Password?</RouterLink>
        </div>
        <AuthBtn type="button" version="fill" v-if="step == 1" @click="validEmail"> Next </AuthBtn>
      </span>
    </div>
    <div class="p-0 flex flex-col gap-5 m-5" v-if="step == 2">
      <AuthLogo />
      <span>
        <h1 class="text-center !text-3xl">Your Journey To <span class="text-green-brand">Success</span>.</h1>
        <span class="h-[1px] w-[50px] bg-green-brand mx-auto mt-8 mb-4 block"></span>
      </span>
      <AuthInput v-model="password" type="password" placeholder="Password" :required="true" />

      <div class="text-white bg-[#62301D] px-6 py-2 rounded-full flex gap-3 items-center" v-if="errorPassword">
        <span class="font-bold text-2xl text-[#ea343d]">!</span>
        {{ errorPassword }}
      </div>

      <div class="flex justify-between">
        <button class="flex justify-center items-center gap-2 hover:underline" @click="step = 1">
          <font-awesome-icon icon="fa-regular fa-arrow-left-long" />
          Back To <b class="text-green-brand">Email</b>
        </button>
        <RouterLink class="text-sm hover:underline" to="/forgot-password">Forgot Password?</RouterLink>
      </div>

      <AuthBtn type="submit" version="fill" :disabled="loading" @click="submitLogin">
        <span v-if="loading"> Loading... </span>
        <span v-else> Login </span>
      </AuthBtn>
      <div class="text-center">
        <router-link to="/terms-and-conditions" class="hover:underline">See our T&Cs</router-link>
      </div>
    </div>

    <AuthForm @submit="submitCode" v-if="step == 3">
      <h3 class="font-bold text-center">TWO-STEP VERIFICATION</h3>
      <p class="text-center !text-white">Enter the code we send to your email address</p>
      <AuthVerificationCodeInput ref="childRef" />
      <AuthBtn type="submit" version="fill" :disabled="loading">
        <span v-if="loading"> Loading... </span>
        <span v-else> Verify </span>
      </AuthBtn>
      <div class="text-center">
        <router-link to="/terms-and-conditions" class="hover:underline">See our T&Cs</router-link>
      </div>
    </AuthForm>
  </AuthWrapForm>
</template>
