---
title: 部署NamePicker插件开发环境
icon: laptop-code
---

::: warning
NamePicker正在向[RinUI](https://ui.rinlit.cn/zh)搬迁，以下内容可能不完全适用/完全不适用于NamePicker的较新版本
:::

在开发插件前，您需要部署一个开发环境

## 获取NamePicker源码版本

::: warning 为什么不使用发行版？
1. 源码版本可能包含发行版没有的功能

2. 源码版本可以在IDE控制台输出日志，更方便调试
:::

1. 将仓库克隆到本地

::: tabs

@tab git clone

```bash
git clone https://github.com/NamePickerOrg/NamePicker.git
```

@tab GitHub cli

```bash
gh repo clone NamePickerOrg/NamePicker
```

:::

2. 切换到您的工作目录

```bash
cd NamePicker
```

## 安装依赖

创建虚拟环境并安装依赖
::: note
我们假设您已经安装了Python3，如果您没有安装，请自行寻找教程
:::

::: tabs

@tab Windows

```bash
python3 -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

@tab Linux

您可能需要将第一步的指令替换成在您的发行版上安装python3-venv的指令

```bash
sudo apt install python3-venv
python3 -m venv .venv
source ./.venv/bin/activate
pip install -r requirements.txt
```

:::

::: note
如果您正在部署RinUI重构版本的NamePicker，请加入以下指令：
```bash
pip install -i https://test.pypi.org/simple/ RinUI --no-deps
```
:::
🎉🎉🎉恭喜您完成了开发环境的部署，接下来可以阅读[开发第一个插件](1stplugin.md)来开始插件开发之旅