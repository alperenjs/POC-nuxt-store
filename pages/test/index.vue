<template>
  <div>
    <h1>TEST</h1>
    <NuxtLink to="/" prefetch>About page pre-fetched</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "test",
  middleware: "auth",
};
</script>
