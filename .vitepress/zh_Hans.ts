import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh_Hans = defineConfig({
  lang: 'zh-Hans',
  title: 'LeavesMC 文档',
  description: 'LeavesMC 团队的所有项目文档。',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/zh_Hans/leaves/': { base: '/zh_Hans/leaves/', items: sidebarLeaves() },
    },

    editLink: {
      pattern: 'https://github.com/LeavesMC/Documentation/edit/main/src/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: '所有文档采用 CC BY-SA 4.0 许可协议发布',
      copyright: '© 2024 LeavesMC 团队',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '总览',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '切换语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '主页',
      link: '/zh_Hans/',
    },
    {
      text: 'Leaves',
      link: '/zh_Hans/leaves/guides/getting-started',
      activeMatch: '/leaves/',
    },
    {
      text: '更多',
      items: [
        {
          text: '主站',
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
      collapsed: false,
      items: [
        {
          text: '指南',
          collapsed: false,
          base: '/zh_Hans/leaves/guides/',
          items: [
            { text: '快速开始', link: 'getting-started' },
            { text: '接下来的步骤', link: 'next-steps' },
            { text: '迁移', link: 'migration' },
          ],
        },
        {
          text: '参考',
          collapsed: false,
          base: '/zh_Hans/leaves/reference/',
          items: [
            { text: '配置', link: 'configuration' },
            { text: '假人', link: 'fakeplayer' },
          ],
        },
        {
          text: '进阶',
          collapsed: false,
          base: '/zh_Hans/leaves/advanced/',
          items: [
            { text: 'MCDReforged', link: 'mcdreforged' },
          ],
        },
      ],
    },
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  zh_Hans: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        footer: {
          selectText: '选择',
          navigateText: '切换',
        },
      },
    },
  },
}
