---
title: 项目任务看板
---

# 项目任务看板

> 拖拽或点击更新状态 · 最后刷新：<span id="kanban-time"></span>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  document.getElementById('kanban-time').textContent = new Date().toLocaleString('zh-CN')
})
</script>

<style>
.kanban {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 24px;
}
@media (max-width: 900px) {
  .kanban { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 500px) {
  .kanban { grid-template-columns: 1fr; }
}
.kanban-col {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 16px;
  min-height: 200px;
}
.kanban-col h3 {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid;
}
.col-todo h3 { color: #6b7280; border-color: #d1d5db; }
.col-doing h3 { color: #2563eb; border-color: #93c5fd; }
.col-review h3 { color: #d97706; border-color: #fcd34d; }
.col-done h3 { color: #059669; border-color: #6ee7b7; }
.kanban-card {
  background: var(--vp-c-bg);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid var(--vp-c-divider);
  font-size: 13px;
  transition: box-shadow 0.15s;
}
.kanban-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.kanban-card .tag {
  display: inline-block;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 6px;
  font-weight: 500;
}
.tag-p0 { background: #fce4ec; color: #c62828; }
.tag-p1 { background: #fff3e0; color: #e65100; }
.tag-p2 { background: #e8f5e9; color: #2e7d32; }
.tag-owner {
  font-size: 11px;
  color: var(--vp-c-text-2);
  margin-top: 6px;
}
</style>

<div class="kanban">

<div class="kanban-col col-todo">
<h3>📋 待开始</h3>

<div class="kanban-card">
<span class="tag tag-p1">P1</span>
<div>注册北京总部公司</div>
<span class="tag-owner">何虹洁</span>
</div>

<div class="kanban-card">
<span class="tag tag-p1">P1</span>
<div>品牌 VI 与视觉体系落地</div>
<span class="tag-owner">设计团队</span>
</div>

<div class="kanban-card">
<span class="tag tag-p2">P2</span>
<div>学员社群方案定稿</div>
<span class="tag-owner">运营</span>
</div>

<div class="kanban-card">
<span class="tag tag-p2">P2</span>
<div>赛事体系方案定稿</div>
<span class="tag-owner">王咲</span>
</div>

<div class="kanban-card">
<span class="tag tag-p2">P2</span>
<div>认证体系方案定稿</div>
<span class="tag-owner">教研</span>
</div>

<div class="kanban-card">
<span class="tag tag-p2">P2</span>
<div>工具账号注册与配置</div>
<span class="tag-owner">welten</span>
</div>

</div>

<div class="kanban-col col-doing">
<h3>🔄 进行中</h3>

<div class="kanban-card">
<span class="tag tag-p0">P0</span>
<div>投资招募推进</div>
<span class="tag-owner">何虹洁 / 王洋</span>
</div>

<div class="kanban-card">
<span class="tag tag-p0">P0</span>
<div>城市合伙人首批招募（山东/重庆/珠海/海南）</div>
<span class="tag-owner">刘怀华</span>
</div>

<div class="kanban-card">
<span class="tag tag-p0">P0</span>
<div>首期 L1 招生准备（7/12-7/28）</div>
<span class="tag-owner">王洋 / welten</span>
</div>

<div class="kanban-card">
<span class="tag tag-p1">P1</span>
<div>L1 老板自讲教案定稿</div>
<span class="tag-owner">王滕</span>
</div>

<div class="kanban-card">
<span class="tag tag-p1">P1</span>
<div>落地页 + 招生海报上线</div>
<span class="tag-owner">welten</span>
</div>

<div class="kanban-card">
<span class="tag tag-p1">P1</span>
<div>讲师候选人物色与面试</div>
<span class="tag-owner">王滕 / 张子豪</span>
</div>

</div>

<div class="kanban-col col-review">
<h3>👀 待审核</h3>

<div class="kanban-card">
<span class="tag tag-p1">P1</span>
<div>招生文案成品终审</div>
<span class="tag-owner">何虹洁</span>
</div>

<div class="kanban-card">
<span class="tag tag-p1">P1</span>
<div>朋友圈/小红书内容预编辑包审核</div>
<span class="tag-owner">刘怀华</span>
</div>

<div class="kanban-card">
<span class="tag tag-p2">P2</span>
<div>城市合作协议模板法律审核</div>
<span class="tag-owner">法务</span>
</div>

</div>

<div class="kanban-col col-done">
<h3>✅ 已完成</h3>

<div class="kanban-card">
<span class="tag tag-p0">P0</span>
<div>Wiki 知识库搭建</div>
<span class="tag-owner">welten</span>
</div>

<div class="kanban-card">
<span class="tag tag-p0">P0</span>
<div>文件整合归档</div>
<span class="tag-owner">welten</span>
</div>

<div class="kanban-card">
<span class="tag tag-p1">P1</span>
<div>核心商业文档终稿（投资招募 / 城市合伙人）</div>
<span class="tag-owner">welten</span>
</div>

<div class="kanban-card">
<span class="tag tag-p1">P1</span>
<div>三阶课程教案完成</div>
<span class="tag-owner">王滕</span>
</div>

</div>

</div>

---

## 优先级说明

| 等级 | 含义 |
|:--:|------|
| **P0** | 阻塞项，必须本周完成 |
| **P1** | 重要，两周内完成 |
| **P2** | 常规，本月内完成 |

> Agent 操作提示：接任务前先看本看板确认当前状态。完成任务后更新对应卡片位置。
