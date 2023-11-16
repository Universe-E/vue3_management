import { createRouter, createWebHashHistory } from 'vue-router'
import { constRoute } from '@/router/routes.ts'

const router = createRouter({
  //hash
  history: createWebHashHistory(),
  routes: constRoute,
  //scroll action
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})
export default router
