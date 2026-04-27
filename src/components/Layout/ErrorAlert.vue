<script setup>
import layoutState from "@/store/layoutState";

function closeModal() {
  layoutState.modalError = 0;
}
</script>
<template>
  <!-- Backdrop -->
  <transition name="backdrop">
    <div v-if="layoutState.modalError" class="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle" @click.self="closeModal">
      <!-- Modal Content -->
      <transition name="modal-scale">
        <div v-if="layoutState.modalError" class="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
          <div class="flex items-start justify-between mb-3 pb-3 border-b border-[#dce7eb]">
            <div class="flex gap-3 items-center">
              <div class="text-red-600 bg-[#FFD7D7] rounded-full w-[35px] h-[35px] flex items-center justify-center">
                <font-awesome-icon icon="fa-light fa-triangle-exclamation" />
              </div>

              <h2 id="modalTitle" class="text-xl capitalize !mb-0 font-semibold sm:text-2xl">Error</h2>
            </div>
            <button type="button" class="rounded-full text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none mt-[-10px] mr-[-10px]" @click="closeModal" aria-label="Close">
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
            <button type="button" class="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-200 w-full" @click="closeModal">Close</button>
          </footer>
        </div>
      </transition>
    </div>
  </transition>
</template>
