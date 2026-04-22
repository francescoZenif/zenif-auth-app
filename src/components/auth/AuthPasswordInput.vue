<script setup>
import {computed, defineProps, defineEmits, reactive, ref} from "vue";

const showPass = ref(false);
const emit = defineEmits(["update:modelValue", "valid"]);
const rules = reactive({
  minLength: false,
  hasNumber: false,
  hasUppercase: false,
  hasSpecialChar: false,
});

const props = defineProps({
  modelValue: [String, Number, Boolean, Date, File], // adjust as needed
  type: {
    type: String,
    default: "text",
  },

  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  name: String,
  id: String,
  required: {
    type: Boolean,
    default: false,
  },
});

const modelValueProxy = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const inputProps = computed(() => ({
  type: "password",
  placeholder: props.placeholder,
  disabled: props.disabled,
  readonly: props.readonly,
  name: props.name,
  id: props.id,
}));

function toggleShowPassword() {
  showPass.value = !showPass.value;
  if (showPass.value) {
    inputProps.value.type = "text";
  } else {
    inputProps.value.type = "password";
  }
}

function validatePassword(pwd) {
  rules.minLength = pwd.length >= 8;
  rules.hasNumber = /\d/.test(pwd);
  rules.hasUppercase = /[A-Z]/.test(pwd);
  rules.hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

  const isValid = Object.values(rules).every((rule) => rule);
  emit("valid", isValid);
}
function onInput(event) {
  const value = event.target.value;
  validatePassword(value);
}
</script>

<template>
  <div class="relative">
    <input :type="inputProps.type" :required="required" @input="onInput" v-model="modelValueProxy" class="bg-[#0D0D0D] w-full py-3 px-5 text-white border border-[#646464] rounded-lg focus:border-[#BBFF00] focus:outline-hidden" />

    <button type="button" class="absolute top-[17px] right-[14px] z-[1] text-black cursor-pointer" @click="toggleShowPassword">
      <svg v-if="showPass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="20px" class="fill-[#fff] hover:fill-[#BBFF00]"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" /></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" class="fill-[#fff] hover:fill-[#BBFF00]"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>
    </button>
  </div>

  <ul class="validation-list">
    <li :class="{valid: rules.minLength}">Min 8 characters</li>
    <li :class="{valid: rules.hasNumber}">At least 1 number</li>
    <li :class="{valid: rules.hasUppercase}">At least 1 uppercase</li>
    <li :class="{valid: rules.hasSpecialChar}">At least 1 special character</li>
  </ul>
</template>
<style scoped>
.validation-list li {
  color: #ff310c;
}
.validation-list li.valid {
  color: #bbff00;
}
</style>
