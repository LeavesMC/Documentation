import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  title: 'LeavesMC Documentation',
  description: 'Documentation for all projects made by the LeavesMC team.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/leaves/': { base: '/leaves/', items: sidebarLeaves() },
    },

    footer: {
      message: 'All documents are licensed under CC BY-SA 4.0',
      copyright: '© 2024 The LeavesMC Team',
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Leaves',
      link: '/leaves/guides/getting-started',
      activeMatch: '/leaves/',
    },
    {
      text: 'More',
      items: [
        {
          text: 'Main Site',
          link: 'https://leavesmc.org',
        },
        {
          text: 'Javadocs',
          link: 'https://repo.leavesmc.org',
        },
      ],
    },
  ]
}

function sidebarLeaves(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guides',
      collapsed: false,
      base: '/leaves/guides/',
      items: [
        {
          text: 'Getting Started',
          link: 'getting-started',
        },
        {
          text: 'Next Steps',
          link: 'next-steps',
        },
        {
          text: 'Migrating to or from Leaves',
          link: 'migration',
        },
      ],
    },
    {
      text: 'Reference',
      collapsed: false,
      base: '/leaves/reference/',
      items: [
        {
          text: 'Configuration',
          link: 'configuration',
        },
        {
          text: 'Fake Player',
          link: 'fakeplayer',
        },
      ],
    },
  ]
}
