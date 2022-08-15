---
title: Docker container access host
---

> Docker for Mac

```docker.for.mac.localhost``` or ```host.docker.internal```

> Docker for Windows

```docker.for.win.localhost``` or ```host.docker.internal```

> For Linux

Get host ip in container
```bash
ip route | awk 'NR==1 {print $3}'
```

Using [qoomon/docker-host](https://github.com/qoomon/docker-host)