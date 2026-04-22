<script setup>
import NavbarSide from "@/components/Layout/Sidebar/NavbarSide.vue";
import layoutState from "@/store/layoutState";
</script>
<template>
  <aside class="min-h-screen h-full bg-black text-white flex flex-col justify-between">
    <div class="p-5 sticky top-0">
      <div class="flex items-start gap-3">
    
        <router-link :to="'/'" v-if="!layoutState.sidebarMini">
          <img src="@/assets/img/gudideas-logo-white.svg" alt="logo" class="mb-9" />
        </router-link>
        <button type="button" @click="layoutState.mobileSidebar = false" class="block lg:hidden text-white text-xl">
          <font-awesome-icon icon="fa-regular fa-xmark" />
        </button>
      </div>
      <NavbarSide />
    </div>
  </aside>
</template>
