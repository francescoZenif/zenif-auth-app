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
        <span class="h-[1px] w-[50px] bg-green-brand mx-auto my-8 block"></span>
        <p class="text-center mb-4">
          Your all-in-one platform to manage your business,<br class="hidden lg:inline-block" />
          track progress, and accelerate your growth.
        </p>
      </div>

      <AuthBtn type="button" version="fill" @click="goToLogin()"> Log In </AuthBtn>
      <div class="text-center">
        <router-link to="/terms-and-conditions" class="hover:underline"> See our T&Cs </router-link>
      </div>
      <div class="text-center">
        <router-link to="/privacy-policy" class="hover:underline"> See our Privacy Policy </router-link>
      </div>
    </AuthForm>
  </AuthWrapForm>
</template>
