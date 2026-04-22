 <script setup>
import {ref, reactive, watch, nextTick} from "vue";

const LENGTH = 6;
const code = reactive(Array(LENGTH).fill(""));

const inputs = ref([]);

function getCode() {
  return code;
}

defineExpose({
  getCode,
});

// Auto focus next input
function onInput(index) {
  const val = code[index];
  if (val.length === 1 && index < LENGTH - 1) {
    nextTick(() => {
      inputs.value[index + 1]?.focus();
    });
  }
}

// Handle backspace
function onBackspace(index) {
  if (code[index] === "" && index > 0) {
    code[index - 1] = "";
    nextTick(() => {
      inputs.value[index - 1]?.focus();
    });
  }
}

// Handle full code paste
function onPaste(event) {
  const pasted = event.clipboardData.getData("text").replace(/\D/g, "");
  if (pasted.length === LENGTH) {
    for (let i = 0; i < LENGTH; i++) {
      code[i] = pasted[i];
    }
    event.preventDefault();
  }
}

// Optional: emit full code when complete
watch(code, (newCode) => {
  const joined = newCode.join("");
  if (joined.length === LENGTH && !joined.includes("")) {
    // emit or validate
    console.log("Full code:", joined);
  }
});
</script>

 
<template>
  <div class="flex gap-2 justify-center">
    <input
      v-for="(digit, index) in code"
      :key="index"
      type="text"
      inputmode="numeric"
      maxlength="1"
      class="w-12 h-14 text-2xl text-center border border-gray-400 rounded-md bg-transparent text-white focus:outline-none focus:border-lime-400 appearance-none"
      v-model="code[index]"
      ref="inputs"
      @input="onInput(index)"
      @keydown.backspace="onBackspace(index)"
      @paste="onPaste($event)"
      required
    />
  </div>
</template>
 

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>