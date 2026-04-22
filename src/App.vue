<script setup>
import {RouterView} from "vue-router";
import {isLoggedIn} from "@/services/auth.js";

localStorage.clear();
</script>

<template>
  <main v-if="!isLoggedIn()">
    <router-view></router-view>
  </main>
  <ErrorAlert />
  <WarningAlert />
  <SuccessAlert />
</template>
