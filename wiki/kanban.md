---
title: 项目任务看板
---

# 项目任务看板

<style>
.kanban-wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin: 20px 0 32px 0;
}
@media (max-width: 900px) {
  .kanban-wrap { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 500px) {
  .kanban-wrap { grid-template-columns: 1fr; }
}
.kb-col {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 0;
  overflow: hidden;
}
.kb-head {
  padding: 14px 16px 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.kb-head h3 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
}
.kb-head .count {
  font-size: 12px;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 10px;
}
.col-gray .kb-head { border-bottom: 2px solid #d1d5db; }
.col-gray .kb-head h3 { color: #6b7280; }
.col-gray .count { background: #f3f4f6; color: #6b7280; }

.col-blue .kb-head { border-bottom: 2px solid #93c5fd; }
.col-blue .kb-head h3 { color: #2563eb; }
.col-blue .count { background: #dbeafe; color: #2563eb; }

.col-amber .kb-head { border-bottom: 2px solid #fcd34d; }
.col-amber .kb-head h3 { color: #d97706; }
.col-amber .count { background: #fef3c7; color: #d97706; }

.col-green .kb-head { border-bottom: 2px solid #6ee7b7; }
.col-green .kb-head h3 { color: #059669; }
.col-green .count { background: #d1fae5; color: #059669; }

.kb-body {
  padding: 12px 14px 16px 14px;
}
.kb-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 1.6;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.kb-card:last-child { margin-bottom: 0; }
.kb-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.kb-card .pri {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 3px;
  margin-right: 8px;
  vertical-align: middle;
  letter-spacing: 0.5px;
}
.pri-p0 { background: #fce4ec; color: #c62828; }
.pri-p1 { background: #fff3e0; color: #e65100; }
.pri-p2 { background: #e8f5e9; color: #2e7d32; }
.pri-done { background: #e3f2fd; color: #1565c0; }
</style>

<div class="kanban-wrap">

<div class="kb-col col-gray">
<div class="kb-head">
  <h3>待开始</h3>
  <span class="count">5</span>
</div>
<div class="kb-body">

<div class="kb-card">
<span class="pri pri-p1">P1</span>注册北京总部公司
</div>

<div class="kb-card">
<span class="pri pri-p1">P1</span>品牌 VI 与视觉体系落地
</div>

<div class="kb-card">
<span class="pri pri-p2">P2</span>学员社群方案定稿
</div>

<div class="kb-card">
<span class="pri pri-p2">P2</span>赛事体系方案定稿
</div>

<div class="kb-card">
<span class="pri pri-p2">P2</span>认证体系方案定稿
</div>

</div>
</div>

<div class="kb-col col-blue">
<div class="kb-head">
  <h3>进行中</h3>
  <span class="count">6</span>
</div>
<div class="kb-body">

<div class="kb-card">
<span class="pri pri-p0">P0</span>投资招募推进
</div>

<div class="kb-card">
<span class="pri pri-p0">P0</span>城市合伙人首批招募（山东/重庆/珠海/海南）
</div>

<div class="kb-card">
<span class="pri pri-p0">P0</span>首期 L1 招生准备（7/12 - 7/28）
</div>

<div class="kb-card">
<span class="pri pri-p1">P1</span>L1 老板自讲教案定稿
</div>

<div class="kb-card">
<span class="pri pri-p1">P1</span>招生落地页 + 海报物料上线
</div>

<div class="kb-card">
<span class="pri pri-p1">P1</span>讲师候选人面试与确认
</div>

</div>
</div>

<div class="kb-col col-amber">
<div class="kb-head">
  <h3>待审核</h3>
  <span class="count">3</span>
</div>
<div class="kb-body">

<div class="kb-card">
<span class="pri pri-p1">P1</span>招生文案成品终审
</div>

<div class="kb-card">
<span class="pri pri-p1">P1</span>朋友圈/小红书内容预编辑包审核
</div>

<div class="kb-card">
<span class="pri pri-p2">P2</span>城市合作协议模板法律审核
</div>

</div>
</div>

<div class="kb-col col-green">
<div class="kb-head">
  <h3>已完成</h3>
  <span class="count">6</span>
</div>
<div class="kb-body">

<div class="kb-card">
<span class="pri pri-done">OK</span>Wiki 知识库搭建上线
</div>

<div class="kb-card">
<span class="pri pri-done">OK</span>桌面文件整合归档
</div>

<div class="kb-card">
<span class="pri pri-done">OK</span>核心商业文档终稿（投资招募 + 城市合伙人）
</div>

<div class="kb-card">
<span class="pri pri-done">OK</span>三阶课程教案完成
</div>

<div class="kb-card">
<span class="pri pri-done">OK</span>核心团队架构确立
</div>

<div class="kb-card">
<span class="pri pri-done">OK</span>产品信息四份文档上线
</div>

</div>
</div>

</div>

---

**优先级**：<span class="pri pri-p0">P0</span> 本周必须完成 · <span class="pri pri-p1">P1</span> 两周内 · <span class="pri pri-p2">P2</span> 本月内

> Agent 协作：接任务前先看本看板，完成后移动对应卡片。
