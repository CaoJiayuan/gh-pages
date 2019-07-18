---
title: Open port on centos
---

<center>
<h1>Open port on centos </h1>
</center>

> open port on centos 7

```bash
# add port
firewall-cmd --zone=public --add-port=${PORT}/tcp --permanent

# reload
firewall-cmd --reload
```