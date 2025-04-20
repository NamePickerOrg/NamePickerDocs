---
title: 开发您的第一个插件
---

在部署完环境之后，即可进行插件开发。

## 创建插件仓库

1. 转到我们的[插件模板仓库](https://github.com/NamePickerOrg/NamePicker-PluginTemplate)

2. 点击Star旁边那个绿油油的"Use this template"，随后在下拉菜单选择"Create a new repository"

3. 按照建立仓库的流程建立仓库即可

::: note
如果您希望将该插件上架到插件市场，请不要将其命名为任何在插件市场上已经上架的插件的仓库名
:::

## 克隆插件仓库

::: tip
我们强烈推荐将仓库克隆到NamePicker的插件文件夹（"plugins"文件夹）下，以方便测试
:::

::: tabs

@tab git clone

```bash
git clone https://github.com/您的账户名/您的仓库名.git
```

@tab GitHub cli

```bash
gh repo clone 您的账户名/您的仓库名
```

:::

## 修改插件信息

1. 使用您喜欢的编辑器/IDE打开您的插件文件夹，编辑info.json，**所有项目都是必填项**

```json
{
  "id": "lhgser.Example",
  "author": "灵魂歌手er",
  "name": "示例插件",
  "description": "NamePicker的插件示例",
  "version": "0.0.0",
  "api": 1,
  "settings": true
}
```

|字段名|字段说明|取值范例|
|----|----|----|
|id|插件的唯一id，不推荐使用中文|`plugin`,`lhgser.plugin`,`dev.goodbyewrc.plugin`|
|author|作者名，可以使用中文|`蔡徐坤`,`灵魂歌手er`,`Developer A`|
|name|插件显示的名字|`妙妙插件`,`Plugin A`|
|description|插件简介|`一个可以催眠用户的插件`,`平凡无奇的插件`|
|version|插件版本号（不用加ver，version一类的标识，因为在显示时会补全标识）|`0.0.1`,`1.1.4514`,`91alpha`|
|api|API版本（可在NamePicker配置文件中的apiver找到）|`1`|
|settings|是否有设置页 !!（其实软件根本没有读取这项）!!|`true`,`false`|

2. 将`icon.png`替换为您的插件图标

## 见证奇迹

如果您在日志中看到类似于下面这行文本的输出，并在插件管理页中看到您的插件时，恭喜，您的插件启动成功了！

```
xxxx-xx-xx xx:xx:xx.xxx | INFO     | __main__:load_plugins:71 - 加载插件：{您的插件id}成功
```

接下来，您可以参考[插件开发指南详解](guide.md)进行进一步开发