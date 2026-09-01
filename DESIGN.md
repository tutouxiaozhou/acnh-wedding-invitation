---
name: 晴屿岛婚礼请柬
description: 一场从 Dodo 航班抵达、一路走到登岛护照回执的动森婚礼仪式。
colors:
  island-teal: "#1db8af"
  island-teal-deep: "#087f7a"
  map-teal: "#36b6ac"
  sky-cyan: "#86d9dd"
  grass-green: "#6fc251"
  dodo-yellow: "#f6c74f"
  wedding-pink: "#f3a1af"
  choice-pink: "#f5a2b1"
  carved-wood: "#c5843e"
  passport-green: "#248b7a"
  passport-paper: "#fffaf0"
  warm-ink: "#4b4037"
typography:
  display:
    fontFamily: "HuaKang HaiBao, PingFang SC, sans-serif"
    fontSize: "clamp(2.75rem, 5.6vw, 4.875rem)"
    fontWeight: 400
    lineHeight: 0.95
  headline:
    fontFamily: "HuaKang HaiBao, PingFang SC, sans-serif"
    fontSize: "clamp(2.75rem, 5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "HuaKang HaiBao, PingFang SC, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.9
  label:
    fontFamily: "HuaKang Yuan, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.17em"
  reserved:
    fontFamily: "HuaKang ZongYi, PingFang SC, sans-serif"
    usage: "Converted local asset; not used in the current invitation hierarchy."
rounded:
  control: "14px"
  card: "24px"
  bubble: "35px"
  phone: "62px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "48px"
  section: "110px"
components:
  button-boarding:
    backgroundColor: "{colors.dodo-yellow}"
    textColor: "{colors.warm-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "15px 23px"
  button-map:
    backgroundColor: "{colors.map-teal}"
    textColor: "{colors.passport-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 19px"
  field-choice:
    backgroundColor: "{colors.passport-paper}"
    textColor: "{colors.warm-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
  field-choice-selected:
    backgroundColor: "{colors.choice-pink}"
    textColor: "{colors.passport-paper}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
---

# Design System: 晴屿岛婚礼请柬

## Overview

**Creative North Star: "登岛婚礼仪式"**

这套视觉系统把婚礼请柬变成一次熟悉的新岛抵达：明亮天空与草地先建立世界，木牌、Dodo 登机信息和角色场景负责第一眼识别，随后由岛内广播、NookPhone、岛屿地图、婚礼季照片与护照依次承载信息。它不是在通用婚礼卡片上粘贴游戏贴纸，而是让游戏里的仪式本身成为内容结构。

整体气质饱和、温暖、具触感。大块纯色环境承接有重量的道具表面；纸张、木材、手机外壳和印章用轻微旋转、厚边与分层阴影获得玩具般的实体感。高识别度的新叶元素、角色和物件图像只服务于明确的邀请时刻，并始终保留私人、非商业、非官方粉丝作品边界。

**Key Characteristics:**

- 从航班抵达走到护照回执的连续岛屿叙事
- 青空、饱和草地、木材、薄荷、Dodo 黄与婚礼粉的高辨识配色
- 中文趣味展示字配合清晰、厚重的无衬线正文
- 厚边、柔和不规则轮廓、轻微旋转与低位硬阴影形成的实体道具感
- 新叶图像作为具体场景证据，而不是无目的装饰

## Colors

颜色像游戏中的环境与道具分工：青绿搭建岛屿，黄色引导行动，粉色标记婚礼节点，木色与奶油纸让信息落在可触摸的物件上。

### Primary

- **岛屿青绿:** 主段落背景、导航动作与互动反馈的核心环境色；深色配对承担文字、焦点与按压层级。

### Secondary

- **Dodo 登机黄:** 只用于最重要的登岛和提交动作，也出现在 NookPhone 图标等少量任务提示中。
- **婚礼结晶粉:** 用于日期章、选择状态、进度和婚礼季场景，让庆祝信息从青绿环境中跳出。

### Tertiary

- **草地绿:** 用于天空下的岛屿地面、新叶标志和地图环境。
- **雕刻木色:** 用于欢迎牌和地图框架，将主标题与地点信息变成岛上的实体设施。

