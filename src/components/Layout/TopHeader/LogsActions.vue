<script setup>
import {ref, computed, onMounted, onUnmounted} from "vue";
import axios from "@/services/axios-config";
import userState from "@/store/userState";

const status = ref(null); // 'out', 'working', 'break', 'lunch'
const showModal = ref(false);
let intervalId = null;
// Track break and lunch times
const breakDuration = ref(0);
const lunchDuration = ref(0);
// const seconds = ref(0);
// const timerLoading = ref(null);
const isRemote = ref(false);

onMounted(async () => {
  let {data} = await axios.get("/api/v1/zenif/me/time-logs");

  // if (data?.status == "break" || data?.status == "lunch") {
  //   startInterval();
  // }

  if (data?.id) {
    userState.logStatus = data.status;
    status.value = data.status;
  } else {
    status.value = "out";
  }
});

const currentStatus = computed(() => {
  const statusMap = {
    out: "checked-out",
    working: "working",
    break: "on-break",
    lunch: "on-lunch",
    checking: "checking",
  };

  userState.logStatus = statusMap[status.value];

  return statusMap[status.value];
});

const logAction = async (action) => {
  const logEntry = {
    action,
    status: status.value,
    is_remote: isRemote.value,
  };

  try {
    const {data} = await axios.post("/api/v1/zenif/me/time-logs", logEntry, {
      showSuccessModal: false,
    });
    // Reset durations after logging
    if (action === "break-end") breakDuration.value = 0;
    if (action === "lunch-end") lunchDuration.value = 0;

    if (action === "break-start" || action === "lunch-start") startInterval();
  } catch (error) {
    console.error("Error logging action:", error);
  }
};

const checkIn = () => {
  showModal.value = false;
  status.value = "working";
  logAction("checkin");
};

const startBreak = () => {
  showModal.value = false;
  status.value = "break";
  logAction("break-start");
};

const endBreak = () => {
  showModal.value = false;
  status.value = "working";
  logAction("break-end");
  clearInterval(intervalId);
};

const startLunch = () => {
  showModal.value = false;
  status.value = "lunch";
  logAction("lunch-start");
};

const endLunch = () => {
  showModal.value = false;
  status.value = "working";
  logAction("lunch-end");
  clearInterval(intervalId);
};

const checkOut = () => {
  showModal.value = false;
  status.value = "out";
  isRemote.value = false;
  logAction("checkout");
};

const checkInNoWorking = () => {
  showModal.value = false;
  status.value = "checking";
  logAction("rate-in");
  document.title = "⚠️ You are in badger mode";
};

const checkInFromHome = () => {
  showModal.value = false;
  status.value = "working";
  isRemote.value = true;
  logAction("checkin");
};

const endCheckInNoWorking = () => {
  showModal.value = false;
  status.value = "out";
  isRemote.value = false;
  logAction("rate-out");
};

// async function startInterval() {
//   timerLoading.value = true;
//   setTimeout(async () => {
//     try {
//       const {data} = await axios.get("/api/v1/zenif/me/time-logs");
//       const startDate = new Date(data?.timestamp);
//       const now = new Date();
//       seconds.value = Math.floor((now - startDate) / 1000);

//       initInterval();
//       timerLoading.value = false;
//     } catch (error) {
//       console.error("Error logging action:", error);
//     }
//   }, 2000);
// }

// function initInterval() {
//   intervalId = setInterval(() => {
//     seconds.value++;
//   }, 1000);
// }

// const formattedTime = computed(() => {
//   const hrs = Math.floor(seconds.value / 3600);
//   const mins = Math.floor((seconds.value % 3600) / 60);
//   const secs = seconds.value % 60;
//   return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
// });
</script>

