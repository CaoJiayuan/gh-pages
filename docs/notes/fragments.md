---
title: Fragments
---

<center>
<h1>代码片段</h1>
</center>

## 小程序直传OSS

```javascript
function upload() {
    this.$request.get('http://api.demo.test/api/upload/auth').then(res => { //请求服务器获取授权信息
         wx.chooseImage({
           success: file => {
             let filename = file.tempFilePaths[0].substring(file.tempFilePaths[0].lastIndexOf('/') + 1);
             let key = `${res.data.dir}${filename}`;
             wx.uploadFile({
                 url: res.data.host,
                 filePath: file.tempFilePaths[0],
                 name: 'file',
                 formData: {
                   name: file.tempFilePaths[0],
                   key:  key,
                   policy: res.data.policy,
                   OSSAccessKeyId: res.data.accessid,
                   signature: res.data.signature,
                 },
                 success: data => {
                   let url = res.data.host + '/' + key; //上传后的文件url

                   console.log(url)
                 }
             })
           }
         })
    })
}
```