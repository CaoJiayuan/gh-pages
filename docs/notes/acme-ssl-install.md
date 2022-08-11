---
title: 安装ssl证书
---

<center>
<h1>安装ssl证书 (nginx) </h1>
</center>

# 安装 acme.sh
```bash
curl  https://get.acme.sh | sh -s email=my@example.com
```

# 部署

## 配置

> 创建文件夹
```bash
mkdir -p /var/www/le_root/.well-known/acme-challenge
chown -R root:www-data /var/www/le_root
```
> 创建引入文件
```/etc/nginx/includes/letsencrypt-webroot```
```bash
# /etc/nginx/includes/letsencrypt-webroot

location /.well-known/acme-challenge/ {
    alias /var/www/le_root/.well-known/acme-challenge/;
}
```
> 引入配置文件
```nginx{5}
server {
    listen 80;
    server_name mydomain.com;
    # ...
    include includes/letsencrypt-webroot;
}
```
> 重载nginx

```bash
systemctl reload nginx.service
```

## 安装证书

> 申请
```hash
acme.sh --issue -d test.domain.com -w /var/www/le_root
```
> 安装

```hash
mkdir -p /etc/nginx/certs
acme.sh --install-cert -d test.domain.com \
  --cert-file /etc/nginx/certs/test.domain.com/cert \
  --key-file /etc/nginx/certs/test.domain.com/key \
  --fullchain-file /etc/nginx/certs/test.domain.com/fullchain \
  --reloadcmd "systemctl reload nginx.service"
```

> 配置

```nginx{3-11,14}
server{
    listen 80;
    server_name test.domain.com;
    listen 443 ssl;
    ssl_certificate     certs/test.domain.com/cert;
    ssl_certificate_key certs/test.domain.com/key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    client_max_body_size 10M;
    # ...
    include includes/letsencrypt-webroot;
}
```

> 重载

```bash
systemctl reload nginx.service
```