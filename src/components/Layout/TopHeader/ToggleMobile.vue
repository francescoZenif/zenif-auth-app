<script setup>
import layoutState from "@/store/layoutState";
</script>
<template>
  <button type="button" @click="layoutState.mobileSidebar = true" class="block lg:hidden">
    <font-awesome-icon :icon="['fal', 'fa-bars']" />
  </button>
</template>
