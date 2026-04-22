<script setup>
import layoutState from "@/store/layoutState";
import {watch} from "vue";

watch(layoutState, (newState, oldState) => {
  if (newState.modalSuccess !== 0) {
    setTimeout(() => {
      layoutState.modalSuccess = 0;
    }, 2500);
  }
});
</script>
<template>
  <div class="fixed py-3 px-4 top-5 right-0 left-0 mx-auto shadow-lg z-[10] max-w-[500px] bg-white" v-if="layoutState.modalSuccess">
    <div class="flex text-[#53B23A] items-center gap-2 font-semibold mb-1"><font-awesome-icon icon="fa-regular fa-check" /> Submission Successful!</div>
    <span class="line bg-[#53B23A]"></span>
  </div>
</template>

<style scoped>
.line {
  height: 3px;
  animation: fullLine 2s;
  display: block;
}

@keyframes fullLine {
  from {
    width: 0px;
  }
  to {
    width: 100%;
  }
}
</style>