<template>
  <div
    :class="{
      'bg-[#eaffea] border-[2px] border-[#9BED9B]': currentStatus === 'working',
      'bg-[#fddf9a] border-[2px] border-[#FCB40F]': currentStatus === 'checking',
      '!block rounded-md !rounded-t-lg  ': showModal,
    }"
    class="py-1 px-3 rounded-full relative"
  >
    <button
      type="button"
      @click="showModal = !showModal"
      class="block lg:hidden"
      :class="{
        'opacity-25': showModal,
      }"
    >
      <font-awesome-icon :icon="['fal', 'briefcase']" />
    </button>

    <div
      class="gap-4 items-center flex-wrap hidden lg:flex left-0"
      :class="{
        '!flex absolute flex-col !gap-2 py-2 px-1 !rounded-b-lg left-1/2 -translate-x-1/2 w-[calc(100%+4px)] ': showModal,
        'bg-[#eaffea]  border-[#9BED9B] border-x-[2px] border-b-[2px] ': (currentStatus === 'working' || currentStatus === 'checking') && showModal,
      }"
    >
      <!-- Check in /out -->
      <button @click="checkIn" v-if="status === 'out'" class="cursor-pointer hover:opacity-55">
        <font-awesome-icon :icon="['fal', 'circle-check']" />
      </button>

      <button @click="endCheckInNoWorking" v-if="status === 'checking'" class="cursor-pointer hover:opacity-55">
        <font-awesome-icon :icon="['fal', 'fa-right-from-bracket']" />
      </button>

      <button @click="checkOut" v-if="status === 'working'" class="cursor-pointer hover:opacity-55" v-popover data-popover="Check Out">
        <font-awesome-icon :icon="['fal', 'house-chimney']" />
      </button>

      <!-- break -->
      <button @click="startBreak" v-if="status !== 'break' && status === 'working'" class="cursor-pointer hover:opacity-55" v-popover data-popover="Break">
        <font-awesome-icon :icon="['fal', 'mug-hot']" />
      </button>

      <!-- Lunch -->
      <button @click="startLunch" v-if="status !== 'lunch' && status === 'working'" class="cursor-pointer hover:opacity-55" v-popover data-popover="Lunch">
        <font-awesome-icon :icon="['fal', 'utensils']" />
      </button>

      <p class="text-xs hidden lg:block" v-if="status === 'working'">Working</p>
    </div>
  </div>
  <div class="bg-blur fixed z-2 right-0 left-0 top-0 w-full h-full flex items-center justify-center bg-black/20 p-4" v-if="status === 'break' || status === 'lunch' || status === 'out'">
    <div class="bg-white [box-shadow:0px_0px_17px_#00000029] py-7 rounded-xl min-w-[500px]">
      <div class="text-center">
        <h2 class="border-b border-[#D1D1D1] !mb-5 pb-5">Hi, {{ userState.details?.first_name }}!</h2>

        <div v-if="status === 'out'">
          <h3 class="bg-[#FEF1DF] rounded-[50%] w-[70px] h-[70px] flex items-center justify-center p-4 mx-[auto] !mb-5 text-[#DC6120]"><font-awesome-icon :icon="['fal', 'right-to-bracket']" size="xl" /></h3>
          <div class="flex flex-col flex-wrap px-5 gap-3">
            <button class="primary mx-auto capitalize" @click="checkIn" v-if="status === 'out'">
              <font-awesome-icon :icon="['fa-l', 'fa-building']" />
              Check in From Office
            </button>
            <button class="secondary mx-auto capitalize" @click="checkInFromHome" v-if="status === 'out'">
              <font-awesome-icon :icon="['fa-l', 'fa-house']" />
              Check in From Home
            </button>
            <button class="secondary mx-auto capitalize" @click="checkInNoWorking" v-if="status === 'out'">
              <font-awesome-icon :icon="['fa-l', 'fa-badger-honey']" />
              Use badger mode
            </button>
          </div>
        </div>
        <div v-if="status === 'lunch'" class="text-center">
          <h3 class="bg-[#FEF1DF] rounded-[50%] w-[70px] h-[70px] flex items-center justify-center p-4 mx-[auto] !mb-5 text-[#DC6120]"><font-awesome-icon :icon="['fal', 'utensils']" size="xl" /></h3>

          <h3 class="mb-2 capitalize">Enjoy your lunch</h3>

          <!-- <p class="text-xs" v-if="timerLoading == true"><font-awesome-icon :icon="['fal', 'loader']" spin /></p>
          <p class="text-xs" v-if="timerLoading == false">{{ formattedTime }}</p> -->
          <button class="primary mt-3 mx-auto" @click="endLunch" v-if="status === 'lunch'">End Lunch</button>
        </div>
        <div v-if="status === 'break'">
          <h3 class="bg-[#FEFAD7] rounded-[50%] w-[70px] h-[70px] flex items-center justify-center p-4 mx-[auto] !mb-5 text-[#E2CF3F]"><font-awesome-icon :icon="['fal', 'mug-hot']" size="xl" /></h3>
          <h3 class="mb-2 capitalize">Enjoy your break</h3>
          <!-- <p class="text-xs" v-if="timerLoading == true"><font-awesome-icon :icon="['fal', 'loader']" spin /></p>
          <p class="text-xs" v-if="timerLoading == false">{{ formattedTime }}</p> -->
          <button class="primary mt-3 mx-auto" @click="endBreak" v-if="status === 'break'">End Break</button>
        </div>
      </div>
    </div>
  </div>

  <div class="h-screen w-screen bg-white fixed top-0 left-0 z-[99] flex items-center justify-center text-xl" v-if="status === null">
    <font-awesome-icon icon="fa-light fa-circle-notch" class="text-5xl fa-spin fa-3x" />
  </div>
</template>
