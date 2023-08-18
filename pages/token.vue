<script setup>
definePageMeta({ auth: false })

// const headers = useRequestHeaders(['cookie']) as HeadersInit
// const { data: token } = await useFetch('/api/token', { headers })
const headers = useRequestHeaders(['cookie'])
const { data: token } = await useFetch('/api/token', { headers })
</script>

<template>
  <pre>{{ token || 'no token present, are you logged in?' }}</pre>
</template>
