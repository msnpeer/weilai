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
        text: '核心信息',
        items: [
          { text: '股权招募计划书', link: '/wiki/specs/投资招募' },
          { text: '城市合伙人招募计划书', link: '/wiki/specs/城市合伙人体系' },
          { text: '课程清单', link: '/wiki/specs/课程清单' },
          { text: '团队人员清单', link: '/wiki/specs/团队人员清单' },
        ]
      },
      { text: '看板', link: '/wiki/kanban' },
    ],

    sidebar: {
      '/wiki/': [
        {
          text: '总览',
          items: [
            { text: '总目录', link: '/wiki/INDEX' },
          { text: '任务看板', link: '/wiki/kanban' },
          { text: 'Agent 规范', link: '/wiki/README' },
          ]
        },
        {
          text: '决策记录',
          collapsed: false,
          items: [
            { text: '07-11 城市合伙人协议定稿', link: '/wiki/decisions/2026-07-11_城市合伙人协议定稿' },
            { text: '07-07 Wiki 技术选型', link: '/wiki/decisions/2026-07-07_Wiki技术选型' },
          ]
        },
        {
          text: '核心产品信息',
          collapsed: false,
          items: [
            { text: '股权招募计划书', link: '/wiki/specs/投资招募' },
            { text: '城市合伙人招募计划书', link: '/wiki/specs/城市合伙人体系' },
            { text: '城市合伙人协议', link: '/wiki/specs/城市合伙人协议' },
            { text: '营销中心渠道激励政策', link: '/wiki/specs/营销中心渠道激励政策' },
            { text: '课程清单', link: '/wiki/specs/课程清单' },
            { text: '团队人员清单', link: '/wiki/specs/团队人员清单' },
            { text: '产品参数速查', link: '/wiki/specs/产品参数' },
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
