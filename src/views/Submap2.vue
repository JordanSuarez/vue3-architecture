<script setup lang="ts">
import { inject, onMounted, onUnmounted } from 'vue'

const props = defineProps<{data: any}>()

const context = inject('context');

onMounted(() => {
  console.log('mounted SUB MAP 2', context, props.data)
})

onUnmounted(() => {
  console.log('unmounted SUB MAP 2')
})
</script>

<template>
  <h1>Submap 2 view {{context}} {{props.data}}</h1>
</template>