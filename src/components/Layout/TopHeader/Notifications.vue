<script setup>
import NotificationsList from "@/components/Notications/NotificationsList.vue";
import userState from "@/store/userState";

const show = ref(false);
const permission = ref(null);

if (Notification.permission === "denied") {
  permission.value = false;
} else {
  permission.value = true;
}

const dataTab = [
  {name: "Tasks", key: "notification-tasks", component: NotificationsList, props: {type: "tasks"}},
  {name: "Office", key: "notification-office", component: NotificationsList, props: {type: "office"}},
  {name: "Admin", key: "notification-admin", component: NotificationsList, props: {type: "admin"}},
];

provide("modalState", show);
</script>
<template>
  <div class="hover:opacity-55" v-popover :data-popover="!permission ? 'Push notifications not active' : null">
    <font-awesome-icon :icon="['far', 'exclamation']" v-if="!permission" :style="{color: 'red'}" class="relative top-[-4px]" />
    <button @click="show = !show" class="relative">
      <div class="text-[0.6rem] absolute top-[-10px] left-[-10px] bg-[#ed6b6b] z-[1] rounded-full w-[20px] h-[20px] text-white flex items-center justify-center" v-if="userState.unread_notifications > 0">
        {{ userState.unread_notifications > 9 ? "+9" : userState.unread_notifications }}
      </div>
      <font-awesome-icon :icon="['fal', 'bell']" :style="{color: !permission ? 'red' : 'black'}" />
    </button>
  </div>

  <Modal :isOpen="show" title="Notifications" size="xl" @close="show = false">
    <VerticalTab :data="dataTab" />
  </Modal>
</template>
