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
  <div class="fixed py-2 ps-2 pe-5 top-9 right-0 left-0 mx-auto z-[10] max-w-[500px] bg-white rounded-full shadow-success" v-if="layoutState.modalSuccess">
    <div class="flex flex-row text-[#53B23A] items-center gap-3 font-semibold items-center">
      <div class="basis-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#d0ffad]">
        <font-awesome-icon icon="fa-regular fa-check" />
      </div>

      <div class="basis-[90%] text-black font-normal">
        Submission Successful!
        <span class="line bg-[#53B23A]"></span>
      </div>
    </div>
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

.shadow-success {
  -webkit-box-shadow: 0px 6px 15px 5px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 6px 15px 5px rgba(0, 0, 0, 0.05);
}
</style>
