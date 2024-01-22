import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Page from '@/views/Page.vue'
import Panel from '@/views/Panel.vue'
import Page1 from '@/views/Page1.vue'
import Panel1 from '@/views/Panel1.vue'
import MapView from '@/views/MapView.vue'
import Submap1 from '@/views/Submap1.vue'
import Submap2 from '@/views/Submap2.vue'
import GlobalMap from '@/views/GlobalMap.vue'
import Panel2 from '@/views/Panel2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})

router.addRoute('home', {
  name: 'map-view',
  path: '',
  components: {
    default: MapView,
  },
  props: true,
  children: [
    {
      name: 'panel.1',
      path: '/panel-1',
      components: {
        panel: Panel1,
        submap: Submap1,
      },
      props: true,
    },
    {
      name: 'panel.2',
      path: '/panel-2',
      components: {
        panel: Panel2,
        submap: Submap2,
      },
      props: true,
    },
  ],
})

router.addRoute('home', {
  name: 'page',
  path: '',
  components: {
    default: Page,
  },
  children: [
    {
      name: 'page.1',
      path: '/page-1',
      components: {
        default: Page1,
      },
    },
  ],
})

export default router
