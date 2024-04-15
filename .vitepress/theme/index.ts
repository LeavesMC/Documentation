import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'

import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities'
import '@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css'

import './index.css'

import NetfilyAds from './NetfilyAds.vue'
import Language from './Language.vue'

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    vitepressNprogress(ctx)
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () => h(NetfilyAds),
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
      'layout-top': () => h(Language),
    })
  },
}
