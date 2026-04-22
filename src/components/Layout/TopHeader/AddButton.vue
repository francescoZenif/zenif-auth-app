<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";
const router = useRouter();

const show = ref(false);

function handleClick(event) {
  const target = event.target;
  const parentWithId = target.closest("#wrap-add-menu");

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
  <div class="relative" id="wrap-add-menu">
    <button @click="show = !show" class="p-2 rounded-full border border-[#C2C2C2] flex items-center bg-white h-[30px] w-[30px] justify-center hover:bg-blue-brand hover:text-white" aria-label="Back Button">
      <font-awesome-icon icon="fa-light fa-plus" />
    </button>

    <nav role="menu" class="absolute end-0 z-[9] w-[113px] right-[-41px] overflow-hidden rounded border border-gray-300 bg-white shadow-sm cursor-pointer" v-if="show">
      <div class="divide-y divide-gray-200">
        <button type="button" class="block px-3 py-2 text-xs transition-colors hover:bg-gray-50 hover:text-gray-900 text-center cursor-pointer w-full" @click="switchRoute('/tasks/create')">Add Task</button>
        <button type="button" class="block px-3 py-2 text-xs transition-colors hover:bg-gray-50 hover:text-gray-900 text-center cursor-pointer w-full" @click="switchRoute('/client/create')">Add Client</button>
        <PermissionCheck module_slug="create_employee">
          <button type="button" class="block px-3 py-2 text-xs transition-colors hover:bg-gray-50 hover:text-gray-900 text-center cursor-pointer w-full" @click="switchRoute('/employees/create')">Add Employee</button>
        </PermissionCheck>
        <button type="button" class="block px-3 py-2 text-xs transition-colors hover:bg-gray-50 hover:text-gray-900 text-center cursor-pointer w-full" @click="switchRoute('/meeting/create')">Add Meeting</button>
      </div>
    </nav>
  </div>
</template>
