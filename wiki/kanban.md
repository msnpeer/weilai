---
title: 任务看板
---

<script setup>
import { ref, onMounted, computed } from 'vue'

const issues = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('/weilai/issues.json')
    const data = await res.json()
    issues.value = data
  } catch(e) {
    console.error('Failed to load issues:', e)
  } finally {
    loading.value = false
  }
})

const labelKey = (labels) => {
  for (const l of labels) {
    if (l.startsWith('P0')) return 'p0'
    if (l.startsWith('P1')) return 'p1'
    if (l.startsWith('P2')) return 'p2'
    if (l === '已完成') return 'done'
  }
  return 'p2'
}
const labelText = (labels) => {
  for (const l of labels) {
    if (l.startsWith('P0')) return 'P0'
    if (l.startsWith('P1')) return 'P1'
    if (l.startsWith('P2')) return 'P2'
    if (l === '已完成') return 'OK'
  }
  return ''
}

const activeIssues = computed(() => issues.value.filter(i => i.state === 'open'))
const doneIssues = computed(() => issues.value.filter(i => i.state === 'closed'))
const p0s = computed(() => activeIssues.value.filter(i => labelKey(i.labels) === 'p0'))
const p1s = computed(() => activeIssues.value.filter(i => labelKey(i.labels) === 'p1'))
const p2s = computed(() => activeIssues.value.filter(i => labelKey(i.labels) === 'p2'))

const fmtDate = (d) => {
  if (!d) return ''
  return new Date(d).toLocaleDateString('zh-CN', { month:'short', day:'numeric' })
}
</script>

