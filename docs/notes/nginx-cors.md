---
title: Enable CORS in nginx
---

<center>
<h1>Nginx 跨域配置 </h1>
</center>

> 配置文件

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