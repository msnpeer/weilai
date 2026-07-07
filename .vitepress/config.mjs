import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '未来 AI 实战训练营 Wiki',
  description: '团队共享知识中枢',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Wiki', link: '/wiki/INDEX' },
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
          items: [
            { text: '2026-07-07 Wiki 技术选型', link: '/wiki/decisions/2026-07-07_Wiki技术选型' },
          ]
        },
        {
          text: '产品规格',
          items: [
            { text: '产品参数', link: '/wiki/specs/产品参数' },
            { text: '城市合伙人体系', link: '/wiki/specs/城市合伙人体系' },
            { text: '投资招募', link: '/wiki/specs/投资招募' },
          ]
        },
        {
          text: '会议纪要',
          items: [
            { text: '模板', link: '/wiki/meetings/_模板' },
          ]
        },
        {
          text: '联系人',
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
    }
  }
})