<style>
.kb-loading { text-align:center; padding:48px; color:var(--vp-c-text-2); }
.kb-wrap { margin:20px 0 32px 0; }
.kb-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 20px;
}
@media (max-width: 700px) { .kb-row { grid-template-columns: 1fr; } }
.kb-col {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  overflow: hidden;
}
.kb-head {
  padding: 12px 16px;
  display: flex; justify-content: space-between; align-items: center;
}
.kb-head h3 { margin:0; font-size:13px; font-weight:600; }
.kb-head .cnt { font-size:12px; font-weight:500; padding:2px 10px; border-radius:10px; }
.row-p0 .kb-head { border-bottom:2px solid #fca5a5; }
.row-p0 .kb-head h3 { color:#dc2626; }
.row-p0 .cnt { background:#fee2e2; color:#dc2626; }
.row-p1 .kb-head { border-bottom:2px solid #fdba74; }
.row-p1 .kb-head h3 { color:#ea580c; }
.row-p1 .cnt { background:#ffedd5; color:#ea580c; }
.row-p2 .kb-head { border-bottom:2px solid #86efac; }
.row-p2 .kb-head h3 { color:#16a34a; }
.row-p2 .cnt { background:#dcfce7; color:#16a34a; }
.kb-body { padding:10px 14px 14px 14px; }
.kb-item {
  display: flex; align-items: flex-start; gap:10px;
  padding:10px 12px; margin-bottom:6px;
  background:var(--vp-c-bg); border:1px solid var(--vp-c-divider);
  border-radius:8px; font-size:13px; text-decoration:none; color:inherit;
  transition: border-color 0.15s;
}
.kb-item:last-child { margin-bottom:0; }
.kb-item:hover { border-color:var(--vp-c-brand-1); }
.kb-item .pri {
  flex-shrink:0; font-size:10px; font-weight:600;
  padding:2px 6px; border-radius:3px; margin-top:1px;
}
.pri-p0 { background:#fee2e2; color:#dc2626; }
.pri-p1 { background:#ffedd5; color:#ea580c; }
.pri-p2 { background:#dcfce7; color:#16a34a; }
.pri-done { background:#dbeafe; color:#2563eb; }
.kb-item .num { font-size:11px; color:var(--vp-c-text-3); margin-left:auto; flex-shrink:0; }

.kb-done {
  background: var(--vp-c-bg-soft);
  border-radius: 10px; overflow: hidden; margin-bottom: 24px;
}
.kb-done .kb-head { border-bottom:2px solid #93c5fd; }
.kb-done .kb-head h3 { color:#2563eb; }
.kb-done .cnt { background:#dbeafe; color:#2563eb; }
.kb-done-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap:6px;
  padding:10px 14px 14px 14px;
}
@media (max-width: 500px) { .kb-done-grid { grid-template-columns: 1fr; } }
.kb-gh-link {
  display:block; text-align:center; margin-top:24px;
  font-size:13px; color:var(--vp-c-text-2);
}
.kb-gh-link a { font-weight:500; }
</style>

# 任务看板

<div v-if="loading" class="kb-loading">加载中...</div>

<template v-else>

<div class="kb-wrap">

<div class="kb-row">
  <div class="kb-col row-p0">
    <div class="kb-head">
      <h3>本周必须完成</h3>
      <span class="cnt">{{ p0s.length }} 项</span>
    </div>
    <div class="kb-body">
      <a v-for="i in p0s" :key="i.number" :href="i.url" target="_blank" class="kb-item">
        <span class="pri pri-p0">P0</span>
        <span>{{ i.title }}</span>
        <span class="num">#{{ i.number }}</span>
      </a>
      <div v-if="p0s.length===0" style="font-size:12px;color:var(--vp-c-text-3);padding:8px;">暂无</div>
    </div>
  </div>

  <div class="kb-col row-p1">
    <div class="kb-head">
      <h3>两周内完成</h3>
      <span class="cnt">{{ p1s.length }} 项</span>
    </div>
    <div class="kb-body">
      <a v-for="i in p1s" :key="i.number" :href="i.url" target="_blank" class="kb-item">
        <span class="pri pri-p1">P1</span>
        <span>{{ i.title }}</span>
        <span class="num">#{{ i.number }}</span>
      </a>
      <div v-if="p1s.length===0" style="font-size:12px;color:var(--vp-c-text-3);padding:8px;">暂无</div>
    </div>
  </div>

  <div class="kb-col row-p2">
    <div class="kb-head">
      <h3>本月内完成</h3>
      <span class="cnt">{{ p2s.length }} 项</span>
    </div>
    <div class="kb-body">
      <a v-for="i in p2s" :key="i.number" :href="i.url" target="_blank" class="kb-item">
        <span class="pri pri-p2">P2</span>
        <span>{{ i.title }}</span>
        <span class="num">#{{ i.number }}</span>
      </a>
      <div v-if="p2s.length===0" style="font-size:12px;color:var(--vp-c-text-3);padding:8px;">暂无</div>
    </div>
  </div>
</div>

<div class="kb-done">
  <div class="kb-head">
    <h3>已完成</h3>
    <span class="cnt">{{ doneIssues.length }} 项</span>
  </div>
  <div class="kb-done-grid">
    <a v-for="i in doneIssues" :key="i.number" :href="i.url" target="_blank" class="kb-item">
      <span class="pri pri-done">OK</span>
      <span>{{ i.title }}</span>
      <span class="num">#{{ i.number }}</span>
    </a>
  </div>
</div>

</div>

<div class="kb-gh-link">
  完整管理 → <a href="https://github.com/msnpeer/weilai/issues" target="_blank">GitHub Issues</a>
</div>

</template>

---

## Agent 操作指南

### 创建新任务
```bash
gh issue create --repo msnpeer/weilai \
  --title "任务描述" \
  --label "P1 两周内完成" \
  --body "详细说明"
```

### 完成任务
```bash
gh issue close <编号> --repo msnpeer/weilai
```

### 查看所有任务
```bash
gh issue list --repo msnpeer/weilai
```

> 每次 push wiki 代码后，Actions 自动抓取最新 Issues 数据，本页同步更新。