### Neutral

- **护照纸:** 作为对话气泡、地图板、表单页与卡片的温暖浅色底。
- **暖棕墨色:** 承担浅色表面上的正文与标题，避免纯黑破坏柔和世界。

### Named Rules

**The Action Yellow Rule.** Dodo 黄优先留给可点击的关键旅程动作；不要把它铺成大面积背景。

**The World Before Accent Rule.** 每个主要段落先由天空、草地、青绿、纸张或木材定义所在场景，再使用黄色或粉色强调节点。

## Typography

**Display Font:** 华康海报体 W12（回退到系统无衬线）  
**UI Font:** 华康圆体 W7（回退到系统中文无衬线）  
**Body Font:** PingFang SC（回退到系统中文无衬线）

**Character:** 海报体像游戏招牌上的手作刻字，负责名字与章节情绪；圆体处理按钮、道具标签和日程名称；正文保持清晰、稳定，让中文邀请信息在移动端迅速扫读。

### Hierarchy

- **Display:** 常规字重、紧凑行高，用于木牌婚礼名与最强场景标题。
- **Headline:** 常规字重、略宽松行高，用于 NookPhone、地图、婚礼季等章节名称。
- **Title:** 海报体用于护照等关键标题；圆体用于行程节点、应用名称和道具短标题。
- **Body:** 中等字重、宽松行高，用于广播、承诺、地点与说明文字。
- **Label:** 圆体、宽字距；用于航班代码、日期、眉题和道具小字，英文可使用大写。

### Named Rules

**The Signage Rule.** 海报体只写道具招牌与场景标题；圆体只承接短标签、按钮与日程；时间、地址、表单说明和长句始终回到系统中文无衬线。

## Layout

页面采用移动优先的纵向旅程，每个章节都是一个完整场景而不是一张堆叠卡片。桌面首屏使用约 45/55 的左右岛屿构图：承诺与木牌在左，露营地与角色在右；内容区常用约 1040–1120px 的最大宽度。NookPhone、地图和护照在宽屏使用不对称双列，使实体道具与信息互相解释。

章节纵向留白通常约 95–150px，以明显换景而非细分隔线建立节奏。900px 以下逐步压缩双列，680px 以下全部转为单列；首屏先展示航班、品牌木牌、承诺与 CTA，再让岛屿场景从下方进入。小屏左右安全边距约 17–22px，关键按钮与表单保持不小于 44px 的触控高度。

**The Journey Order Rule.** 响应式重排必须保留“抵达 → 广播 → 行程 → 地图 → 婚礼季 → 回执”的阅读顺序。

## Elevation & Depth

系统使用结构化的实体阴影，而非均匀漂浮的玻璃卡片。木牌、手机、地图板、日期章和按钮以低位硬阴影表达厚度，环境图像则使用更柔和的投影与场景融合。纸张表面保持温暖、不透明；深度来自边框、内嵌描边、轻微旋转和阴影层叠。

### Shadow Vocabulary

- **Action Lift** (`0 7px 0 #b98527, 0 14px 24px #2b5b5132`): 黄色主动作的常态厚度；悬停时上移并加深位移。
- **Phone Chassis** (`0 20px 0 #3b3530, 0 40px 70px #075f5a66`): NookPhone 外壳的重量与环境投影。
- **Map Board** (`inset 0 0 0 5px #e0a459, 0 22px 0 #8a572d, 0 35px 60px #6f58363b`): 木框内缘、板材厚度与落地阴影的三层结构。
- **Soft Paper** (`0 14px 40px #28613d28`): 对话纸张与轻量信息面的环境阴影。

**The Prop Weight Rule.** 阴影方向保持向下，硬边表示物件厚度、柔边表示环境投影；不要让所有表面共享同一张通用卡片阴影。

## Shapes

形状来自岛上道具：关键动作与标签使用胶囊轮廓，手机和应用格拥有明显的大圆角，护照与地图以较克制的圆角和厚边框维持纸制品感。对话气泡允许柔和不规则椭圆，木牌则用不完全一致的角度、边缘和立柱形成手工雕刻感。圆形保留给印章、声音控制、进度节点和地图编号。

