<script setup>
import axios from "@/services/axios-config";
import {useRouter} from "vue-router";
const logout = async () => {
  await axios.post("/api/v1/sub/logout");
  localStorage.removeItem("zenif_auth_token");
  window.location.href = "/";
};
</script>

<template>
  <button type="button" class="text-[#000]" @click="logout">Logout</button>
</template>
