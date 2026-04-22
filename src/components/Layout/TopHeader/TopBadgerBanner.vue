<script setup>
import userState from "@/store/userState";
</script>
<template>
  <div v-if="userState.logStatus == 'checking'" class="bg-[#fddf9a] border-b-[3px] border-[#FCB40F] text-center flex gap-2 py-2 flex justify-center">
    <img src="@/assets/img/Badger.png" alt="Badger logo" class="w-[20px]" />
    <h4 class="text-black font-semibold">You Are In Badger Mode</h4>
  </div>
</template>
