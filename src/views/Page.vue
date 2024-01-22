<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

onMounted(() => {
  console.log('mounted PAGE')
})

onBeforeUnmount(() => {
  console.log('unmounted PAGE')
})
</script>

<template>
  <div class="page">
    <h1>Parent page view</h1>
    <router-view />
    <router-link to="/panel-1">Panel 1</router-link>
    <router-link to="/page-1">Page 1</router-link>
  </div>
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>