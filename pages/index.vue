<template>
<div>
<NuxtLink to="/test" prefetch>About page pre-fetched</NuxtLink>
  <Tutorial/>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
