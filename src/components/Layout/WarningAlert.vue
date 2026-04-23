<script setup>
import layoutState from "@/store/layoutState";

function closeModal() {
  layoutState.modalWarning = 0;
}
</script>
<template>
  <!-- Backdrop -->
  <transition name="backdrop">
    <div v-if="layoutState.modalWarning" class="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle" @click.self="closeModal">
      <!-- Modal Content -->
      <transition name="modal-scale">
        <div v-if="layoutState.modalWarning" class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <div class="flex items-start justify-between">
            <div class="flex gap-2 items-center">
              <svg class="size-6 text-[#F9B33B]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              <h2 id="modalTitle" class="text-xl capitalize !mb-0 font-semibold text-[#F9B33B] sm:text-2xl">Warning</h2>
            </div>

            <button type="button" class="-me-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none" @click="closeModal" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div>
            <p class="text-pretty text-gray-700 !text-md">
              {{ layoutState.modalWarning }}
            </p>
          </div>

          <footer class="mt-6 flex justify-end gap-2">
            <button type="button" class="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200" @click="closeModal">Cancel</button>
          </footer>
        </div>
      </transition>
    </div>
  </transition>
</template>
