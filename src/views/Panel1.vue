<script setup lang="ts">
import { inject, onMounted } from 'vue'

const panel = inject('panel');

onMounted(() => {
  console.log('mounted PANEL 1', panel)
})
</script>

<template>
  <h1>Panel 1 view {{panel}}</h1>
  <slot />
</template>