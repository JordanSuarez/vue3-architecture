<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('mounted PANEL')
})

onUnmounted(() => {
  console.log('unmounted PANEL')
})
</script>

<template>
  <div class="panel">
    <slot name="panel"/>
  </div>
</template>

<style>
.panel {
  display: flex;
  flex-direction: column;
}
</style>
