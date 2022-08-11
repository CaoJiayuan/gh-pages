---
title: Acme ssl cert install
---

<center>
<h1>Install ssl cert (nginx) </h1>
</center>

## install ssl cert

```hash
DOMAIN=test.domain.com
acme.sh --issue -d ${DOMAIN} -w /var/www/le_root
acme.sh --install-cert -d ${DOMAIN} \
--cert-file /etc/nginx/certs/${DOMAIN}/cert \
--key-file /etc/nginx/certs/${DOMAIN}/key \
--fullchain-file /etc/nginx/certs/${DOMAIN}/fullchain \
--reloadcmd "systemctl reload nginx.service"
```