const withBase = (path) => `${import.meta.env.BASE_URL || '/'}${path.replace(/^\//, '')}`;

export const resumeData = {
  profile: {
    name: "邹泽霖",
    enName: "Ethan",
    title: "AI 产品经理 / AI Product Manager",
    subTitle: "以极简做减法设计哲学，驱动大模型在移动端与业务场景真正落地",
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
      { label: "全流程产品闭环", value: "4款", desc: "从用户痛点到真机高频验证" }
    ],
    bio: "专注于生成式 AI 与数字智能体产品落地，兼具商业直觉底盘、高标准移动端审美与敏捷交付执行力。擅长从日常真实场景中深挖痛点，借助前沿 AI 工具链（Antigravity、Cursor、Claude）将想法快速转化为高质量真机原型。"
  },
  advantages: [
    {
      id: "insight",
      title: "敏锐痛点洞察与极简审美",
      desc: "擅长从真实日常场景中发掘被传统臃肿工具忽视的核心痛点；秉持极简做减法设计哲学，拒绝无用功能堆砌，追求最高效的单点体验。",
      tags: ["减法交互", "场景深挖", "UI高审美"],
      color: "coral"
    },
    {
      id: "ai-velocity",
      title: "AI 工具链驱动敏捷极速交付",
      desc: "熟练运用 Antigravity、CodeX、Claude 等前沿工具链，独立完成端侧原生原型设计、业务逻辑联调与真机可用性验证。",
      tags: ["敏捷打样", "端到端开发", "全栈工程理解"],
      color: "blue"
    },
    {
      id: "compliance",
      title: "真实移动端交付与上架经验",
      desc: "亲身跑通需求 PRD 撰写、交互设计、真机适配、TestFlight 内测分发到 App Store 提审材料准备的全流程移动端交付。",
      tags: ["TestFlight", "App Store提审", "真机多尺寸适配"],
      color: "green"
    },
    {
      id: "llm-arch",
      title: "大模型应用落地与工程理解",
      desc: "熟练运用大模型 API 结构化数据解析与 Prompt 规则约束，深刻理解端侧轻量化解耦、流式响应优化与低延迟交互体验。",
      tags: ["Prompt工程", "结构化输出", "流式交互优化"],
      color: "purple"
    },
    {
      id: "business-adapt",
      title: "商业底盘与跨地域双语适应",
      desc: "具备线下实体与销售实战底盘，商业直觉敏锐；普通话标准，能高效查阅英文技术前沿文献，持续进修日常粤语交流。",
      tags: ["商业化直觉", "英文技术文献", "跨域沟通"],
      color: "amber"
    }
  ],
  projects: [
    {
      id: "speakbill",
      title: "随口记 (Speakbill)",
      subTitle: "基于大模型的极简语音记账应用 (iOS)",
      category: "AI 原生应用",
      status: "主导自研",
      iconType: "image",
      iconSrc: withBase("/speakbill_icon.png"),
      screenshots: [
        withBase("/screenshots/speakbill/1.png"),
        withBase("/screenshots/speakbill/2.png"),
        withBase("/screenshots/speakbill/3.png"),
        withBase("/screenshots/speakbill/4.png")
      ],
      badgeColor: "#007AFF",
      description: "针对传统记账软件分类层级繁琐、输入臃肿的痛点，打造“随口一说、AI 自动分类记账”的极简体验。主界面聚焦当月预算核心指标，隐藏冗余图表与杂乱留白，将记账耗时压缩至 3 秒以内。",
      highlights: [
        "语音转文字语义提取：通过精准 Prompt 规则将自然语言拆解为金额、商户、时间与二级科目",
        "资产智能联动机制：规划支付渠道映射规则（如微信支付默认关联合同储蓄卡），实现自动扣减与对账",
        "零等待流式响应与真机高频验证，大幅削减传统记账心理门槛"
      ],
      tags: ["iOS", "大模型结构化解析", "极简交互", "语音智能体"]
    },
    {
      id: "dailytalk",
      title: "口语通 (DailyTalk)",
      subTitle: "场景化生活口语学习工具 (iOS)",
      category: "教育科技 / 语言学习",
      status: "自研重点项目",
      iconType: "image",
      iconSrc: withBase("/dailytalk_icon.png"),
      screenshots: [
        withBase("/screenshots/dailytalk/1.png"),
        withBase("/screenshots/dailytalk/2.png"),
        withBase("/screenshots/dailytalk/3.png"),
        withBase("/screenshots/dailytalk/4.png"),
        withBase("/screenshots/dailytalk/5.png")
      ],
      badgeColor: "#8B5CF6",
      description: "破除应试死记硬背，专注于跨地域日常生活高频场景（点餐、打车、问路、求助）的张口即用地道表达训练。配套母语真人发音、注音与弱读实战提示。",
      highlights: [
        "设计“听原声 → 录音跟读 → 匹配度评分”三段式闭环交互流",
        "规划冷启动评估问卷，根据发音薄弱项智能推荐定制练习路径",
        "以自然语言驱动 AI 编程工具完成端到端代码实现并真机跑测"
      ],
      tags: ["iOS", "发音评测", "高保真音频", "场景自适应"]
    },
    {
      id: "smart-retail",
      title: "社区智慧零售掌上门店客户端",
      subTitle: "面向连锁便利品牌的商户端即时订单履约系统",
      category: "商用移动端系统",
      status: "外包定制交付",
      iconType: "candy",
      candySymbol: "shop",
      badgeColor: "#10B981",
      description: "为济南本地连锁便利品牌定制研发的商户端极简运营应用，解决传统收银后台复杂、小屏幕操作易误触的问题。",
      highlights: [
        "协助梳理商品上下架、扫码盘点与即时订单接单全流程，输出标准化功能说明与交互图",
        "运用 AI 工具辅助生成标准 UI 界面组件，快速完成 iPhone 多机型真机适配",
        "通过 TestFlight 分发内部测试包，主导收集一线门店操作卡点并协助上架材料准备"
      ],
      tags: ["B端移动化", "即时零售", "TestFlight", "硬件联调"]
    },
    {
      id: "enterprise-training",
      title: "企业移动培训与技能打卡客户端",
      subTitle: "员工入职培训、课后答题与音频跟读学习平台",
      category: "企业级移动学习",
      status: "外包定制交付",
      iconType: "candy",
      candySymbol: "study",
      badgeColor: "#3B82F6",
      description: "为中小企业定制研发的培训移动端平台，支持每日技能打卡、防作弊答题、离线课件缓存与全流程移动化管理。",
      highlights: [
        "负责将企业人事口头诉求转化为标准化 PRD，规范离线缓存策略与积分计算规则",
        "参与音频播放控件与数据接口联合调试，实测地下车库/电梯等极限弱网环境断点续传",
        "协助企业客户完善版本说明与隐私政策，规范产品交付质量"
      ],
      tags: ["企业培训", "PRD规范", "弱网优化", "移动学习"]
    }
  ],
  experiences: [
    {
      period: "2026.01 – 2026.07",
      company: "派贝克（济南）信息技术有限公司",
      role: "移动应用交付产品经理",
      duties: [
        "深度对接企业客户人事部门，撰写规范化 PRD 与业务流程图",
        "联合调试客户端 API 接口，全流程跑测打卡记录提交与积分计算准确性",
        "在弱网与电梯极限场景下实测音频断点续传，排查后台播放稳定性",
        "编写操作常见问题手册 (FAQ)，协助客户完成功能验收签字"
      ]
    },
    {
      period: "2025.06 – 2025.12",
      company: "山东强比信息技术有限公司",
      role: "iOS 移动应用开发助理",
      duties: [
        "深入梳理商户口头诉求，运用 AI 工具制作移动端可交互高保真 Demo",
        "实机测试蓝牙扫码枪与热敏小票机连接响应，严测多尺寸屏幕适配",
        "负责打包上传 TestFlight 并向一线门店分发测试版本，深入收集反馈",
        "按照 App Store 官方规范制作截图与文案说明，协同技术团队完成提审"
      ]
    }
  ]
};
