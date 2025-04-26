import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "使用文档",
      icon: "book",
      prefix: "usage/",
      children: "structure",
    },
    {
      text: "开发指南",
      icon: "server",
      prefix: "dev/",
      children: "structure",
    },
    {
      text: "社区相关",
      icon: "face-smile",
      prefix: "community/",
      children: "structure",
    },
    {
      text: "碎碎念",
      icon: "cheese",
      prefix: "etc/",
      children: "structure",
    },
  ],
});
