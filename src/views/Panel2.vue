<script setup lang="ts">
import { inject, onMounted } from 'vue'

const panel = inject('panel');

onMounted(() => {
  console.log('mounted PANEL 2', panel)
})
</script>

<template>
  <h1>Panel 2 view {{panel}}</h1>
  <slot />
</template>