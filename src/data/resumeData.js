const withBase = (path) => `${import.meta.env.BASE_URL || '/'}${path.replace(/^\//, '')}`;

export const resumeData = {
  profile: {
    name: "邹泽霖",
    enName: "Ethan",
    title: "AI 原生产品建造者 · iOS 独立开发",
    subTitle: "以 AI 工具驱动全栈开发，从场景洞察到 iOS 原生真机交付",
    birth: "1998.10",
    phone: "(+86) 176-5859-6889",
    email: "757458811@qq.com",
    education: {
      school: "齐鲁工业大学",
      degree: "计算机科学与技术 | 工学学士",
      gradDate: "2026.06"
    },
    metrics: [
      { label: "记账耗时压缩", value: "< 3s", desc: "随口记自然语义流式解析" },
      { label: "原型打样提效", value: "3x+", desc: "AI工具链极速端到端验证" },
      { label: "多机型适配实测", value: "10+", desc: "iPhone真机屏幕与物理适配" },
      { label: "端到端真机交付", value: "4款", desc: "从用户痛点到真机高频验证" }
    ],
    bio: "计算机工学背景的 AI 原生建造者。专注于大模型在移动端与业务场景的落地转化，熟练运用前沿 AI 工具链（Antigravity、Cursor、Claude）独立完成需求澄清、交互设计、iOS 原生编码到真机适配交付全流程。坚持极简做减法设计哲学，追求克制高质感的果系软硬件体验。"
  },
  advantages: [
    {
      id: "ai-velocity",
      title: "AI 独立全栈开发与极速交付",
      desc: "熟练运用前沿 AI 工具链独立编写代码、打通业务逻辑与后台接口，无需团队带教，一个人即可把产品从头到尾研发落地。",
      tags: ["AI写代码", "零带教成本", "独立交付", "全栈工程"],
      color: "blue"
    },
    {
      id: "compliance",
      title: "iOS 原生真机适配与上架经验",
      desc: "深度遵循苹果人机界面指南（HIG），熟悉 iOS 端侧交互特性与屏幕物理适配；亲身跑通 TestFlight 内测分发与 App Store 提审材料准备。",
      tags: ["iOS原生", "HIG规范", "TestFlight", "多机型适配"],
      color: "green"
    },
    {
      id: "llm-arch",
      title: "大模型落地与工程直觉",
      desc: "熟练运用大模型 API 结构化数据解析与 Prompt 规则约束，深刻理解端侧轻量化解耦、流式响应优化与低延迟交互，确保大模型输出稳定可靠。",
      tags: ["Prompt工程", "结构化输出", "流式解析", "低延迟优化"],
      color: "purple"
    },
    {
      id: "insight",
      title: "敏锐痛点洞察与做减法审美",
      desc: "擅长从真实日常场景中发掘被传统臃肿工具忽视的核心痛点；秉持极简做减法设计哲学，拒绝花哨冗余功能堆砌，追求最高效的单点体验。",
      tags: ["减法设计", "场景深挖", "果系极简审美"],
      color: "coral"
    },
    {
      id: "business-adapt",
      title: "计算机工学底盘与极客学习力",
      desc: "计算机科学与技术工学背景，技术底层逻辑理解扎实；极客探索欲强，能迅速吃透软硬件联动、网页后台与未知技术栈并快速交付。",
      tags: ["工学背景", "极客钻研", "全范围拓展"],
      color: "amber"
    }
  ],
  projects: [
    {
      id: "speakbill",
      title: "随口记 (Speakbill)",
      subTitle: "基于大模型的极简语音记账应用 (iOS)",
      category: "AI 原生应用 · iOS 独立开发",
      status: "AI 全流程自研",
      iconType: "image",
      iconSrc: withBase("/speakbill_icon.png"),
      screenshots: [
        withBase("/screenshots/speakbill/1.png"),
        withBase("/screenshots/speakbill/2.png"),
        withBase("/screenshots/speakbill/3.png")
      ],
      demoUrl: "https://testflight.apple.com/join/ZmjTmNCs",
      badgeColor: "#007AFF",
      description: "针对传统记账软件分类层级繁琐、输入臃肿的痛点，打造“随口一说、AI 自动分类记账”的极简体验。主界面聚焦当月预算核心指标，隐藏冗余图表与杂乱留白，将记账耗时压缩至 3 秒以内。",
      highlights: [
        "AI 独立端到端开发：以 AI 编程工具独立完成 iOS 客户端界面构建、核心业务逻辑与流式接口联调",
        "语音转文字语义提取：通过精准 Prompt 规则将自然语言拆解为金额、商户、时间与二级科目",
        "资产智能联动机制：规划支付渠道映射规则（如微信支付默认关联合同储蓄卡），实现自动扣减与对账",
        "零等待流式响应与真机高频验证，大幅削减传统记账心理门槛"
      ],
      tags: ["iOS原生", "AI独立开发", "大模型流式解析", "极简交互"]
    },
    {
      id: "dailytalk",
      title: "口语通 (DailyTalk)",
      subTitle: "场景化生活口语学习工具 (iOS)",
      category: "AI 语言学习 · iOS 原生",
      status: "AI 全流程自研",
      iconType: "image",
      iconSrc: withBase("/dailytalk_icon.png"),
      screenshots: [
        withBase("/screenshots/dailytalk/1.png"),
        withBase("/screenshots/dailytalk/2.png"),
        withBase("/screenshots/dailytalk/3.png"),
        withBase("/screenshots/dailytalk/4.png")
      ],
      demoUrl: "https://testflight.apple.com/join/mH94T2B8",
      badgeColor: "#8B5CF6",
      description: "破除应试死记硬背，专注于跨地域日常生活高频场景（点餐、打车、问路、求助）的张口即用地道表达训练。配套母语真人发音、注音与弱读实战提示。",
      highlights: [
        "以自然语言驱动 AI 编程工具独立完成端到端代码编写、音频组件集成并真机跑测",
        "设计“听原声 → 录音跟读 → 匹配度评分”交互模式，配套母语真人发音与弱读实战提示",
        "规划冷启动评估问卷，根据发音薄弱项智能推荐定制练习路径"
      ],
      tags: ["iOS原生", "AI全流程研发", "发音评测", "高保真音频"]
    },
    {
      id: "smart-retail",
      title: "社区智慧零售掌上门店客户端",
      subTitle: "面向连锁便利品牌的商户端即时订单履约系统",
      category: "商用移动端系统",
      status: "商用移动端系统交付",
      iconType: "candy",
      candySymbol: "shop",
      badgeColor: "#10B981",
      description: "为济南本地连锁便利品牌定制研发的商户端极简运营应用，解决传统收银后台复杂、小屏幕操作易误触的问题。",
      highlights: [
        "主导梳理商品上下架、扫码盘点与即时订单接单全流程，输出标准化功能说明与交互图",
        "运用 AI 工具独立生成标准 UI 界面组件，快速完成 iPhone 多机型真机屏幕适配",
        "通过 TestFlight 分发内部测试包，主导收集一线门店操作卡点并完成上架材料准备"
      ],
      tags: ["iOS适配", "即时零售", "TestFlight", "硬件联调"]
    },
    {
      id: "enterprise-training",
      title: "企业移动培训与技能打卡客户端",
      subTitle: "员工入职培训、课后答题与音频跟读学习平台",
      category: "企业级移动学习",
      status: "企业级移动应用交付",
      iconType: "candy",
      candySymbol: "study",
      badgeColor: "#3B82F6",
      description: "为中小企业定制研发的培训移动端平台，支持每日技能打卡、防作弊答题、离线课件缓存与全流程移动化管理。",
      highlights: [
        "独立将企业人事口头诉求转化为标准化 PRD，规范离线缓存策略与积分计算规则",
        "主导音频播放控件与数据接口联合调试，在地下车库与电梯极限弱网场景实测断点续传",
        "完善版本更新说明与隐私合规政策，保障高质量端到端交付"
      ],
      tags: ["移动培训", "PRD规范", "弱网优化", "端到端交付"]
    }
  ],
  experiences: [
    {
      period: "2026.01 – 2026.07",
      company: "派贝克（济南）信息技术有限公司",
      role: "移动应用交付产品经理",
      duties: [
        "深度对接企业客户人事部门，独立撰写规范化 PRD 与业务流程图",
        "主导客户端 API 接口联合调试，全流程跑测打卡记录提交与积分计算准确性",
        "在弱网与电梯极限场景下实测音频断点续传，排查并攻克后台播放稳定性问题",
        "编写操作常见问题手册 (FAQ)，高质量完成全流程交付与功能验收"
      ]
    },
    {
      period: "2025.06 – 2025.12",
      company: "山东强比信息技术有限公司",
      role: "iOS 移动应用开发助理",
      duties: [
        "深入梳理商户口头诉求，运用 AI 工具独立制作移动端可交互高保真 Demo",
        "实机联调测试蓝牙扫码枪与热敏小票机连接响应，严测多尺寸屏幕物理适配",
        "负责打包上传 TestFlight 并向一线门店分发测试版本，深入排查修复卡点",
        "按照 App Store 官方规范制作截图与文案说明，主导完成应用提审全流程"
      ]
    }
  ]
};