**The Object Silhouette Rule.** 圆角大小取决于物件身份；不要把每个内容容器都改成同一种大圆角卡片。

## Components

### Buttons

- **Shape:** 主动作是胶囊形，选项按钮是轻圆角矩形。
- **Primary:** Dodo 黄配暖棕文字，粗体，采用紧凑的图标与文字组合；提交动作沿用同一语法。
- **Hover / Focus:** 指针悬停上移 3px 并增强低位阴影；键盘焦点使用高对比浅色外框与深青绿外圈。
- **Map Action:** 青绿色胶囊按钮配奶油白文字，保留较短的内边距与实体底边。

### Cards / Containers

- **Corner Style:** 依道具而变化；应用格与里程卡较圆，地图和照片更接近纸板，广播使用独立气泡轮廓。
- **Background:** 奶油纸、白色与浅薄荷渐变，不使用透明玻璃层。
- **Shadow Strategy:** 轻纸张使用柔影，厚道具使用硬底边叠加环境投影。
- **Border:** 木框、手机外壳和护照以厚边表达材料；普通内容不额外套线框。
- **Internal Padding:** 移动端通常约 18–32px，桌面主要信息面约 38–70px。

### Inputs / Fields

- **Style:** 透明纸面上的 2px 暖灰下划线，避免把每个字段做成独立白盒。
- **Focus:** 下划线切换为深青绿，并继承全局可见焦点处理。
- **Choice State:** 未选为白色轻边框按钮，已选切换为婚礼粉底与白字。

### Navigation

顶部导航直接悬浮在天空环境中，品牌由新叶标记与粗体名称组成。桌面右侧显示行程、地图、回执锚点；移动端隐藏次级链接但保留品牌。链接悬停仅做轻微上移，不添加独立卡片底。

### Island Broadcast

广播由角色肖像、奶油对话气泡、黄色说话人标签和粉色日期章共同组成。它应读成游戏内公告，而不是正文卡片；移动端角色先出现，气泡尾巴随布局转向上方。

### NookPhone

手机使用奶油机身、深色厚边、薄荷渐变屏幕和四宫格应用入口。应用格的圆角、硬底阴影和青绿图标保持一致；手机在桌面可轻微倾斜，移动端仍应保持完整设备轮廓。

### Island Route Map

地图使用青色海面、沙色岸线与草地岛形建立真实方位感，以河流切分岛屿，并用虚线依次连接南码头、仪式草坪与晚宴区。三个节点同时显示序号、地点和时间；手机端缩短地图与说明区高度，但不能退回照片拼贴或失去路线关系。

### Passport RSVP

回执由深青绿护照封面与奶油内页组成。字段直接写在纸面上，选择按钮和黄色提交动作承担交互层级；成功态在同一页内切换，不跳出岛屿旅程。

## Do's and Don'ts

### Do:

- **Do** 让游戏仪式承担信息架构，并让每个章节明确属于航班、广播、手机、地图、婚礼季或护照之一。
- **Do** 保留第一视口中的官方风格标志、木牌婚礼名、日期地点、岛屿场景和黄色登岛动作；矮屏可收起次要航班线索。
- **Do** 使用真实可读的日期、地点和回执层级，并对示例事实持续展示概念稿提示。
- **Do** 保持键盘焦点、44px 触控目标、无声可理解体验与 reduced-motion 支持。
- **Do** 在任何传播版本中保留私人、非商业、非官方粉丝作品声明。

### Don't:

- **Don't** 把页面退回成通用婚礼卡片的纵向堆叠，再用零散角色贴纸补足主题。
- **Don't** 将 Dodo 黄、婚礼粉或高识别图像无差别铺满页面；它们必须对应动作或具体邀请时刻。
- **Don't** 用透明玻璃、科技霓虹或极简企业组件替代木、纸、手机壳与印章的实体材料。
- **Don't** 让动画、环境音或悬停成为理解婚礼信息或完成回执的前提。
- **Don't** 暗示 Nintendo 官方合作，也不要把抽取的粉丝素材打包成商业模板或资产库。
