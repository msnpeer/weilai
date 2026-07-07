import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '未来 AI 实战训练营',
  description: '团队共享知识中枢 · 多人多 Agent 一份真相源',
  lang: 'zh-CN',
  base: '/weilai/',
  lastUpdated: true,
  cleanUrls: true,
  srcExclude: [
    '产品与交付/**',
    '项目规划/**',
    '核心商业文档/**',
    '未来招股计划书/**',
    '案例方案/**',
    '参考资料/**',
    '脚本工具/**',
    '公司资质/**',
    '图片素材/**',
  ],
  head: [
    ['link', { rel: 'icon', href: '/weilai/favicon.ico' }]
  ],

  themeConfig: {
    logo: false,

    nav: [
      { text: '首页', link: '/' },
      { text: '知识库', link: '/wiki/INDEX' },
      {
        text: '文档',
        items: [
          { text: '产品参数', link: '/wiki/specs/产品参数' },
          { text: '城市合伙人', link: '/wiki/specs/城市合伙人体系' },
          { text: '投资招募', link: '/wiki/specs/投资招募' },
        ]
      },
    ],

    sidebar: {
      '/wiki/': [
        {
          text: '总览',
          items: [
            { text: '总目录', link: '/wiki/INDEX' },
            { text: 'Agent 规范', link: '/wiki/README' },
          ]
        },
        {
          text: '决策记录',
          collapsed: false,
          items: [
            { text: '2026-07-07 Wiki 技术选型', link: '/wiki/decisions/2026-07-07_Wiki技术选型' },
          ]
        },
        {
          text: '产品规格',
          collapsed: false,
          items: [
            { text: '产品参数', link: '/wiki/specs/产品参数' },
            { text: '城市合伙人体系', link: '/wiki/specs/城市合伙人体系' },
            { text: '投资招募', link: '/wiki/specs/投资招募' },
          ]
        },
        {
          text: '会议纪要',
          collapsed: false,
          items: [
            { text: '会议模板', link: '/wiki/meetings/_模板' },
          ]
        },
        {
          text: '联系人',
          collapsed: false,
          items: [
            { text: '核心团队', link: '/wiki/contacts/核心团队' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/msnpeer/weilai' }
    ],

    footer: {
      message: '未来基石数字科技（海南）有限公司',
      copyright: '内部资料 · 请勿外传'
    },

    search: {
      provider: 'local'
    }
  }
})
