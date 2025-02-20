import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MarkDownView from '@/views/MarkDownView.vue'
import HelloVue from '@/views/HelloVueView.vue'
import InputHandleView from '@/views/InputHandleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: MarkDownView,
    },
    {
      path: '/hello-vue',
      name: 'hello-vue',
      component: HelloVue,
    },
    {
      path: '/input-handle',
      name: 'input-handle',
      component: InputHandleView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
