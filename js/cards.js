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
  }
];

// 导出牌库数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TAROT_CARDS;
}
