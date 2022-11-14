# TailWindCss 学习

## 网站资源
---
- [https://flowbite.com/](https://flowbite.com/)
- [https://tailwind-elements.com/](https://tailwind-elements.com/)
- [https://preline.co/index.html](https://preline.co/index.html)
- [有人公开出来的tailwind官方UI](https://github.com/davidivkovic/tailwindui)
- [tailwindcss官方安装说明文档](https://tailwindcss.com/docs/installation)
- [tailwind中文文档](https://www.tailwindcss.cn/docs)
## 学习路线
---
### [2022-11-04]()

使用VScode搭建环境，做tailwind入门：
- [入门]()
- [安装]()
- [升级指南]()
- [编辑器支持]()
- [使用预处理器]()
- [生产优化]()

核心概念包含
- [功能类优先]()
- [响应式设计]()
- [悬停、焦点和其他状态]()
- [深色模式]()
- [添加基础样式]()
- [提取组件]()
- [添加新的功能类]()
- [函数与指令]()

### [2022-11-05]()
开始布局参见 [style.html](style.html)

- [容器]()
- [Box Decoration Break]()
- [Box Sizing]()
- [Display]()
- [浮动]()
- [清除浮动]()
- [Isolation]()
- [Object Fit]()
- [Object Position]()
- [溢出]()
- [Overscroll Behavior]()
- [定位]()
- [Top/Right/Bottom/Left]()
- [可见性]()
- [Z-Index]()

### [2022-11-06]()

完成以下大类
- [间距](Space-Sizing.html)
- [尺寸](Space-Sizing.html)
- [排版](font.html)
- [背景](background.html)
- [边框](border-and-box.html)
- [特效](border-and-box.html)
- [Flex](flex.html)

### [2022-11-07]()

- [Grid](grid.html) 

见grid.html，包含：

[1、Grid Template Columns]() 

[2、Grid Column Start / End]()

[3、Grid Template Rows]()

[5、Grid Auto Flow]()

[6、Grid Auto Columns]()

[7、Grid Auto Rows]()

[8、Gap]()

[9、Justify Content]()

[10、Justify Items]()

[11、Justify Self]()

[12、Align Content]()

[13、Align Self]()

[14、place-content]()

[15、place-Items]()

[16、place-self]()



Tailwind官方UI网站搭建

`git clone https://github.com/davidivkovic/tailwindui.git
`

```
<VirtualHost *:80>
  ServerName tailwind.com
  DocumentRoot "E:/Work/Git/TestProject/tailwind/tailwindui/preview"
  <Directory "E:/Work/Git/TestProject/tailwind/tailwindui/preview">
    Options +Indexes +Includes +FollowSymLinks +MultiViews
    AllowOverride All
    Require local
    Require all granted
  </Directory>
</VirtualHost>
```

Host 127.0.0.1 tailwind.com 本地访问： http://tailwind.com/components/

### [2022-11-08]()

- [Filters](Filter.html)

见Filter.html，包含：

[1、Filter]() 

[2、Blur]() 

[3、Brightness]() 

[4、Contrast]() 

[5、Drop Shadow]() 

[6、Grayscale]() 

[7、Hue Rotate]() 

[8、Invert]() 

[9、Saturate]() 

[10、Sepia]() 

[11、BackDrop]() 背景处理的这个属性没搞太清楚，算了。