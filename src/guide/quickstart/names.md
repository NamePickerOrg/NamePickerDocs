---
title: 配置名单
---

## 使用内置名单编辑器

从NamePicker v2.0.1版本开始，软件内置名单编辑器

在主界面侧边栏找到并进入编辑界面进行编辑即可

## 使用办公软件

1. 使用Microsoft Excel或WPS Office打开names.csv

2. 进行名单编辑并保存

各列含义：names：学生姓名

sex：性别：0=男，1=女，2=其他性别

no：学号（**必须是纯数字**）

::: warning
千万不要改动第一行的内容（表头）
:::

3. 使用记事本打开names.csv，随后另存为，在“编码”一栏选择UTF-8

## 手动配置names.csv

::: warning
不太推荐使用此种方式进行配置
:::

使用您喜欢的文本编辑器修改names.csv，第一行别改，第二行开始按照"学生名字,性别（0=男，1=女，2=非二元，不符合标准的性别代号理论上会被忽视）,学号"来填写，**务必使用英文符号**

就像这样：
```
name,sex,no
example,0,1
caixukun,2,2
sunxiaochuan,1,3
```
PS:不建议设置重复的学号和姓名，以免在使用时带来困扰