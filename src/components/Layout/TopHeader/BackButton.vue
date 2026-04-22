<script setup>
import {useRouter} from "vue-router";
 
const router = useRouter();
 
</script>
<template>
  <button @click="router.go(-1)" class="p-2 rounded-full flex items-center bg-white h-[30px] w-[30px] justify-center hover:opacity-40" aria-label="Back Button">
    <font-awesome-icon :icon="['fal', 'fa-angle-left']" />
  </button>

  <!-- <button @click="submit()">test</button> -->
</template>
