---
layout: home

hero:
  name: "未来 AI 实战训练营"
  text: "团队共享知识中枢"
  tagline: 多人协作 · 多 Agent 并行 · 单一真相源
  actions:
    - theme: brand
      text: 进入知识库
      link: /wiki/INDEX
    - theme: alt
      text: Agent 协作规范
      link: /wiki/README
  image:
    src: /logo.svg
    alt: 未来AI

features:
  - icon: 🧭
    title: 决策可追溯
    details: 每一次关键决策都记录在 decisions/ 中，带日期、背景、理由和备选方案。
    link: /wiki/decisions/2026-07-07_Wiki技术选型.html
  - icon: 📐
    title: 规格唯一源
    details: 定价、分成比例、产品参数统一存放在 specs/，Agent 不再用旧数据。
    link: /wiki/specs/产品参数.html
  - icon: 🤖
    title: Agent 原生
    details: 所有内容都是 Markdown 文件，Agent 直接读写，无需 API 中间层。
    link: /wiki/README.html
  - icon: ⚡
    title: 自动部署
    details: 每次推送自动构建为网页，手机浏览器即可访问。
    link: https://github.com/msnpeer/weilai

---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  --vp-c-brand-1: #2563eb;
  --vp-c-brand-2: #3b82f6;
  --vp-c-brand-3: #1d4ed8;
  --vp-button-brand-bg: #2563eb;
  --vp-button-brand-hover-bg: #1d4ed8;
  --vp-c-brand-soft: rgba(37, 99, 235, 0.1);
}

.dark {
  --vp-c-brand-1: #60a5fa;
  --vp-c-brand-2: #3b82f6;
  --vp-c-brand-3: #93bbfd;
  --vp-button-brand-bg: #3b82f6;
  --vp-button-brand-hover-bg: #2563eb;
  --vp-c-brand-soft: rgba(59, 130, 246, 0.16);
}

.VPHero .name {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.VPHero .text {
  font-size: 28px !important;
  font-weight: 500 !important;
}

.VPFeature {
  border-radius: 12px !important;
  border: 1px solid var(--vp-c-divider) !important;
  transition: border-color 0.2s, box-shadow 0.2s !important;
}

.VPFeature:hover {
  border-color: var(--vp-c-brand-1) !important;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.08) !important;
}

.VPNavBar {
  backdrop-filter: blur(12px);
}

.VPNavBarTitle .title {
  font-weight: 600 !important;
}

.VPSidebar {
  border-right: 1px solid var(--vp-c-divider) !important;
}

.VPDoc .container {
  max-width: 800px !important;
}
</style>
