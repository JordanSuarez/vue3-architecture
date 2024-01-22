import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import MapView from '@/views/MapView.vue'
import Panel1 from '@/views/Panel1.vue'
import Panel2 from '@/views/Panel2.vue'
import Panel3 from '@/views/Panel3.vue'

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
      component: Panel1,
      props: true,
    },
    {
      name: 'panel.2',
      path: '/panel-2',
      component: Panel2,
      props: true,
    },
    {
      name: 'panel.3',
      path: '/panel-3',
      component: Panel3,
      props: true,
    },
  ],
})

export default router
