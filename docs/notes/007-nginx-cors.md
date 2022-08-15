---
title: Nginx configs
---

> Cors

```nginx {5-14}
server {
    # some configs
    location / {
        #other configs
        if ($request_method = OPTIONS) {
              add_header Access-Control-Allow-Origin $http_origin;
              add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;
              add_header Access-Control-Allow-Headers X-XSRF-TOKEN,Authorization,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type;
              add_header Access-Control-Allow-Credentials true;
              add_header Access-Control-Max-Age 3600;
              add_header Content-Length 0;
              return 204;
        }
    }
}

```

> TLS (using acme.sh)

```nginx {4-10}
server{
  listen 80;
  listen 443 ssl;
  ssl_certificate    /root/.acme.sh/your_domain/fullchain.cer;
  ssl_certificate_key /root/.acme.sh/your_domain/your_domain.key;
  ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers         HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers on;
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 10m;
  server_name your_domain;

  root /your/web/path;

  if ($scheme != "https") {
    return 301 https://$host$request_uri;
  }
}
```

> Websocket proxy

```nginx
map $http_upgrade $connection_upgrade {
        default upgrade;
        ''  close;
}
server{
  listen 80;
  server_name socket.your.domain;
  location / {
    proxy_pass http://127.0.0.1:13003; # pass websocket service
    proxy_set_header Host $host;
    proxy_set_header X-Real-Ip $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection upgrade;
    proxy_read_timeout 120s;
  }
}
```



> App proxy

```nginx
server{
  listen 80;
  # some configs
  location / {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Real-Port $remote_port;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_pass http://127.0.0.1:8080; # pass http service
  }
}
```