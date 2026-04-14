/**
 * 塔罗牌数据 - 22张大阿卡那
 * 包含牌名、正位/逆位含义、关键词等
 */

const TAROT_CARDS = [
  {
    id: "the-fool",
    nameZh: "愚者",
    nameEn: "The Fool",
    number: 0,
    arcana: "major",
    keywords: ["开始", "冒险", "纯真", "自由"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
    upright: {
      title: "新的开始",
      meaning: "充满无限可能的起点，带着纯真和勇气踏上未知旅程。放下顾虑，拥抱自由，相信直觉。",
      advice: "勇敢地迈出第一步，不要被恐惧束缚。"
    },
    reversed: {
      title: "盲目冲动",
      meaning: "缺乏计划和准备，过于天真或鲁莽。可能因为轻率而陷入困境。",
      advice: "行动前多加思考，评估风险后再做决定。"
    }
  },
  {
    id: "the-magician",
    nameZh: "魔术师",
    nameEn: "The Magician",
    number: 1,
    arcana: "major",
    keywords: ["创造", "能力", "自信", "行动"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
    upright: {
      title: "创造实现",
      meaning: "拥有实现目标所需的一切资源和能力。专注、自信，将想法转化为现实。",
      advice: "相信自己的能力，积极行动，善用现有资源。"
    },
    reversed: {
      title: "欺骗迷惑",
      meaning: "能力被浪费或误用，可能存在欺骗或操控。缺乏信心或方向。",
      advice: "诚实面对自己，不要被表象迷惑。"
    }
  },
  {
    id: "the-high-priestess",
    nameZh: "女祭司",
    nameEn: "The High Priestess",
    number: 2,
    arcana: "major",
    keywords: ["直觉", "神秘", "智慧", "内在"],
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
    upright: {
      title: "内在智慧",
      meaning: "倾听内心的声音，相信直觉。隐藏的知识即将显现，保持耐心观察。",
      advice: "静观其变，向内寻求答案。"
    },
    reversed: {
      title: "忽视直觉",
      meaning: "忽略内心的声音，被表面现象蒙蔽。可能有秘密被隐藏。",
      advice: "多关注自己的感受，不要只相信眼见。"
    }
  },
  {
    id: "the-empress",
    nameZh: "皇后",
    nameEn: "The Empress",
    number: 3,
    arcana: "major",
    keywords: ["丰饶", "母性", "创造", "自然"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg",
    upright: {
      title: "丰饶滋养",
      meaning: "创造力旺盛，充满爱与滋养。收获的时刻，享受生活的美好。",
      advice: "善待自己，让创造力自由流动。"
    },
    reversed: {
      title: "依赖懒惰",
      meaning: "过度依赖他人，创造力受阻。可能存在感情或物质上的依赖。",
      advice: "学会独立，找回自己的力量。"
    }
  },
  {
    id: "the-emperor",
    nameZh: "皇帝",
    nameEn: "The Emperor",
    number: 4,
    arcana: "major",
    keywords: ["权威", "秩序", "稳定", "父亲"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
    upright: {
      title: "建立秩序",
      meaning: "建立稳固的基础，运用理性和纪律。领导力和权威得到认可。",
      advice: "制定计划，按部就班地执行。"
    },
    reversed: {
      title: "专制僵化",
      meaning: "过于控制或僵化，缺乏弹性。滥用权力或过于专制。",
      advice: "放松控制，给他人和自己更多空间。"
    }
  },
  {
    id: "the-hierophant",
    nameZh: "教皇",
    nameEn: "The Hierophant",
    number: 5,
    arcana: "major",
    keywords: ["传统", "信仰", "教导", "制度"],
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
    upright: {
      title: "遵循传统",
      meaning: "遵循既定的规则和价值观，寻求精神上的指引。适合学习或传承。",
      advice: "尊重传统，向有经验的人请教。"
    },
    reversed: {
      title: "反叛创新",
      meaning: "挑战传统观念，打破常规。可能感到被规则束缚。",
      advice: "勇于质疑，寻找属于自己的道路。"
    }
  },
  {
    id: "the-lovers",
    nameZh: "恋人",
    nameEn: "The Lovers",
    number: 6,
    arcana: "major",
    keywords: ["爱情", "选择", "和谐", "结合"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg",
    upright: {
      title: "爱的结合",
      meaning: "重要的关系或选择，心灵的契合。爱情、合作或价值观的一致。",
      advice: "跟随内心，做出真诚的选择。"
    },
    reversed: {
      title: "失衡选择",
      meaning: "关系失衡，价值观冲突。面临艰难的选择，可能有诱惑或背叛。",
      advice: "诚实面对关系中的问题，不要逃避选择。"
    }
  },
  {
    id: "the-chariot",
    nameZh: "战车",
    nameEn: "The Chariot",
    number: 7,
    arcana: "major",
    keywords: ["胜利", "意志", "控制", "前进"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
    upright: {
      title: "意志胜利",
      meaning: "通过坚定的意志和努力取得胜利。控制对立力量，朝着目标前进。",
      advice: "保持专注，克服障碍，你会成功。"
    },
    reversed: {
      title: "失控冲突",
      meaning: "失去控制，方向不明。内部冲突或外部阻力阻碍前进。",
      advice: "停下来重整，找到明确的Direction再出发。"
    }
  },
  {
    id: "strength",
    nameZh: "力量",
    nameEn: "Strength",
    number: 8,
    arcana: "major",
    keywords: ["勇气", "耐心", "内在力量", "坚韧"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
    upright: {
      title: "内在力量",
      meaning: "以柔克刚，用耐心和爱驯服困难。真正的力量来自内心而非武力。",
      advice: "用温和的方式处理问题，相信自己。"
    },
    reversed: {
      title: "软弱怀疑",
      meaning: "怀疑自己的能力，失去勇气。可能过于压抑或爆发失控。",
      advice: "重新找回自信，不要对自己太苛刻。"
    }
  },
  {
    id: "the-hermit",
    nameZh: "隐者",
    nameEn: "The Hermit",
    number: 9,
    arcana: "major",
    keywords: ["独处", "反思", "指引", "智慧"],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",
    upright: {
      title: "寻找真理",
      meaning: "退隐独处，寻找内在真理。通过反思获得智慧，成为他人的指引。",
      advice: "给自己独处的时间，答案在内心。"
    },
    reversed: {
      title: "孤立逃避",
      meaning: "过度孤立，拒绝帮助。可能在逃避现实或过于自闭。",
      advice: "适时走出孤独，与他人连接。"
    }
  },
  {
    id: "wheel-of-fortune",
    nameZh: "命运之轮",
    nameEn: "Wheel of Fortune",
    number: 10,
    arcana: "major",
    keywords: ["命运", "转机", "循环", "机遇"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    upright: {
      title: "命运转机",
      meaning: "命运的转折点，好运来临。顺应变化，把握机遇。",
      advice: "顺势而为，相信一切都是最好的安排。"
    },
    reversed: {
      title: "逆境阻滞",
      meaning: "运势不佳，遇到阻碍。可能是低潮期，需要耐心度过。",
      advice: "接受暂时的挫折，等待时机转变。"
    }
  },
  {
    id: "justice",
    nameZh: "正义",
    nameEn: "Justice",
    number: 11,
    arcana: "major",
    keywords: ["公正", "平衡", "因果", "真理"],
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
    upright: {
      title: "公正平衡",
      meaning: "公正的决定，因果报应。理性分析，做出公平的判断。",
      advice: "诚实面对，公正处理，真相会显现。"
    },
    reversed: {
      title: "不公偏见",
      meaning: "不公正的决定，偏见或欺骗。可能存在法律或道德问题。",
      advice: "审视是否公平，避免偏见影响判断。"
    }
  },
  {
    id: "the-hanged-man",
    nameZh: "倒吊人",
    nameEn: "The Hanged Man",
    number: 12,
    arcana: "major",
    keywords: ["牺牲", "等待", "新视角", "放下"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
    upright: {
      title: "新的视角",
      meaning: "暂停和等待，从不同角度看问题。必要的牺牲将带来成长。",
      advice: "放下执念，用新的视角看待问题。"
    },
    reversed: {
      title: "固执停滞",
      meaning: "不愿放手，抗拒改变。无意义的牺牲或徒劳的等待。",
      advice: "该放手时就放手，不要固守无效的方法。"
    }
  },
  {
    id: "death",
    nameZh: "死神",
    nameEn: "Death",
    number: 13,
    arcana: "major",
    keywords: ["结束", "转变", "新生", "释放"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
    upright: {
      title: "转变重生",
      meaning: "旧事物的结束带来新开始。放下过去，迎接转变。",
      advice: "接受结束，拥抱变化，新生即将到来。"
    },
    reversed: {
      title: "抗拒结束",
      meaning: "拒绝放手，害怕改变。拖延结束只会让痛苦延长。",
      advice: "勇敢面对结束，才能迎来新的开始。"
    }
  },
  {
    id: "temperance",
    nameZh: "节制",
    nameEn: "Temperance",
    number: 14,
    arcana: "major",
    keywords: ["平衡", "调和", "耐心", "中庸"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
    upright: {
      title: "和谐平衡",
      meaning: "找到平衡点，调和矛盾。中庸之道，不急不躁。",
      advice: "保持耐心，寻求平衡，一切都会水到渠成。"
    },
    reversed: {
      title: "失衡极端",
      meaning: "失去平衡，走向极端。可能过度放纵或过于压抑。",
      advice: "审视生活中的不平衡，重新找回中心。"
    }
  },
  {
    id: "the-devil",
    nameZh: "恶魔",
    nameEn: "The Devil",
    number: 15,
    arcana: "major",
    keywords: ["束缚", "欲望", "物质", "沉迷"],
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",
    upright: {
      title: "物质束缚",
      meaning: "被物质欲望或不良习惯束缚。沉迷于表象，失去自由。",
      advice: "审视自己的依赖和束缚，寻找解脱之道。"
    },
    reversed: {
      title: "解脱自由",
      meaning: "开始摆脱束缚，重获自由。意识到限制并寻求突破。",
      advice: "你有力量打破枷锁，勇敢地追求自由。"
    }
  },
  {
    id: "the-tower",
    nameZh: "塔",
    nameEn: "The Tower",
    number: 16,
    arcana: "major",
    keywords: ["突变", "崩塌", "觉醒", "释放"],
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
    upright: {
      title: "突然改变",
      meaning: "突如其来的剧变，旧结构崩塌。虽然痛苦，但会揭示真相。",
      advice: "接受剧变，从中学习，重建更坚实的基础。"
    },
    reversed: {
      title: "避免崩溃",
      meaning: "勉强维持，逃避必要的改变。延迟的崩塌可能更剧烈。",
      advice: "不要抗拒必要的改变，越早面对越好。"
    }
  },
  {
    id: "the-star",
    nameZh: "星星",
    nameEn: "The Star",
    number: 17,
    arcana: "major",
    keywords: ["希望", "疗愈", "灵感", "宁静"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
    upright: {
      title: "希望之光",
      meaning: "黑暗后的希望，心灵的疗愈。灵感涌现，信念恢复。",
      advice: "保持希望，相信美好的事情即将发生。"
    },
    reversed: {
      title: "失望绝望",
      meaning: "失去希望，感到绝望。可能过于理想化而失望。",
      advice: "重新点燃内心的希望，不要放弃。"
    }
  },
  {
    id: "the-moon",
    nameZh: "月亮",
    nameEn: "The Moon",
    number: 18,
    arcana: "major",
    keywords: ["幻象", "恐惧", "潜意识", "未知"],
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
    upright: {
      title: "探索未知",
      meaning: "面对恐惧和幻象，探索潜意识。虽然不确定，但成长在深处。",
      advice: "面对内心的恐惧，穿越迷雾找到真相。"
    },
    reversed: {
      title: "迷雾散开",
      meaning: "恐惧消散，真相逐渐清晰。焦虑减轻，不确定性减少。",
      advice: "保持冷静，迷雾正在散去。"
    }
  },
  {
    id: "the-sun",
    nameZh: "太阳",
    nameEn: "The Sun",
    number: 19,
    arcana: "major",
    keywords: ["成功", "快乐", "活力", "真理"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
    upright: {
      title: "光明成功",
      meaning: "充满阳光和正能量，成功在望。快乐、活力和纯真的喜悦。",
      advice: "享受当下的成功和快乐，保持乐观。"
    },
    reversed: {
      title: "暂时阴霾",
      meaning: "暂时的挫折或延迟，快乐被遮蔽。可能有自满或过度乐观。",
      advice: "阴霾是暂时的，太阳很快会再次出现。"
    }
  },
  {
    id: "judgement",
    nameZh: "审判",
    nameEn: "Judgement",
    number: 20,
    arcana: "major",
    keywords: ["觉醒", "重生", "评价", "召唤"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",
    upright: {
      title: "觉醒重生",
      meaning: "内心的召唤，自我审视后的重生。过去的努力得到回报。",
      advice: "倾听内心的召唤，勇敢地开始新篇章。"
    },
    reversed: {
      title: "自我怀疑",
      meaning: "缺乏自我反省，逃避召唤。可能过于苛责自己或他人。",
      advice: "诚实地面对自己，不要害怕改变。"
    }
  },
  {
    id: "the-world",
    nameZh: "世界",
    nameEn: "The World",
    number: 21,
    arcana: "major",
    keywords: ["完成", "圆满", "成就", "整体"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
    upright: {
      title: "圆满达成",
      meaning: "一个循环的完成，成就圆满。整合所有经验，达到新高度。",
      advice: "庆祝成就，准备开启新的旅程。"
    },
    reversed: {
      title: "未尽之事",
      meaning: "还有未完成的事，缺乏 closure。可能急于求成而未完成。",
      advice: "完成剩余的工作，才能真正开始新的循环。"
    }
  },
  // ==================== 小阿卡纳：权杖 (Wands) ====================
  {
    id: "wands-ace",
    nameZh: "权杖首牌",
    nameEn: "Ace of Wands",
    number: 1,
    suit: "wands",
    arcana: "minor",
    element: "火",
    keywords: ["创意", "灵感", "新开始", "潜力"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
    upright: {
      title: "创意火花",
      meaning: "新的创意灵感涌现，充满激情和动力。这是一个开始新项目或追求新目标的好时机。",
      advice: "抓住这个充满能量的时刻，大胆追求你的创意。"
    },
    reversed: {
      title: "延迟挫折",
      meaning: "创意受阻，缺乏动力或方向。新计划可能遇到延迟。",
      advice: "重新寻找灵感，不要强迫自己在没有热情时行动。"
    }
  },
  {
    id: "wands-02",
    nameZh: "权杖二",
    nameEn: "Two of Wands",
    number: 2,
    suit: "wands",
    arcana: "minor",
    element: "火",
    keywords: ["规划", "决策", "探索", "未来"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg",
    upright: {
      title: "未来规划",
      meaning: "站在十字路口，规划未来的方向。拥有资源和能力，正在考虑下一步行动。",
      advice: "大胆展望未来，制定长期计划并准备行动。"
    },
    reversed: {
      title: "恐惧犹豫",
      meaning: "害怕走出舒适区，对未来感到恐惧。可能因犹豫而错失机会。",
      advice: "克服恐惧，不要让担忧阻止你前进。"
    }
  },
  {
    id: "wands-03",
    nameZh: "权杖三",
    nameEn: "Three of Wands",
    number: 3,
    suit: "wands",
    arcana: "minor",
    element: "火",
    keywords: ["扩展", "远见", "合作", "等待"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg",
    upright: {
      title: "初步成果",
      meaning: "初步的努力开始见到成果，前景光明。商业或项目正在扩展。",
      advice: "保持耐心，你的 ships 正在进港。继续推进计划。"
    },
    reversed: {
      title: "延迟阻碍",
      meaning: "期望的结果延迟到来，可能有阻碍或合作问题。",
      advice: "检查计划中的障碍，可能需要调整策略或期望。"
    }
  },
  {
    id: "wands-04",
    nameZh: "权杖四",
    nameEn: "Four of Wands",
    number: 4,
    suit: "wands",
    arcana: "minor",
    element: "火",
    keywords: ["庆祝", "和谐", "回家", "稳定"],
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg",
    upright: {
      title: "欢庆时刻",
      meaning: "值得庆祝的时刻，可能是婚礼、毕业或项目完成。和谐与喜悦充满生活。",
      advice: "享受这个欢乐时光，与亲友分享你的成就。"
    },
    reversed: {
      title: "表面和谐",
      meaning: "表面的庆祝掩盖了潜在的问题，或家庭/团队内部存在不和。",
      advice: "解决根本问题，不要只关注表面的和谐。"
    }
  },
  {
    id: "wands-05",
    nameZh: "权杖五",
    nameEn: "Five of Wands",
    number: 5,
    suit: "wands",
    arcana: "minor",
    element: "火",
    keywords: ["冲突", "竞争", "分歧", "挑战"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg",
    upright: {
      title: "健康竞争",
      meaning: "面临挑战和竞争，但这能激发你的潜力。冲突最终会带来成长。",
      advice: "把竞争视为成长的机会，保持公平和尊重。"
    },
    reversed: {
      title: "避免冲突",
      meaning: "逃避必要的对抗，或内斗消耗能量。可能需要寻求和解。",
      advice: "面对冲突，找到解决问题的方法而不是回避。"
    }
  },
  {
    id: "wands-06",
    nameZh: "权杖六",
    nameEn: "Six of Wands",
    number: 6,
    suit: "wands",
    arcana: "minor",
    element: "火",
    keywords: ["胜利", "认可", "自信", "好消息"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg",
    upright: {
      title: "公众认可",
      meaning: "获得胜利和他人的认可，自信高涨。好消息即将到来。",
      advice: "享受你的成功，但不要骄傲自满。"
    },
    reversed: {
      title: "自我怀疑",
      meaning: "缺乏认可或自我怀疑，可能是私人胜利而非公众成就。",
      advice: "不要依赖他人的认可来定义你的价值。"
    }
  },
  {
    id: "wands-07",
    nameZh: "权杖七",
    nameEn: "Seven of Wands",
    number: 7,
    suit: "wands",
    arcana: "minor",
    element: "火",
    keywords: ["防御", "坚持", "立场", "勇气"],
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg",
    upright: {
      title: "捍卫立场",
      meaning: "需要捍卫自己的立场或信念，面对反对意见不退缩。",
      advice: "坚持你的信念，勇敢地面对挑战者。"
    },
    reversed: {
      title: "放弃抵抗",
      meaning: "感到 overwhelmed，可能想要放弃或逃避冲突。",
      advice: "评估是否值得继续战斗，有时撤退也是明智的。"
    }
  },
  {
    id: "wands-08",
    nameZh: "权杖八",
    nameEn: "Eight of Wands",
    number: 8,
    suit: "wands",
    arcana: "minor",
    element: "火",
    keywords: ["速度", "行动", "进展", "消息"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Wands08.jpg",
    upright: {
      title: "快速进展",
      meaning: "事情迅速推进，停滞的项目突然有了进展。消息快速传来。",
      advice: "抓住这股动能，迅速采取行动。"
    },
    reversed: {
      title: "延误阻碍",
      meaning: "事情进展缓慢或被阻碍，沟通延迟。",
      advice: "耐心等待，检查是什么阻碍了进展。"
    }
  },
  {
    id: "wands-09",
    nameZh: "权杖九",
    nameEn: "Nine of Wands",
    number: 9,
    suit: "wands",
    arcana: "minor",
    element: "火",
    keywords: ["坚韧", "防备", "坚持", "最后考验"],
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Wands09.jpg",
    upright: {
      title: "最后防线",
      meaning: "经历了挑战后依然坚持，虽然疲惫但已准备好应对最后的考验。",
      advice: "你已经走了这么远，不要放弃，最后的胜利就在眼前。"
    },
    reversed: {
      title: "精疲力竭",
      meaning: "身心俱疲，可能想要放弃。过度防备导致倦怠。",
      advice: "适当休息，重新评估是否值得继续战斗。"
    }
  },
  {
    id: "wands-10",
    nameZh: "权杖十",
    nameEn: "Ten of Wands",
    number: 10,
    suit: "wands",
    arcana: "minor",
    element: "火",
    keywords: ["负担", "责任", "压力", "完成"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg",
    upright: {
      title: "承担责任",
      meaning: "承担了很多责任，感到压力和负担，但有能力完成。",
      advice: "考虑 delegate 任务，不要独自承担所有负担。"
    },
    reversed: {
      title: "释放负担",
      meaning: "放下不必要的责任，或感到被压得喘不过气。",
      advice: "学会说不，放下那些不属于你的负担。"
    }
  },
  {
    id: "wands-page",
    nameZh: "权杖侍从",
    nameEn: "Page of Wands",
    number: 11,
    suit: "wands",
    arcana: "minor",
    court: "page",
    element: "火",
    keywords: ["探索", "热情", "新想法", "自由精神"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg",
    upright: {
      title: "热情探索",
      meaning: "充满热情和好奇心，渴望探索新领域。带来新的消息或创意。",
      advice: "追随你的热情，勇敢尝试新事物。"
    },
    reversed: {
      title: "轻率冲动",
      meaning: "想法很多但缺乏执行力，或过于冲动不考虑后果。",
      advice: "把想法落实到行动前，先仔细规划。"
    }
  },
  {
    id: "wands-knight",
    nameZh: "权杖骑士",
    nameEn: "Knight of Wands",
    number: 12,
    suit: "wands",
    arcana: "minor",
    court: "knight",
    element: "火",
    keywords: ["冒险", "冲动", "行动", "魅力"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg",
    upright: {
      title: "勇敢行动",
      meaning: "充满魅力和行动力，勇于冒险追求目标。充满激情和自信。",
      advice: "勇往直前，但记得在行动前稍加思考。"
    },
    reversed: {
      title: "鲁莽冲动",
      meaning: "过于冲动或易怒，缺乏耐心和计划。",
      advice: "冷静下来，不要让冲动控制你的行为。"
    }
  },
  {
    id: "wands-queen",
    nameZh: "权杖皇后",
    nameEn: "Queen of Wands",
    number: 13,
    suit: "wands",
    arcana: "minor",
    court: "queen",
    element: "火",
    keywords: ["自信", "热情", "独立", "魅力"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg",
    upright: {
      title: "热情自信",
      meaning: "自信、独立且充满魅力，能够激励他人。把热情转化为行动。",
      advice: "相信自己的能力，用你的热情影响周围的人。"
    },
    reversed: {
      title: "自我怀疑",
      meaning: "缺乏自信，可能过于在意他人的看法或感到嫉妒。",
      advice: "重新找回你的内在力量，不要被他人的意见左右。"
    }
  },
  {
    id: "wands-king",
    nameZh: "权杖国王",
    nameEn: "King of Wands",
    number: 14,
    suit: "wands",
    arcana: "minor",
    court: "king",
    element: "火",
    keywords: ["领导力", "远见", "创业", "魅力"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg",
    upright: {
      title: "远见领导",
      meaning: "有远见的领导者，能够激励他人追求共同目标。创业精神强。",
      advice: "发挥你的领导才能，带领他人实现愿景。"
    },
    reversed: {
      title: "专横霸道",
      meaning: "过于专横或冲动，可能强迫他人接受自己的意见。",
      advice: "学会倾听他人，不要让自己的自我主导一切。"
    }
  },
  // ==================== 小阿卡纳：圣杯 (Cups) ====================
  {
    id: "cups-ace",
    nameZh: "圣杯首牌",
    nameEn: "Ace of Cups",
    number: 1,
    suit: "cups",
    arcana: "minor",
    element: "水",
    keywords: ["爱", "情感", "直觉", "新关系"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg",
    upright: {
      title: "爱的涌现",
      meaning: "新的情感开始，爱意满满。直觉增强，内心充满喜悦。",
      advice: "敞开心扉，接受这份爱的礼物。"
    },
    reversed: {
      title: "情感阻塞",
      meaning: "情感上的阻塞，难以表达感受或接受爱。",
      advice: "探索内心，找出阻碍你感受爱的原因。"
    }
  },
  {
    id: "cups-02",
    nameZh: "圣杯二",
    nameEn: "Two of Cups",
    number: 2,
    suit: "cups",
    arcana: "minor",
    element: "水",
    keywords: ["伴侣", "和谐", "相互吸引", "合作"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg",
    upright: {
      title: "灵魂伴侣",
      meaning: "相互吸引和情感交流，可能是浪漫关系或深厚的友谊。",
      advice: "珍惜这段关系，培养 mutual respect 和理解。"
    },
    reversed: {
      title: "关系失衡",
      meaning: "关系中出现不平衡，或沟通不畅导致误解。",
      advice: "坦诚沟通，解决关系中的不和谐因素。"
    }
  },
  {
    id: "cups-03",
    nameZh: "圣杯三",
    nameEn: "Three of Cups",
    number: 3,
    suit: "cups",
    arcana: "minor",
    element: "水",
    keywords: ["庆祝", "友谊", "社交", "欢乐"],
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg",
    upright: {
      title: "友谊庆祝",
      meaning: "与朋友们欢聚庆祝，享受社交的乐趣。可能是婚礼或聚会。",
      advice: "享受与朋友的时光，建立支持你的社交网络。"
    },
    reversed: {
      title: "孤立排斥",
      meaning: "感到被排斥或孤立，社交圈中有冲突。",
      advice: "寻找新的社交圈，或解决现有关系中的问题。"
    }
  },
  {
    id: "cups-04",
    nameZh: "圣杯四",
    nameEn: "Four of Cups",
    number: 4,
    suit: "cups",
    arcana: "minor",
    element: "水",
    keywords: ["不满", "冷漠", "沉思", "错失"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg",
    upright: {
      title: "情感倦怠",
      meaning: "对现状感到不满或冷漠，需要时间来沉思和重新评估。",
      advice: "给自己时间思考，但也要留意身边的新机会。"
    },
    reversed: {
      title: "觉醒接受",
      meaning: "从沉思中醒来，开始接受新的机会和情感。",
      advice: "睁开眼睛，美好的机会可能就在你身边。"
    }
  },
  {
    id: "cups-05",
    nameZh: "圣杯五",
    nameEn: "Five of Cups",
    number: 5,
    suit: "cups",
    arcana: "minor",
    element: "水",
    keywords: ["失落", "悲伤", "失望", "遗憾"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg",
    upright: {
      title: "面对失落",
      meaning: "经历失落或悲伤，但还有未被注意到的希望存在。",
      advice: "允许自己悲伤，但也要看到还有值得感激的事物。"
    },
    reversed: {
      title: "走出悲伤",
      meaning: "开始从失落中恢复，接受已经发生的事情。",
      advice: "放下过去，向前看，新的情感机会在等待。"
    }
  },
  {
    id: "cups-06",
    nameZh: "圣杯六",
    nameEn: "Six of Cups",
    number: 6,
    suit: "cups",
    arcana: "minor",
    element: "水",
    keywords: ["怀旧", "童年", "纯真", "礼物"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg",
    upright: {
      title: "美好回忆",
      meaning: "怀旧和回忆过去的美好时光，可能 reconnect 旧友或收到礼物。",
      advice: "珍惜美好的回忆，但不要让过去阻碍你前进。"
    },
    reversed: {
      title: "困于过去",
      meaning: "过于沉溺于过去，无法活在当下或走向未来。",
      advice: "放下过去，专注于创造新的美好回忆。"
    }
  },
  {
    id: "cups-07",
    nameZh: "圣杯七",
    nameEn: "Seven of Cups",
    number: 7,
    suit: "cups",
    arcana: "minor",
    element: "水",
    keywords: ["幻想", "选择", "幻觉", "梦想"],
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg",
    upright: {
      title: "多重选择",
      meaning: "面临多个选择或可能性，需要分清幻想与现实。",
      advice: "仔细评估每个选项，选择真正适合你的道路。"
    },
    reversed: {
      title: "面对现实",
      meaning: "从幻想中清醒，看清事情的真相。",
      advice: "停止逃避现实，做出明确的选择并付诸行动。"
    }
  },
  {
    id: "cups-08",
    nameZh: "圣杯八",
    nameEn: "Eight of Cups",
    number: 8,
    suit: "cups",
    arcana: "minor",
    element: "水",
    keywords: ["放弃", "离开", "寻求更多", "转变"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg",
    upright: {
      title: "寻找更深",
      meaning: "离开已经无法满足的事物，去寻找更深层的意义或满足。",
      advice: "勇敢地离开不再服务你的情况，去寻找你真正需要的。"
    },
    reversed: {
      title: "害怕改变",
      meaning: "害怕离开熟悉的环境，即使已经感到不满足。",
      advice: "面对你对改变的恐惧，评估留下是否真的能带来幸福。"
    }
  },
  {
    id: "cups-09",
    nameZh: "圣杯九",
    nameEn: "Nine of Cups",
    number: 9,
    suit: "cups",
    arcana: "minor",
    element: "水",
    keywords: ["满足", "愿望实现", "幸福", "满足"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg",
    upright: {
      title: "愿望卡",
      meaning: "愿望实现，情感满足和幸福。享受生活的丰盛。",
      advice: "享受这份满足，感恩你已经拥有的一切。"
    },
    reversed: {
      title: "内心空虚",
      meaning: "外在的成功无法填补内心的空虚，或沉溺于享乐。",
      advice: "寻找内在的幸福，而不是依赖外在的满足。"
    }
  },
  {
    id: "cups-10",
    nameZh: "圣杯十",
    nameEn: "Ten of Cups",
    number: 10,
    suit: "cups",
    arcana: "minor",
    element: "水",
    keywords: ["家庭", "和谐", "幸福", "圆满"],
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg",
    upright: {
      title: "家庭幸福",
      meaning: "家庭和情感生活的圆满，长期关系中的和谐与幸福。",
      advice: "珍惜你的家庭和亲密关系，这是真正的财富。"
    },
    reversed: {
      title: "家庭不和",
      meaning: "家庭或关系中的不和，表面的和谐掩盖了深层的问题。",
      advice: "面对并解决关系中的问题，重建真正的和谐。"
    }
  },
  {
    id: "cups-page",
    nameZh: "圣杯侍从",
    nameEn: "Page of Cups",
    number: 11,
    suit: "cups",
    arcana: "minor",
    court: "page",
    element: "水",
    keywords: ["情感消息", "创意", "直觉", "敏感"],
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg",
    upright: {
      title: "情感讯息",
      meaning: "收到情感方面的消息，或直觉和创意涌现。敏感且富有想象力。",
      advice: "倾听你的直觉，保持对情感的开放。"
    },
    reversed: {
      title: "情感不成熟",
      meaning: "情感上的不成熟，过度敏感或逃避现实。",
      advice: "学会健康地处理情感，不要沉溺于幻想。"
    }
  },
  {
    id: "cups-knight",
    nameZh: "圣杯骑士",
    nameEn: "Knight of Cups",
    number: 12,
    suit: "cups",
    arcana: "minor",
    court: "knight",
    element: "水",
    keywords: ["浪漫", "理想主义", "追求", "魅力"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg",
    upright: {
      title: "浪漫追求",
      meaning: "浪漫的追求者，追求理想的爱情或创意目标。充满魅力和艺术气息。",
      advice: "追随你的心，但要保持一些现实感。"
    },
    reversed: {
      title: "逃避现实",
      meaning: "过于理想化或逃避现实，可能是不可靠或情绪化。",
      advice: "在追求梦想的同时，不要忽视现实的责任。"
    }
  },
  {
    id: "cups-queen",
    nameZh: "圣杯皇后",
    nameEn: "Queen of Cups",
    number: 13,
    suit: "cups",
    arcana: "minor",
    court: "queen",
    element: "水",
    keywords: ["同情", "直觉", "情感深度", "关怀"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg",
    upright: {
      title: "情感智慧",
      meaning: "富有同情心和情感智慧，能够深刻理解他人的感受。直觉敏锐。",
      advice: "相信你的直觉，用同情心对待自己和他人。"
    },
    reversed: {
      title: "情感过度",
      meaning: "过于情绪化或被他人的情感所淹没，缺乏界限。",
      advice: "建立健康的情感界限，不要让他人的情绪影响你太多。"
    }
  },
  {
    id: "cups-king",
    nameZh: "圣杯国王",
    nameEn: "King of Cups",
    number: 14,
    suit: "cups",
    arcana: "minor",
    court: "king",
    element: "水",
    keywords: ["情感平衡", "智慧", "慈悲", "控制"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg",
    upright: {
      title: "情感大师",
      meaning: "情感上成熟且平衡，能够理解和控制自己的情绪，同时富有同情心。",
      advice: "运用你的情感智慧来引导和帮助他人。"
    },
    reversed: {
      title: "情感操控",
      meaning: "情感上操控或压抑，可能隐藏真实感受或用情感控制他人。",
      advice: "诚实地面对自己的情感，不要操控或被操控。"
    }
  },
  // ==================== 小阿卡纳：宝剑 (Swords) ====================
  {
    id: "swords-ace",
    nameZh: "宝剑首牌",
    nameEn: "Ace of Swords",
    number: 1,
    suit: "swords",
    arcana: "minor",
    element: "风",
    keywords: [" clarity", "突破", "新想法", "真相"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg",
    upright: {
      title: "思维突破",
      meaning: "新的思维 clarity，突破性的想法或真相大白。心智上的胜利。",
      advice: "运用你的思维能力，追求真理和 clarity。"
    },
    reversed: {
      title: "思维混乱",
      meaning: "思维混乱，缺乏 clarity，或真相被扭曲。",
      advice: "清理你的思绪，寻找事情的真相。"
    }
  },
  {
    id: "swords-02",
    nameZh: "宝剑二",
    nameEn: "Two of Swords",
    number: 2,
    suit: "swords",
    arcana: "minor",
    element: "风",
    keywords: ["两难", "僵局", "逃避", "决定"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg",
    upright: {
      title: "艰难抉择",
      meaning: "面临两难的选择，感到进退两难。需要做出决定但感到犹豫。",
      advice: "面对选择，收集信息后果断决定。"
    },
    reversed: {
      title: "信息过载",
      meaning: "被过多信息淹没，或因逃避而无法做决定。",
      advice: "停止逃避，做出选择并承担后果。"
    }
  },
  {
    id: "swords-03",
    nameZh: "宝剑三",
    nameEn: "Three of Swords",
    number: 3,
    suit: "swords",
    arcana: "minor",
    element: "风",
    keywords: ["心碎", "悲伤", "痛苦", "失落"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg",
    upright: {
      title: "心碎痛苦",
      meaning: "经历心碎或情感痛苦，悲伤需要被承认和释放。",
      advice: "允许自己感受痛苦，这是治愈的第一步。"
    },
    reversed: {
      title: "康复原谅",
      meaning: "从痛苦中恢复，开始原谅自己和他人。",
      advice: "放下痛苦，给自己时间和空间去 heal。"
    }
  },
  {
    id: "swords-04",
    nameZh: "宝剑四",
    nameEn: "Four of Swords",
    number: 4,
    suit: "swords",
    arcana: "minor",
    element: "风",
    keywords: ["休息", "恢复", "沉思", "静止"],
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg",
    upright: {
      title: "休息恢复",
      meaning: "需要从压力中恢复，静止和沉思是必要的。",
      advice: "给自己时间休息，充电后再出发。"
    },
    reversed: {
      title: " restless",
      meaning: "无法休息，感到 restless 或焦虑，逃避必要的静止。",
      advice: "学会真正的休息，不要总是让自己忙碌。"
    }
  },
  {
    id: "swords-05",
    nameZh: "宝剑五",
    nameEn: "Five of Swords",
    number: 5,
    suit: "swords",
    arcana: "minor",
    element: "风",
    keywords: ["冲突", "失败", "欺骗", "得不偿失"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg",
    upright: {
      title: "得不偿失",
      meaning: "赢得了战斗但失去了战争，可能通过不正当手段获胜。",
      advice: "评估你的胜利是否值得付出的代价。"
    },
    reversed: {
      title: "和解原谅",
      meaning: "愿意和解，放下过去的冲突，寻求和平解决。",
      advice: "考虑和解，持续的冲突只会让所有人受损。"
    }
  },
  {
    id: "swords-06",
    nameZh: "宝剑六",
    nameEn: "Six of Swords",
    number: 6,
    suit: "swords",
    arcana: "minor",
    element: "风",
    keywords: ["过渡", "移动", "疗愈", "离开"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg",
    upright: {
      title: "离开困境",
      meaning: "离开困难的环境，向更好的地方过渡。疗愈的过程。",
      advice: "接受必要的改变，相信前方有更好的事物。"
    },
    reversed: {
      title: "抗拒改变",
      meaning: "抗拒必要的过渡，或无法放下过去。",
      advice: "面对改变的必要性，拖延只会让痛苦延长。"
    }
  },
  {
    id: "swords-07",
    nameZh: "宝剑七",
    nameEn: "Seven of Swords",
    number: 7,
    suit: "swords",
    arcana: "minor",
    element: "风",
    keywords: ["欺骗", "策略", "偷窃", "偷偷摸摸"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg",
    upright: {
      title: "策略撤退",
      meaning: "使用策略而非直接对抗，可能需要暂时撤退或低调行事。",
      advice: "有时策略性的撤退是明智的，但不要用欺骗伤害他人。"
    },
    reversed: {
      title: "欺骗曝光",
      meaning: "欺骗被揭穿，或感到内疚和羞愧。",
      advice: "诚实面对，承担欺骗的后果，重新开始。"
    }
  },
  {
    id: "swords-08",
    nameZh: "宝剑八",
    nameEn: "Eight of Swords",
    number: 8,
    suit: "swords",
    arcana: "minor",
    element: "风",
    keywords: ["限制", "束缚", "无助", "自我设限"],
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg",
    upright: {
      title: "自我束缚",
      meaning: "感到被困，但限制主要来自自己的思维和恐惧。",
      advice: "认识到你可以解放自己，恐惧只是幻象。"
    },
    reversed: {
      title: "解放自由",
      meaning: "开始挣脱束缚，找到自由和解放的道路。",
      advice: "你已经找到出路，勇敢地走向自由。"
    }
  },
  {
    id: "swords-09",
    nameZh: "宝剑九",
    nameEn: "Nine of Swords",
    number: 9,
    suit: "swords",
    arcana: "minor",
    element: "风",
    keywords: ["焦虑", "噩梦", "担忧", "恐惧"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Swords09.jpg",
    upright: {
      title: "深夜焦虑",
      meaning: "深深的焦虑和担忧，可能在夜晚尤为严重。",
      advice: "寻求帮助，不要独自承受这些恐惧。"
    },
    reversed: {
      title: "希望曙光",
      meaning: "焦虑开始减轻，看到希望的曙光。",
      advice: "情况正在好转，不要被恐惧完全控制。"
    }
  },
  {
    id: "swords-10",
    nameZh: "宝剑十",
    nameEn: "Ten of Swords",
    number: 10,
    suit: "swords",
    arcana: "minor",
    element: "风",
    keywords: ["结束", "背叛", "痛苦结束", "最低点"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg",
    upright: {
      title: "痛苦结束",
      meaning: "一段痛苦经历的结束，虽然痛苦但意味着新的开始即将到来。",
      advice: "这是最黑暗的时刻，但黎明即将到来。"
    },
    reversed: {
      title: "恢复重生",
      meaning: "从痛苦中恢复，开始新的循环。",
      advice: "你已经度过了最困难的时期，重建即将开始。"
    }
  },
  {
    id: "swords-page",
    nameZh: "宝剑侍从",
    nameEn: "Page of Swords",
    number: 11,
    suit: "swords",
    arcana: "minor",
    court: "page",
    element: "风",
    keywords: ["好奇", "沟通", "警觉", "新想法"],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg",
    upright: {
      title: "好奇求知",
      meaning: "充满好奇心和求知欲，渴望学习和沟通。警觉且敏锐。",
      advice: "保持好奇，但也要学会专注。"
    },
    reversed: {
      title: "八卦挑剔",
      meaning: "过于八卦或挑剔，用言语伤害他人。",
      advice: "注意你的言辞，不要传播流言蜚语。"
    }
  },
  {
    id: "swords-knight",
    nameZh: "宝剑骑士",
    nameEn: "Knight of Swords",
    number: 12,
    suit: "swords",
    arcana: "minor",
    court: "knight",
    element: "风",
    keywords: ["急迫", "行动", "激进", "果断"],
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg",
    upright: {
      title: "果断行动",
      meaning: "果断且迅速地行动，充满决心和 focus。思维敏捷。",
      advice: "迅速行动，但要确保方向正确。"
    },
    reversed: {
      title: "鲁莽冲动",
      meaning: "过于鲁莽和冲动，不考虑后果就行动。",
      advice: "慢下来，思考后再行动，否则可能造成损害。"
    }
  },
  {
    id: "swords-queen",
    nameZh: "宝剑皇后",
    nameEn: "Queen of Swords",
    number: 13,
    suit: "swords",
    arcana: "minor",
    court: "queen",
    element: "风",
    keywords: ["独立", "清晰", "诚实", "智慧"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg",
    upright: {
      title: "思维清晰",
      meaning: "思维清晰且独立，能够客观分析问题。诚实且直接。",
      advice: "运用你的智慧，保持客观和诚实。"
    },
    reversed: {
      title: "冷酷刻薄",
      meaning: "过于冷酷或刻薄，用言语伤害他人，情感疏离。",
      advice: "在诚实和同理心之间找到平衡。"
    }
  },
  {
    id: "swords-king",
    nameZh: "宝剑国王",
    nameEn: "King of Swords",
    number: 14,
    suit: "swords",
    arcana: "minor",
    court: "king",
    element: "风",
    keywords: ["权威", "公正", "理性", "领导力"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Swords14.jpg",
    upright: {
      title: "理性领导",
      meaning: "理性和公正的领导者，用清晰的思维做决策。权威且公正。",
      advice: "运用理性和公正来领导，坚持真理。"
    },
    reversed: {
      title: "滥用权力",
      meaning: "滥用智力或权力，可能操纵或控制他人。",
      advice: "不要用你的智慧来操纵他人，保持道德标准。"
    }
  },
  // ==================== 小阿卡纳：星币 (Pentacles) ====================
  {
    id: "pentacles-ace",
    nameZh: "星币首牌",
    nameEn: "Ace of Pentacles",
    number: 1,
    suit: "pentacles",
    arcana: "minor",
    element: "土",
    keywords: ["机会", "财富", "新开始", "物质"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg",
    upright: {
      title: "物质机会",
      meaning: "新的财务或物质机会，可能是有利的投资或工作机会。",
      advice: "抓住这个实际的机会，把它转化为具体的成果。"
    },
    reversed: {
      title: "错失机会",
      meaning: "错失物质机会，或过度关注物质而忽视其他。",
      advice: "重新评估你的优先事项，抓住机会当它出现时。"
    }
  },
  {
    id: "pentacles-02",
    nameZh: "星币二",
    nameEn: "Two of Pentacles",
    number: 2,
    suit: "pentacles",
    arcana: "minor",
    element: "土",
    keywords: ["平衡", "适应", " juggling", "灵活"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg",
    upright: {
      title: "灵活平衡",
      meaning: "在处理多重任务或责任时保持平衡和灵活。",
      advice: "保持灵活，但不要让自己过度分散。"
    },
    reversed: {
      title: "失衡负担",
      meaning: " juggling 太多事情，感到不堪重负或失去平衡。",
      advice: "重新评估你的承诺，学会放手一些责任。"
    }
  },
  {
    id: "pentacles-03",
    nameZh: "星币三",
    nameEn: "Three of Pentacles",
    number: 3,
    suit: "pentacles",
    arcana: "minor",
    element: "土",
    keywords: ["合作", "技能", "团队", "学习"],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg",
    upright: {
      title: "团队合作",
      meaning: "通过合作和团队工作取得成功，技能得到认可。",
      advice: "与他人合作，展示你的专业技能。"
    },
    reversed: {
      title: "缺乏协作",
      meaning: "团队合作不畅，或个人技能未得到认可。",
      advice: "改善沟通，或寻找能够赏识你技能的团队。"
    }
  },
  {
    id: "pentacles-04",
    nameZh: "星币四",
    nameEn: "Four of Pentacles",
    number: 4,
    suit: "pentacles",
    arcana: "minor",
    element: "土",
    keywords: ["保守", "控制", "储蓄", "固执"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg",
    upright: {
      title: "财务稳定",
      meaning: "保守地管理资源，注重财务安全和稳定。",
      advice: "明智地储蓄，但不要太过于吝啬。"
    },
    reversed: {
      title: "贪婪放手",
      meaning: "过于贪婪或不愿分享，需要学会放手。",
      advice: "学会慷慨，过度控制只会带来焦虑。"
    }
  },
  {
    id: "pentacles-05",
    nameZh: "星币五",
    nameEn: "Five of Pentacles",
    number: 5,
    suit: "pentacles",
    arcana: "minor",
    element: "土",
    keywords: ["困难", "损失", "孤立", "贫困"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg",
    upright: {
      title: "物质困难",
      meaning: "经历物质或财务困难，感到孤立无援。",
      advice: "寻求帮助，苦难是暂时的，支持就在身边。"
    },
    reversed: {
      title: "走出困境",
      meaning: "从困难中恢复，找到帮助和支持。",
      advice: "接受帮助，情况正在好转。"
    }
  },
  {
    id: "pentacles-06",
    nameZh: "星币六",
    nameEn: "Six of Pentacles",
    number: 6,
    suit: "pentacles",
    arcana: "minor",
    element: "土",
    keywords: ["慷慨", "分享", "给予", "接受"],
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg",
    upright: {
      title: "慷慨给予",
      meaning: "慷慨地分享资源，无论是给予还是接受帮助。",
      advice: "慷慨地给予，也 graciously 接受他人的帮助。"
    },
    reversed: {
      title: "不平等",
      meaning: "给予和接受之间的不平衡，可能有附加条件。",
      advice: "确保交换是公平的，不要成为依赖或控制的受害者。"
    }
  },
  {
    id: "pentacles-07",
    nameZh: "星币七",
    nameEn: "Seven of Pentacles",
    number: 7,
    suit: "pentacles",
    arcana: "minor",
    element: "土",
    keywords: ["评估", "耐心", "投资", "成长"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg",
    upright: {
      title: "耐心等待",
      meaning: "评估进展，耐心等待投资或努力结出果实。",
      advice: "耐心等待，你的努力正在慢慢成熟。"
    },
    reversed: {
      title: "缺乏耐心",
      meaning: "不耐烦，想要加速结果，或投资没有回报。",
      advice: "重新评估你的策略，有些事物需要时间。"
    }
  },
  {
    id: "pentacles-08",
    nameZh: "星币八",
    nameEn: "Eight of Pentacles",
    number: 8,
    suit: "pentacles",
    arcana: "minor",
    element: "土",
    keywords: ["技能", "勤奋", "专注", "精通"],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg",
    upright: {
      title: "专注精进",
      meaning: "专注于提升技能，勤奋工作以达到精通。",
      advice: "持续练习，专注于提升你的技能。"
    },
    reversed: {
      title: "缺乏动力",
      meaning: "对工作缺乏热情，或过度工作导致倦怠。",
      advice: "找到工作的意义，或休息以恢复热情。"
    }
  },
  {
    id: "pentacles-09",
    nameZh: "星币九",
    nameEn: "Nine of Pentacles",
    number: 9,
    suit: "pentacles",
    arcana: "minor",
    element: "土",
    keywords: ["独立", "奢华", "自给自足", "享受"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg",
    upright: {
      title: "物质丰盛",
      meaning: "享受物质丰盛和独立，自给自足且生活优渥。",
      advice: "享受你劳动的果实，你值得拥有这一切。"
    },
    reversed: {
      title: "依赖空虚",
      meaning: "过度依赖他人，或物质丰盛但内心空虚。",
      advice: "寻找内在的满足感，不要只依赖外在的物质。"
    }
  },
  {
    id: "pentacles-10",
    nameZh: "星币十",
    nameEn: "Ten of Pentacles",
    number: 10,
    suit: "pentacles",
    arcana: "minor",
    element: "土",
    keywords: ["财富", "传承", "家庭", "长期安全"],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Pents10.jpg",
    upright: {
      title: "家族财富",
      meaning: "长期的财务安全和家族财富，代际传承的成功。",
      advice: "为长远的未来做打算，建立持久的遗产。"
    },
    reversed: {
      title: "财务问题",
      meaning: "家庭财务问题，或传统价值观与现代需求的冲突。",
      advice: "解决家庭财务问题，重新评估传统观念。"
    }
  },
  {
    id: "pentacles-page",
    nameZh: "星币侍从",
    nameEn: "Page of Pentacles",
    number: 11,
    suit: "pentacles",
    arcana: "minor",
    court: "page",
    element: "土",
    keywords: ["机会", "学习", "实际", "野心"],
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg",
    upright: {
      title: "新机会",
      meaning: "新的财务或学习机会，充满野心和学习的热情。",
      advice: "抓住这个实际的机会，努力学习新技能。"
    },
    reversed: {
      title: "缺乏动力",
      meaning: "缺乏动力或拖延，没有实际行动来实现目标。",
      advice: "停止空想，采取实际行动来实现你的目标。"
    }
  },
  {
    id: "pentacles-knight",
    nameZh: "星币骑士",
    nameEn: "Knight of Pentacles",
    number: 12,
    suit: "pentacles",
    arcana: "minor",
    court: "knight",
    element: "土",
    keywords: ["勤奋", "可靠", "稳定", "务实"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg",
    upright: {
      title: "勤奋务实",
      meaning: "勤奋且可靠，按部就班地实现目标。务实且专注。",
      advice: "保持专注和耐心，稳步前进。"
    },
    reversed: {
      title: "停滞不前",
      meaning: "过于保守或停滞不前，害怕改变或冒险。",
      advice: "学会接受一些风险，不要被完美主义困住。"
    }
  },
  {
    id: "pentacles-queen",
    nameZh: "星币皇后",
    nameEn: "Queen of Pentacles",
    number: 13,
    suit: "pentacles",
    arcana: "minor",
    court: "queen",
    element: "土",
    keywords: ["滋养", "实用", "丰盛", "母性"],
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg",
    upright: {
      title: "实际滋养",
      meaning: "实际且 nurturing，能够创造丰盛并照顾他人。",
      advice: "运用你的实际技能来创造丰盛和照顾他人。"
    },
    reversed: {
      title: "过度关注",
      meaning: "过度关注物质或工作，忽视自我照顾或家庭。",
      advice: "在照顾他人和照顾自己之间找到平衡。"
    }
  },
  {
    id: "pentacles-king",
    nameZh: "星币国王",
    nameEn: "King of Pentacles",
    number: 14,
    suit: "pentacles",
    arcana: "minor",
    court: "king",
    element: "土",
    keywords: ["成功", "财富", "领导力", "实际"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg",
    upright: {
      title: "物质成功",
      meaning: "物质上的成功和财富，实际且成功的领导者。",
      advice: "明智地管理你的资源，用你的成功来帮助他人。"
    },
    reversed: {
      title: "贪婪控制",
      meaning: "过于贪婪或控制，用财富来操纵他人。",
      advice: "不要让财富成为你唯一的价值观，慷慨分享。"
    }
  }
];

// 导出牌库数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TAROT_CARDS;
}
