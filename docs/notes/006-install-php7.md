---
title: Install php7 (centos example)
---

## install dependencies

> Build tools

```hash

yum install -y gcc g++ cmake glibc-headers gcc-c++
```

> Ext dependencies

```bash

yum install -y libxml2-devel libcurl-devel libjpeg-devel libpng-devel libmcrypt-devel freetype-devel libicu-devel libxslt-devel
```

> Configure (example)

```bash
./configure --prefix=/usr/local/php --with-config-file-path=/usr/local/php/etc --with-config-file-scan-dir=/usr/local/php/conf.d --with-apxs2=/usr/local/apache/bin/apxs --with-mysqli=mysqlnd --with-pdo-mysql=mysqlnd --with-iconv-dir --with-freetype-dir=/usr/local/freetype --with-jpeg-dir --with-png-dir --with-zlib --with-libxml-dir=/usr --enable-xml --disable-rpath --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --with-curl=/usr/local/curl --enable-mbregex --enable-mbstring --enable-intl --enable-pcntl --enable-ftp --with-gd --with-openssl --with-mhash --enable-pcntl --enable-sockets --with-xmlrpc --enable-zip --enable-soap --with-gettext --enable-opcache --with-xsl
```

> Then

```bash

make && make install
```

> Example fpm conf

```/usr/local/php/etc/php-fpm.conf```

```ini

[global]
pid = /usr/local/php/var/run/php-fpm.pid
error_log = /usr/local/php/var/log/php-fpm.log
log_level = notice
[www]
listen = /tmp/php-cgi.sock
listen.backlog = -1
listen.allowed_clients = 127.0.0.1
listen.owner = www
listen.group = www
listen.mode = 0666
user = www
group = www
pm = dynamic
pm.max_children = 10
pm.start_servers = 2
pm.min_spare_servers = 1
pm.max_spare_servers = 6
pm.max_requests = 1024
pm.process_idle_timeout = 10s
request_terminate_timeout = 100
request_slowlog_timeout = 0
slowlog = var/log/slow.log
```

> Start up

* ```cp sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm```
* ```chmod +x /etc/init.d/php-fpm```