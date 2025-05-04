---
title: 代码贡献指南
icon: microchip
---
::: warning
NamePicker正在向[RinUI](https://ui.rinlit.cn/zh)搬迁，以下内容可能不完全适用/完全不适用于NamePicker的较新版本
:::

## 为我们做出贡献

::: warning
不要在我们的Gitee镜像上贡献，您在Gitee的贡献无法被同步到GitHub
:::

1. 创建一个NamePicker的复刻（Fork）到您的GitHub账号

::: tip
第2-7步都可以使用工具实现（例如VS Code，JetBrains IDE）

具体使用方式请自行搜索
:::

2. 将仓库克隆到本地（将\<YourGithub\>替换成您的GitHub账户名）

::: tabs

@tab git clone

```bash
git clone https://github.com/<YourGithub>/NamePicker.git
```

@tab GitHub cli

```bash
gh repo clone <YourGithub>/NamePicker
```

:::

3. 切换到您的工作目录

```bash
cd NamePicker
```

4. 在Dev分支的基础上创建新分支（将\<your-branch-name\>替换为您的分支名字（例如feature））

```bash
git checkout dev
git checkout -b <your-branch-name>
```

5. 创建虚拟环境并安装依赖
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

6. 在该分支做出您的贡献

7. 将该分支同步到远程仓库（将\<your-branch-name\>替换为您在第4步设置的分支名字）

```bash
git push --set-upstream origin <your-branch-name>
```

8. 在GitHub上发起Pull Request，随后等待开发者审核