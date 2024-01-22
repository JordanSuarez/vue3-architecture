<script setup lang="ts">
import { inject, onMounted, onUnmounted } from 'vue'

const props = defineProps<{test: any, count: any, data: any}>()

const context = inject('context');

onMounted(() => {
  console.log('mounted SUB MAP 2')
})

onUnmounted(() => {
  console.log('unmounted SUB MAP 2')
})
</script>

<template>
  <pre>
    <code>
      {{ JSON.stringify({ context, test: props.test, count: props.count, data: props.data }, null, 2) }}
    </code>
  </pre>
</template>
