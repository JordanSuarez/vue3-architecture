<script setup>
import { provide, onBeforeUnmount, onMounted, ref, reactive } from 'vue'
import GlobalMap from '@/views/GlobalMap.vue'
import Panel from '@/views/Panel.vue'

onMounted(() => {
  console.log('mounted MAP VIEW')
})

const components = ref([]);

provide('registerComponent', (comp) => {
  console.log({ comp })
  components.value.push(comp)
});


onBeforeUnmount(() => {
  console.log('unmounted MAP VIEW')
})


// https://stricker.digital/posts/teleporting-renderless-slots-in-vuejs/
</script>

<template>
  <div class="map">
    <h1>Parent map view</h1>
      <GlobalMap>
        <template #submap>
          <component v-for="component in components" :is="component.slot" :data="component.props" />
        </template>
      </GlobalMap>


<!--    <router-view v-slot="{ Component }" name="map">-->
<!--      <keep-alive key="map">-->
<!--        <component :is="Component" />-->
<!--      </keep-alive>-->
<!--    </router-view>-->


    <Panel toto="fofofo">
        <template #panel>
          <router-view name="panel" />
        </template>
        <template #submap="{data}">
          <router-view name="submap" :data="data" />
        </template>
    </Panel>


    <div class="link">
      <router-link to="/panel-1">Panel 1</router-link>
      <router-link to="/panel-2">Panel 2</router-link>
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

.link {
  display: flex;
  gap: 20px;

  a {
    color: #42b983;
  }
}

</style>
