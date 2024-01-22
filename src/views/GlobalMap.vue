<script setup>
import { onBeforeUnmount, onMounted, provide } from 'vue'

onMounted(() => {
  console.log('mounted GLOBAL MAP')
})

onBeforeUnmount(() => {
  console.log('unmounted GLOBAL MAP')
})

provide('context', {map: 'map'});
</script>

<template>
  <h1>GlobalMap view</h1>
  <slot name="submap" />
</template>