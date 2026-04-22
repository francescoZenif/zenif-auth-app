<script setup>
import {ref} from "vue";

const q = ref("");
</script>
<template>
  <div class="flex gap-1 items-center bg-white border-[#C4C4C4] rounded-md border ps-3">
    <font-awesome-icon icon="fa-light fa-magnifying-glass" />
    <input type="search" v-model="q" id="site-search" class="mt-0.5 w-full px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[transparent] max-w-[300px]" placeholder="Search..." />
  </div>
</template>
