---
title: 一些有用的脚本
---

## Startup script (centos)

```bash
yum install -y epel-release zsh git vim python python-pip
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum install -y docker-ce
pip install --upgrade --force-reinstall --no-cache-dir docker-compose
mkdir /etc/docker
cat <<EOF >> /etc/docker/daemon.json
{
  "storage-driver": "overlay2",
  "storage-opts": [
    "overlay2.override_kernel_check=true"
  ]
}
EOF
systemctl enable docker
systemctl start docker
pip install docker-compose
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" # use oh-my-zsh!
chsh -s /bin/zsh
```

## 查找本地docker镜像并移除

```bash
docker images | grep xxx |  awk '{print $3}' | xargs docker rmi --force
```