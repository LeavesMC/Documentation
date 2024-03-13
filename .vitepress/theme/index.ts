import DefaultTheme from 'vitepress/theme'
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    vitepressNprogress(ctx)
    vitepressBackToTop({
      threshold: 300,
    })
  },
}
