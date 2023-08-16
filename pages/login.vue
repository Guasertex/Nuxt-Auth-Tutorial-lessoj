<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/protected',
  },
})
</script>

<template>
  <Login class="w-full h-auto" />
</template>
