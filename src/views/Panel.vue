<script setup lang="ts">
import { inject, onMounted, onUnmounted, useSlots } from 'vue'

const slots = useSlots();
const registerSubmapComponent = inject('registerSubmapComponent');
const unregisterSubmapComponent = inject('unregisterSubmapComponent');

onMounted(() => {
  console.log('mounted PANEL')
  registerSubmapComponent(slots.submap);
})

onUnmounted(() => {
  console.log('unmounted PANEL')
  unregisterSubmapComponent()
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