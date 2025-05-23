import { defineConfigWithTheme } from 'vitepress'
import { en } from './en'
import { zh_Hans, search as zhHansSearch } from './zh_Hans'

export default defineConfigWithTheme({
  vite: {
    optimizeDeps: {
      include: [
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas',
      ],
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
      ],
    },
  },
  srcDir: './src',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'darkreader-lock' }],
  ],

  locales: {
    en: { label: '[WIP] English', ...en },
    zh_Hans: { label: '简体中文', ...zh_Hans },
  },

  themeConfig: {
    externalLinkIcon: true,

    editLink: {
      pattern: 'https://github.com/LeavesMC/Documentation/edit/main/src/:path',
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/5hgtU72w33' },
      { icon: 'github', link: 'https://github.com/LeavesMC' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: { ...zhHansSearch },
      },
    },
  },
  sitemap: {
    hostname: 'https://docs.leavesmc.org',
  },
})
