---
title: 高级操作
icon: plus
---

## 引入其他第三方库

当您的插件需要的第三方库但程序并未引入时，即可参考下列教程将第三方库部署于插件目录。

### 用 pip 将您需要安装的第三方库安装到插件目录；

1. 在“资源管理器”中打开您的插件目录并在地址栏输入cmd

2. 输入如下命令：
```bash
pip install -t libs/ {您的第三方库}
```
即在插件目录下的"libs"文件夹安装第三方库

### 安装完成后在您的插件中增加以下代码：
```python
from .NamePickerPluginBase impoer load_libs
load_libs()
import {您的第三方库}
```
### 🎉大功告成！现在您可以在您的插件中自由使用第三方库了！