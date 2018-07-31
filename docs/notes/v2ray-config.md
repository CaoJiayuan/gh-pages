---
title: v2ray configs
---

<center>
<h1>Vray configs using docker </h1>
</center>

> A easy way to ..., you know what i mean (see [白话文教程](https://toutyrater.github.io/))


### Compose (using tls)

``` yaml {4}
app:
  image: v2ray/official
  volumes:
    - /root/.acme.sh/v2ray.enorith.com_ecc/:/etc/cert
    - ./etc/:/etc/v2ray
  ports:
    - 10443:443
```

### [server] etc/config.json  (using tls)
``` json {18-29}
{
  "log": {
    "loglevel": "warning",
    "access": "/etc/v2ray/access.log",
    "error": "/etc/v2ray/error.log"
  },
  "inbound": {
    "port": 443,
    "protocol": "vmess",
    "settings": {
      "clients": [
        {
          "id": "b831381d-6324-4d53-ad4f-8cda48b30811",
          "alterId": 64
        }
      ]
    },
    "streamSettings": {
      "network": "tcp",
      "security": "tls", 
      "tlsSettings": {
        "certificates": [
          {
            "certificateFile": "/etc/cert/fullchain.cer",
            "keyFile": "/etc/cert/domain.key"
          }
        ]
      }
    }
  },
  "outbound": {
    "protocol": "freedom",
    "settings": {}
  }
}
```

### [client] config.json  (using tls)
```json {32-35}
{
  "log": {
    "loglevel": "warning"
  },  
  "inbound": {
    "port": 1080,
    "listen": "127.0.0.1",
    "protocol": "socks",
    "domainOverride": ["tls","http"],
    "settings": {
      "auth": "noauth",
      "udp": false,
      "ip": "127.0.0.1"
    }   
  },  
  "outbound": {
    "protocol": "vmess",
    "settings": {
     "vnext": [
        {   
          "address": "domain",
          "port": 10443,
          "users": [
            {   
              "id": "b831381d-6324-4d53-ad4f-8cda48b30811",
              "alterId": 64
            }   
          ]
        }
      ]
    },
    "streamSettings": {
      "network": "tcp",
      "security": "tls"
    }
  }
}
```