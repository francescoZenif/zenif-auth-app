<script setup>
import layoutState from "@/store/layoutState";

function closeModal() {
  layoutState.modalError = 0;
}
</script>
<template>
  <!-- Backdrop -->
  <transition name="backdrop">
    <div v-if="layoutState.modalError" class="fixed inset-0 z-50 flex justify-center items-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle" @click.self="closeModal">
      <!-- Modal Content -->
      <transition name="modal-scale">
        <div v-if="layoutState.modalError" class="rounded-xl bg-white p-6 shadow-lg w-full max-w-[500px]">
          <div class="flex items-start justify-between mb-3 pb-3 border-b border-[#dce7eb]">
            <div class="flex gap-3 items-center">
              <div class="text-red-600 bg-[#FFD7D7] rounded-full w-[35px] h-[35px] flex items-center justify-center">
                <font-awesome-icon icon="fa-light fa-triangle-exclamation" />
              </div>

              <h2 id="modalTitle" class="text-xl capitalize !mb-0 font-semibold sm:text-2xl">Error</h2>
            </div>
            <button type="button" class="flex items-center justify-center rounded-xl text-gray-400 transition-colors hover:opacity-40 focus:outline-none mt-[-24px] mr-[-16px] w-[44px] h-[44px]" @click="closeModal" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" stroke="black" />
              </svg>
            </button>
          </div>

          <div>
            <p class="text-pretty !text-md">
              {{ layoutState.modalError }}
            </p>
          </div>

          <footer class="mt-6">
            <button type="button" class="rounded-full bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:text-black hover:bg-white w-full border border-black" @click="closeModal">Close</button>
          </footer>
        </div>
      </transition>
    </div>
  </transition>
</template>
