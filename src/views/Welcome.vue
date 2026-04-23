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
      <h1 class="text-center !text-3xl">Welcome to Zenif</h1>
      <p class="text-center">
        Your business partner.<br />
        Please click log in below to enter.
      </p>
      <AuthBtn type="button" version="fill" @click="goToLogin()"> Log In </AuthBtn>
      <div class="text-center">
        <router-link to="/terms-and-conditions" class="hover:underline"> See our T&Cs </router-link>
      </div>
    </AuthForm>
  </AuthWrapForm>
</template>
