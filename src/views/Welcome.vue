<script setup>
import {useRouter} from "vue-router";
const router = useRouter();

function goToLogin() {
  router.push("/login");
}
</script>

<template>
  <AuthWrapForm>
    <AuthForm>
      <AuthLogo />
      <div>
        <h1 class="text-center !text-3xl">Power Your <span class="text-green-brand">Growth</span>.</h1>
        <span class="h-[1px] w-[50px] bg-green-brand mx-auto mt-8 mb-4 block"></span>
      </div>
      <p class="text-center">
        Your all-in-one platform to manage your business,<br />
        track progress, and accelerate your growth.
      </p>
      <AuthBtn type="button" version="fill" @click="goToLogin()"> Log In </AuthBtn>
      <div class="text-center">
        <router-link to="/terms-and-conditions" class="hover:underline"> See our T&Cs </router-link>
      </div>
    </AuthForm>
  </AuthWrapForm>
</template>
