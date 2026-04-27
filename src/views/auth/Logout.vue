<script setup>
onMounted(() => {
  if (localStorage.getItem("zenif_auth_redirect")) {
    localStorage.removeItem("zenif_auth_redirect");
  }
  router.push({name: "Welcome"});
});
</script>
<template></template>
