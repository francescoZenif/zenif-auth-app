<script setup>
import {RouterView} from "vue-router";
import {onMounted} from "vue";

onMounted(() => {
  localStorage.removeItem("zenif_auth_token");
  if (localStorage.getItem("zenif_auth_redirect")) {
    window.location.href = localStorage.getItem("zenif_auth_redirect");
  }
});
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
  <ErrorAlert />
  <WarningAlert />
  <SuccessAlert />
</template>
