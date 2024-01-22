<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import Panel from '@/views/Panel.vue'

const props = defineProps<{ test: any }>()

const count = ref(0)

const data = computed(() => {
  return Array.from({ length: count.value }, (_, i) => ({
    id: i,
    value: `test ${i}`,
  }))
})

onMounted(() => {
  console.log('mounted PANEL 1')
})

onBeforeUnmount(() => {
  console.log('unmounted PANEL 1')
})
</script>

<template>
  <Panel>
    <template #panel>
        <h1>
          Panel 1 view
          <button @click="count++" style="width: fit-content">Update</button>
        </h1>

        <pre>
          <code>
            {{ JSON.stringify({ test: props.test, count, data }, null, 2) }}
          </code>
        </pre>
    </template>

    <template #submap>
      <router-view name="submap" :test="props.test" :count="count" :data="data" />
    </template>
  </Panel>
</template>