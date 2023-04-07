---
title: Nginx判断搜索引擎蜘蛛
---

```nginx
location / {
  if ($http_user_agent ~* "Baiduspider|360Spider|bingbot|Googlebot|Sogou web spider") {
    proxy_pass  http://127.0.0.1:8888;
    set $flag "${flag}1";
  }
}
```
