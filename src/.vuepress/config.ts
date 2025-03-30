import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/NamePicker-docs/",

  lang: "zh-CN",
  title: "NamePicker Docs",
  description: "NamePicker的使用文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
