import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  title: 'LeavesMC Documentation',
  description: 'Documentation for all projects made by the LeavesMC team.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/Leaves/': { base: '/Leaves/', items: sidebarLeaves() },
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
      link: '/Leaves/guides/getting-started',
      activeMatch: '/Leaves/',
    },
    {
      text: 'More',
      items: [
        {
          text: 'Main Site',
          link: 'https://leavesmc.top/?ref=docs',
        },
        {
          text: 'Javadocs',
          link: 'https://repo.leavesmc.top',
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
      base: '/Leaves/guides/',
      items: [
        {
          text: 'Getting Started',
          link: 'getting-started',
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
      base: '/Leaves/reference/',
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
