<script setup>
import TopSearchBar from "@/components/Layout/TopHeader/TopSearchBar.vue";
import BackButton from "@/components/Layout/TopHeader/BackButton.vue";
import LogsActions from "@/components/Layout/TopHeader/LogsActions.vue";
import ProfileMenu from "@/components/Layout/TopHeader/ProfileMenu.vue";
import ToggleMobile from "@/components/Layout/TopHeader/ToggleMobile.vue";
import AddButton from "@/components/Layout/TopHeader/AddButton.vue";

import {useRouter} from "vue-router";
const router = useRouter();
</script>
<template> 
  <div class="w-full flex justify-between p-4 border-b border-[#BFBFBF] items-center gap-2 sticky top-0 z-[1] bg-white">

    <div class="flex gap-2 items-center">
      <BackButton />
      <Breadcrumb />
    </div>
    <TopSearchBar />
    

    <div class="flex gap-2 items-center">
      <Notifications />
      <AddButton />
      <LogsActions />

      <ProfileMenu />
      <ToggleMobile />
    </div>
  </div>

</template>
