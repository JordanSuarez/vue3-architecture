<script setup>
import { provide, onBeforeUnmount, onMounted, ref } from 'vue'
import GlobalMap from '@/views/GlobalMap.vue'

onMounted(() => {
  console.log('mounted MAP VIEW')
})

const submapComponent = ref(null);

provide('registerSubmapComponent', (comp) => {
  console.log({ comp })
  submapComponent.value = comp
});

provide('unregisterSubmapComponent', () => {
  submapComponent.value = null
});


onBeforeUnmount(() => {
  console.log('unmounted MAP VIEW')
  submapComponent.value = null
})


// https://stricker.digital/posts/teleporting-renderless-slots-in-vuejs/
</script>

<template>
  <div class="map">
    <h1>Parent map view</h1>

    <div class="link">
      <router-link to="/panel-1">Panel 1</router-link>
      <router-link to="/panel-2">Panel 2</router-link>
    </div>

    <div class="content">
      <router-view name="panel" :test="{test: 'test props router'}" />

      <div>
        <GlobalMap>
          <template #submap>
            <component v-if="submapComponent" :is="submapComponent" />
          </template>
        </GlobalMap>
      </div>
    </div>
  </div>
</template>

<style>
.map {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.content {
  display: flex;
  justify-content: space-between;
}

.link {
  display: flex;
  gap: 20px;

  a {
    color: #42b983;
  }
}

</style>
