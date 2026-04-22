<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button", // 'submit', 'reset' also valid
  },
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: undefined, // optional, only used if two-way binding is desired
  },
  toggle: {
    type: Boolean,
    default: false, // enables toggle mode if true
  },

  version: {
    type: String,
    default: "fill", // enables toggle mode if true
  },
});

const emit = defineEmits(["click", "update:modelValue"]);

function handleClick(event) {
  emit("click", event);

  if (props.toggle) {
    emit("update:modelValue", !props.modelValue);
  }
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    @click="handleClick"
    class="p-4 rounded-full capitalize font-medium text-lg cursor-pointer"
    style="line-height: 1"
    :class="{
      'bg-white text-black font-regular hover:bg-[#BBFF00]': version == 'fill',
      'transition active:scale-95 cursor-pointer': disabled == false,
      '!opacity-50 cursor-not-allowed': disabled == true,
    }"
  >
    <slot />
  </button>
</template>
