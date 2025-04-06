---
title: 代码贡献指南
---

## 为我们做出贡献

::: warning
不要在我们的Gitee镜像上贡献，您在Gitee的贡献无法被同步到GitHub
:::

1. 创建一个NamePicker的复刻（Fork）到您的GitHub账号

::: tip
第2-6步都可以使用工具实现（例如VS Code，JetBrains IDE）

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

5. 在该分支做出您的贡献

6. 将该分支同步到远程仓库（将\<your-branch-name\>替换为您在第4步设置的分支名字）

```bash
git push --set-upstream origin <your-branch-name>
```

7. 在GitHub上发起Pull Request，随后等待开发者审核