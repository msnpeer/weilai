#!/bin/bash
# ============================================================
# L1 招生落地页一键部署脚本
# 用法: bash deploy-l1-landing.sh [域名]
# 示例: bash deploy-l1-landing.sh ai.weilai.com
#       bash deploy-l1-landing.sh 8.219.164.50  (IP直接访问)
# ============================================================

set -e

# 配置
SITE_DIR="/www/wwwroot/entrocamp"
SOURCE_HTML="/root/.hermes/projects/entrocamp/docs/l1-enrollment.html"
NGINX_VHOST="/www/server/nginx/conf/vhost"
LOG_FILE="/tmp/entrocamp-deploy.log"

# 颜色
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[$(date '+%H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1" | tee -a "$LOG_FILE"; }
error() { echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"; exit 1; }

# 域名参数
DOMAIN="${1:-}"

if [ -z "$DOMAIN" ]; then
    echo ""
    echo "=========================================="
    echo "  L1 招生落地页一键部署"
    echo "=========================================="
    echo ""
    echo "用法: bash deploy-l1-landing.sh [域名或IP]"
    echo ""
    echo "示例:"
    echo "  bash deploy-l1-landing.sh ai.weilai.com    # 绑定域名"
    echo "  bash deploy-l1-landing.sh 8.219.164.50     # IP直接访问"
    echo ""
    echo "部署内容: L1 AI破界营招生报名落地页"
    echo "源文件:   $SOURCE_HTML"
    echo "目标目录: $SITE_DIR"
    echo ""
    read -p "请输入域名或IP: " DOMAIN
    [ -z "$DOMAIN" ] && error "域名不能为空"
fi

log "=========================================="
log "开始部署: $DOMAIN"
log "=========================================="

# Step 1: 检查源文件
log "Step 1/5: 检查源文件..."
if [ ! -f "$SOURCE_HTML" ]; then
    error "源文件不存在: $SOURCE_HTML"
fi
log "  ✅ 源文件就绪 ($(wc -c < "$SOURCE_HTML") bytes)"

# Step 2: 创建站点目录
log "Step 2/5: 创建站点目录..."
mkdir -p "$SITE_DIR"
cp "$SOURCE_HTML" "$SITE_DIR/index.html"
log "  ✅ 已复制到 $SITE_DIR/index.html"

# Step 3: 创建 nginx 配置
log "Step 3/5: 创建 nginx 配置..."
mkdir -p "$NGINX_VHOST"

# 判断是IP还是域名
if echo "$DOMAIN" | grep -qE '^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$'; then
    # IP访问
    SERVER_NAME="$DOMAIN"
    LISTEN_DIRECTIVE="listen 80;"
else
    # 域名访问
    SERVER_NAME="$DOMAIN www.$DOMAIN"
    LISTEN_DIRECTIVE="listen 80;
    # 如需HTTPS，取消下面两行注释并配置SSL证书:
    # listen 443 ssl;
    # ssl_certificate /www/server/nginx/conf/ssl/$DOMAIN.pem;
    # ssl_certificate_key /www/server/nginx/conf/ssl/$DOMAIN.key;"
fi

cat > "$NGINX_VHOST/entrocamp.conf" << EOF
# EntroCamp L1 招生落地页
# 部署时间: $(date '+%Y-%m-%d %H:%M:%S')
# 部署脚本: deploy-l1-landing.sh

server {
    $LISTEN_DIRECTIVE
    server_name $SERVER_NAME;
    index index.html;
    root $SITE_DIR;

    # 静态文件缓存
    location ~* \.(html|css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
    }

    # Gzip 压缩
    gzip on;
    gzip_types text/html text/css application/javascript;
    gzip_min_length 1000;

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # 日志
    access_log /www/wwwlogs/entrocamp-access.log;
    error_log /www/wwwlogs/entrocamp-error.log;
}
EOF
log "  ✅ nginx 配置已写入 $NGINX_VHOST/entrocamp.conf"

# Step 4: 测试 nginx 配置
log "Step 4/5: 测试 nginx 配置..."
if nginx -t 2>&1 | tee -a "$LOG_FILE" | grep -q "successful"; then
    log "  ✅ nginx 配置测试通过"
else
    error "nginx 配置测试失败，请检查 $NGINX_VHOST/entrocamp.conf"
fi

# Step 5: 重载 nginx
log "Step 5/5: 重载 nginx..."
nginx -s reload 2>&1 | tee -a "$LOG_FILE"
log "  ✅ nginx 已重载"

# 验证
log ""
log "=========================================="
log "✅ 部署完成!"
log "=========================================="
log ""
log "访问地址: http://$DOMAIN"
log "站点目录: $SITE_DIR"
log "nginx配置: $NGINX_VHOST/entrocamp.conf"
log "访问日志: /www/wwwlogs/entrocamp-access.log"
log ""

# 快速验证
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "http://$DOMAIN" 2>/dev/null || echo "000")
if [ "$HTTP_CODE" = "200" ]; then
    log "🎉 验证通过: http://$DOMAIN 返回 HTTP 200"
elif [ "$HTTP_CODE" = "000" ]; then
    warn "⚠️  无法连接到 http://$DOMAIN — 可能需要配置DNS或防火墙放行80端口"
else
    warn "⚠️  http://$DOMAIN 返回 HTTP $HTTP_CODE — 请检查配置"
fi

log ""
log "后续步骤:"
log "  1. 如需域名访问，请配置DNS解析指向本服务器IP"
log "  2. 如需HTTPS，请上传SSL证书到 /www/server/nginx/conf/ssl/"
log "  3. 报名数据暂存浏览器 localStorage，后续可接入后端API"
log ""
