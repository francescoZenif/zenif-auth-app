<script setup>
import Sidebar from "@/components/Layout/Sidebar/Sidebar.vue";
import layoutState from "@/store/layoutState";
import {watch} from "vue";
import {useRoute} from "vue-router";
const route = useRoute();

import {ref} from "vue";

watch(route, (to, from) => {
  layoutState.mobileSidebar = false;
});


</script>
<template>
  <div
    class="-translate-x-[100%] lg:translate-x-0 absolute lg:relative top-0 right-0 left-0 z-[1] transition-transform  "
    :class="{
      'translate-x-[0%]': layoutState.mobileSidebar,
      'lg:w-[90px] w-screen': layoutState.sidebarMini,
      'lg:w-[250px] w-screen': !layoutState.sidebarMini,
    }"
 
  >
    <Sidebar />
     
  </div>
</template>
