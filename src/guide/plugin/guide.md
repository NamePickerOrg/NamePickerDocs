---
title: 插件开发指南详解
---

::: tip
您可以直接使用`logger`库记录日志
:::

## 插件类
在 `main.py`定义一个名为`Plugin`，继承了`NamePickerPluginBase.PluginBase`的类即可声明插件

就像这样：

```python
from .NamePickerPluginBase impoer PluginBase
class Plugin(PluginBase):
    def __init__(self):
        super().__init__()
        self.filters = [self.customFilter]# 在这里填入筛选函数
        self.filtersName = ["自定义筛选器"]# 在这里填入筛选器名字
        self.customKey = ["test"]# 在这里填入要求用户添加的字段
        self.customKeyTitle = ["测试用额外字段"]# 在这里填入字段标题

    def customFilter(self,name):
        return name["test"] != "9191"

    def beforePick(self):
        # 在这编写抽选按钮按下后，抽选结果产生前执行的操作
        logger.info("Before Pick")

    def afterPick(self,name):
        # 在这编写抽选按钮按下后，抽选结果产生后执行的操作
        logger.info("After Pick")
        logger.info(name)

    def onStartup(self):
        # 在这编写插件被加载时执行的操作
        logger.info("Startup")
```

::: note
插件类方法的讲解都将基于上方的代码
:::

### 传入名单

您可能会注意到，`customFilter`和`afterPick`都会传入叫`name`的参数

该参数提供了一个名单中的名字，格式如下：

```python
{
    "name":"example,
    "sex":"0",
    "no":"1",
    ...以及其他字段
}
```

而在`afterPick`中，`name`参数则会传入一个列表，包含一个或若干个这样的名字

### 筛选器

在`self.filters`中添加作为筛选器的函数，并在`self.filtersName`中添加与其一一对应的筛选器名字

筛选器函数接收如上文所提到的名字，返回一个布尔值，若符合筛选要求则为`True`，否则为`False`

### 事件函数

在触发某些事件时，会执行该函数

|函数名|触发时机|是否传递参数？|
|----|----|----|
|`onStartup`|插件被加载时|否|
|`beforePick`|抽选按钮按下后，抽选结果产生前|否|
|`afterPick`|抽选按钮按下后，抽选结果产生后|是（见上文“传入名单”）|

### 要求用户添加字段

在`self.customKey`中添加要求用户添加的字段名（不推荐中文），并在`self.customKeyTitle`中添加与其一一对应的字段可读名字（在名单编辑中显示）

添加的字段将在上文“传入名单”中的字典中一起传递给插件

## 设置类
在 `main.py`定义一个名为`Settings`，继承了`NamePickerPluginBase.SettingBase`的类即可声明插件设置页，插件设置页将在NamePicker的设置中展示

就像这样：

```python
class Settings(SettingBase):
    def __init__(self):
        super().__init__()
        # 在这编写设置界面
        self.testCard = SettingCard(
            icon=FluentIcon.INFO,
            title="测试配置项",
            content="这是一个配置项"
        )
        self.vbox = VBoxLayout(self)
        self.vbox.addWidget(self.testCard)

```

具体如何编写请参照[QFluentWidgets文档](https://qfluentwidgets.com/zh/pages)

::: caution
**不要使用QFluentWidgets提供的配置类存储配置**，会把软件的配置顶掉的
:::