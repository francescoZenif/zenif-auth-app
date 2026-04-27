<script setup>
import axios from "@/services/axios-config";
import layoutState from "@/store/layoutState";
import {reactive, ref} from "vue";
import {useRoute} from "vue-router";
import AuthForm from "@/components/auth/AuthForm.vue";
import AuthInput from "@/components/auth/AuthInput.vue";
import AuthBtn from "@/components/auth/AuthBtn.vue";
import AuthWrapForm from "@/components/auth/AuthWrapForm.vue";

const route = useRoute();
const form = reactive({email: null});
const tokenValid = ref(null);
const loading = ref(false);
const errorEmail = ref("");

const submit = async () => {
  emptyError();
  if (errorEmail.value !== "") {
    return;
  }
  try {
    layoutState.contentSuccess = "If an account with this email exists, a reset link has been sent.";
    loading.value = true;
    const res = await axios.post("/api/v1/forgot-password", {
      email: form.email,
    });
    form.email = null;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

const emptyError = () => {
  if (form.email?.length > 0) {
    errorEmail.value = "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(form.email)) {
    } else {
      errorEmail.value = "Invalid email address";
    }
  } else {
    errorEmail.value = "Email is required";
  }
};
</script>

<template>
  <AuthWrapForm>
    <div class="p-0 flex flex-col gap-5 m-5">
      <AuthLogo />
      <h1 class="text-center !text-3xl">Reset <span class="text-green-brand">Password</span>.</h1>
      <span>
        <p class="text-center">Enter your email address below to reset password.</p>
        <span class="h-[1px] w-[50px] bg-green-brand mx-auto mt-8 mb-4 block"></span>
      </span>

      <AuthInput v-model="form.email" type="email" placeholder="Your Email" :required="true" />

      <div class="text-white bg-[#62301D] px-6 py-2 rounded-full flex gap-3 items-center" v-if="errorEmail">
        <span class="font-bold text-2xl text-[#ea343d]">!</span>
        {{ errorEmail }}
      </div>
      <AuthBtn type="button" version="fill" :disabled="loading" @click="submit">
        <span v-if="loading"> Loading...</span>
        <span v-else> Reset Password </span>
      </AuthBtn>
      <div class="text-center">
        <router-link to="/login" class="flex justify-center items-center hover:underline gap-2">
          <font-awesome-icon icon="fa-regular fa-arrow-left-long" />
          <span>Back To <b class="text-green-brand">Log In</b></span>
        </router-link>
      </div>
    </div>
  </AuthWrapForm>
</template>
