import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en',
  title: 'LeavesMC Documentation',
  description: 'Documentation for all projects made by the LeavesMC team.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/en/leaves/': { base: '/en/leaves/', items: sidebarLeaves() },
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
      link: '/en/',
    },
    {
      text: 'Leaves',
      link: '/en/leaves/guides/getting-started',
      activeMatch: '/en/leaves/',
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
      base: '/en/leaves/guides/',
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
      base: '/en/leaves/reference/',
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
