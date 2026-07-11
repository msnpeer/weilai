---
layout: home
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  --vp-c-brand-1: #2563eb;
  --vp-c-brand-2: #3b82f6;
  --vp-c-brand-3: #1d4ed8;
}
.dark {
  --vp-c-brand-1: #60a5fa;
  --vp-c-brand-2: #3b82f6;
  --vp-c-brand-3: #93bbfd;
}
.VPHero { padding: 48px 0 24px 0 !important; }
.VPHero .name {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.VPHero .text { font-size: 22px !important; font-weight: 500 !important; }
.VPHero .tagline { font-size: 15px !important; }

.cmd-wrap {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px 48px 24px;
}

.cmd-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 28px;
}
@media (max-width: 640px) { .cmd-stats { grid-template-columns: repeat(2, 1fr); } }
.cmd-stat {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 16px;
  text-align: center;
}
.cmd-stat .num { font-size: 28px; font-weight: 600; }
.cmd-stat .label { font-size: 12px; color: var(--vp-c-text-2); margin-top: 4px; }
.s-blue .num { color: #2563eb; }
.s-green .num { color: #059669; }
.s-amber .num { color: #d97706; }
.s-purple .num { color: #7c3aed; }

.cmd-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
@media (max-width: 640px) { .cmd-grid { grid-template-columns: 1fr; } }
.cmd-card {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 18px 20px;
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.2s;
}
.cmd-card:hover { border-color: var(--vp-c-brand-1); }
.cmd-card h3 { font-size: 14px; font-weight: 600; margin: 0 0 6px 0; }
.cmd-card p { font-size: 12px; color: var(--vp-c-text-2); margin: 0 0 12px 0; line-height: 1.6; }
.cmd-card .links { display: flex; flex-wrap: wrap; gap: 8px; }
.cmd-card .links a {
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.15s;
}
.link-blue { background: #dbeafe; color: #1d4ed8; }
.link-green { background: #d1fae5; color: #065f46; }
.link-amber { background: #fef3c7; color: #92400e; }
.link-purple { background: #ede9fe; color: #6d28d9; }

.status-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 13px;
}
.dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; flex-shrink: 0; }
.dot-green { background: #10b981; }
.dot-amber { background: #f59e0b; }
.dot-gray { background: #9ca3af; }
</style>

<script setup>
import { VPHomeHero } from 'vitepress/theme'
</script>

<VPHomeHero
  name="未来 AI 实战训练营"
  text="指挥部"
  tagline="多人协作 · 多 Agent 并行 · 单一真相源"
/>

<div class="cmd-wrap">

<div class="cmd-stats">
  <div class="cmd-stat s-blue">
    <div class="num">4</div>
    <div class="label">核心文档就绪</div>
  </div>
  <div class="cmd-stat s-green">
    <div class="num">7</div>
    <div class="label">已完成节点</div>
  </div>
  <div class="cmd-stat s-amber">
    <div class="num">6</div>
    <div class="label">进行中任务</div>
  </div>
  <div class="cmd-stat s-purple">
    <div class="num">14</div>
    <div class="label">核心团队成员</div>
  </div>
</div>

<div class="cmd-grid">

  <div class="cmd-card">
    <h3>💰 融资与估值</h3>
    <p>30 万 / 10% / 估值 300 万 · 3 层权益 · 24 月锁定期</p>
    <div class="status-row">
      <span class="dot dot-green"></span> 投资招募计划书 v5.1 定稿
    </div>
    <div class="links">
      <a class="link-blue" href="/weilai/wiki/specs/投资招募">完整版计划书</a>
    </div>
  </div>

  <div class="cmd-card">
    <h3>🤝 城市合伙人体系</h3>
    <p>五档（铜/银/金/钻/战略）· 加盟折扣 5-7 折 · 分润 2:8~4:6</p>
    <div class="status-row">
      <span class="dot dot-green"></span> 城市合伙人计划 v2.1 定稿
    </div>
    <div class="links">
      <a class="link-blue" href="/weilai/wiki/specs/城市合伙人体系">完整版计划书</a>
    </div>
  </div>

  <div class="cmd-card">
    <h3>📚 课程体系</h3>
    <p>三阶 × 双赛道 · ¥3,980~¥39,800 · 全程实操出成品</p>
    <div class="status-row">
      <span class="dot dot-green"></span> 三阶课程教案完成 · 定价体系确定
    </div>
    <div class="links">
      <a class="link-blue" href="/weilai/wiki/specs/课程清单">完整课程清单</a>
    </div>
  </div>

  <div class="cmd-card">
    <h3>👥 团队架构</h3>
    <p>8 人讲师团队 + 6 人核心运营 · 16 年教育根基</p>
    <div class="status-row">
      <span class="dot dot-green"></span> 团队架构确立 · 角色分工明确
    </div>
    <div class="links">
      <a class="link-blue" href="/weilai/wiki/specs/团队人员清单">完整人员清单</a>
      <a class="link-purple" href="/weilai/wiki/contacts/核心团队">团队详情页</a>
    </div>
  </div>

  <div class="cmd-card">
    <h3>🚀 首期启动</h3>
    <p>首批 4 城（山东/重庆/珠海/海南）· 7/12-7/28 招生窗口</p>
    <div class="status-row">
      <span class="dot dot-amber"></span> 招生物料准备中 · 教案终审定稿中
    </div>
    <div class="links">
      <a class="link-green" href="/weilai/wiki/kanban">任务看板</a>
      <a class="link-amber" href="/weilai/wiki/meetings/_模板">会议模板</a>
    </div>
  </div>

  <div class="cmd-card">
    <h3>⚙️ Wiki 系统</h3>
    <p>GitHub 私有仓库 · VitePress 自动部署 · Agent 原生协作</p>
    <div class="status-row">
      <span class="dot dot-green"></span> 系统运行中 · 文件整合归档完成
    </div>
    <div class="links">
      <a class="link-blue" href="/weilai/wiki/README">Agent 规范</a>
      <a class="link-purple" href="/weilai/wiki/decisions/2026-07-07_Wiki技术选型">技术选型决策</a>
      <a class="link-green" href="/weilai/wiki/INDEX">Wiki 总目录</a>
    </div>
  </div>

</div>
</div>

<!-- @Agent: Clyde | 2026-07-07 | create/modify: 初始化 Wiki 知识库 -->
