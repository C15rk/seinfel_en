// app/router.options.ts

import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/guide/advanced/scroll-behavior.html
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到页面顶部
    return { top: 0 }
  }
}
