---
title: Open port on centos
---

> open port on centos 7

```bash
# add port
firewall-cmd --zone=public --add-port=${PORT}/tcp --permanent

# reload
firewall-cmd --reload
```