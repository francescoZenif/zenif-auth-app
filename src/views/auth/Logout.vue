<script setup>
onMounted(() => {
  if (localStorage.getItem("zenif_auth_redirect")) {
    localStorage.removeItem("zenif_auth_redirect");
  }
  window.location.href = "/";
});
</script>
<template></template>
