<script setup>
import {defineEmits} from "vue";
const emit = defineEmits(["submit"]);

function handleSubmit() {
  emit("submit");
}
</script>

<template>
  <form class="p-0 flex flex-col gap-5 m-5" @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>
