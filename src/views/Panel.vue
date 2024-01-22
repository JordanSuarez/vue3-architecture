<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, provide, reactive, ref, useSlots } from 'vue'

const props = defineProps<{ toto: string }>()

const slots = useSlots();
const registerComponent = inject('registerComponent');

const data = ref(0)

provide('panel', data);

onMounted(() => {
  console.log('mounted PANEL')
  registerComponent({
    // panel: slots.panel,
    slot: slots.submap,
    props: data,
  });
  // registerComponent(slots);
})

onBeforeUnmount(() => {
  console.log('unmounted PANEL')
})
</script>

<template>
  <slot name="panel"/>
  <button @click="data++">Test</button>
</template>
