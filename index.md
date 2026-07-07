---
layout: home

hero:
  name: "未来 AI 实战训练营"
  text: "团队共享知识中枢"
  tagline: 多人 · 多 Agent · 一份真相源
  actions:
    - theme: brand
      text: 进入 Wiki
      link: /wiki/INDEX
    - theme: alt
      text: Agent 规范
      link: /wiki/README

features:
  - title: 决策可追溯
    details: 每一次关键决策都记录在 decisions/ 中，带日期、背景、理由和备选方案。
  - title: 规格唯一源
    details: 定价、分成比例、产品参数统一存放在 specs/，Agent 不再用旧数据。
  - title: Agent 原生
    details: 所有内容都是 Markdown 文件，Agent 直接读写，无需 API 中间层。
  - title: 自动部署
    details: 每次推送自动构建为网页，手机浏览器即可访问。
---

## 快速开始

### 团队成员

```bash
git clone https://github.com/msnpeer/weilai.git
cd weilai
```

### Agent

接到任务后，先执行：`git pull origin main`，然后在 `wiki/` 目录下读写文件，完成后 `git push`。

### 本地预览

```bash
npm install
npm run dev
```
