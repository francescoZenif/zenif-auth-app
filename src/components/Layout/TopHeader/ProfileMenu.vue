<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";
import Logout from "@/components/auth/Logout.vue";
import AvatarProfile from "@/components/Layout/AvatarProfile.vue";
const show = ref(false);
const router = useRouter();

function handleClick(event) {
  const target = event.target;
  const parentWithId = target.closest("#wrap-profile-menu");

  if (!parentWithId) {
    show.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClick);
});

function switchRoute(target) {
  router.push({path: target});
  show.value = false;
}
</script>
<template>
  <div class="relative" id="wrap-profile-menu">
    <div class="cursor-pointer hover:opacity-65">
      <AvatarProfile size="sm" @click="show = !show" />
    </div>

    <nav role="menu" class="absolute end-0 top-12 z-[9] w-56 divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-sm" v-if="show">
      <div>
        <button type="button" class="block px-3 py-2 text-xs transition-colors hover:bg-gray-50 hover:text-gray-900 cursor-pointer w-full text-left" @click="switchRoute('/my-account')">My Account</button>
        <button type="button" class="block px-3 py-2 text-xs transition-colors hover:bg-gray-50 hover:text-gray-900 cursor-pointer w-full text-left" @click="switchRoute('/settings')">Settings</button>
      </div>
      <span class="block px-3 py-2 text-xs transition-colors hover:bg-gray-50 hover:text-gray-900">
        <Logout />
      </span>
    </nav>
  </div>
</template>
