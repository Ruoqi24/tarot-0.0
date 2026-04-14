/**
 * 牌阵配置数据
 * 定义各种牌阵的结构、说明和牌位
 */

const SPREADS = [
  {
    id: "single",
    name: "单张牌",
    nameEn: "Single Card",
    cardCount: 1,
    icon: "✦",
    description: "最快速的指引，适合日常参考",
    usage: "当你需要一个简单直接的指引时，单张牌能给出最清晰的答案。",
    steps: [
      "深呼吸，在心中默念你的问题",
      "点击牌堆抽取一张牌",
      "查看牌面含义，思考与你的问题关联"
    ],
    positions: [
      {
        key: "message",
        label: "指引",
        description: "当前你需要的讯息或建议",
        meaning: "这张牌代表此时此刻你最需要听到的讯息"
      }
    ],
    interpretation: {
      summary: "单张牌直接回应你的问题，牌面正逆位显示能量的流动方向。",
      advice: "静下心来，感受这张牌给你的直觉讯息。"
    }
  },
  {
    id: "three-card",
    name: "三张牌",
    nameEn: "Three Cards",
    cardCount: 3,
    icon: "⚡",
    description: "过去、现在、未来的时间流",
    usage: "适合看事情的发展过程，了解时间线上的能量流动。",
    steps: [
      "默念你的问题，专注在时间发展上",
      "依次抽取三张牌",
      "第一张代表过去的影响",
      "第二张代表现在的状况",
      "第三张代表未来的可能"
    ],
    positions: [
      {
        key: "past",
        label: "过去",
        description: "影响现在的过去因素",
        meaning: "过去发生的事如何影响你的现状"
      },
      {
        key: "present",
        label: "现在",
        description: "当前的真实状况",
        meaning: "你目前所处的位置和能量状态"
      },
      {
        key: "future",
        label: "未来",
        description: "可能的发展方向",
        meaning: "按照现在的轨迹，事情可能如何发展"
      }
    ],
    interpretation: {
      summary: "三张牌呈现时间之流，帮助你理解事情的来龙去脉和发展趋势。",
      advice: "过去塑造了现在，而现在决定未来。你可以通过改变现在来影响未来。"
    }
  },
  {
    id: "choice",
    name: "二选一",
    nameEn: "Choice Spread",
    cardCount: 4,
    icon: "⚖️",
    description: "左右两条路的对比分析",
    usage: "当你面临两难选择时，这个牌阵帮你看清每条路的走向。",
    steps: [
      "明确你的两个选择",
      "左边代表选择A，右边代表选择B",
      "先抽两张看各自的结果",
      "再抽两张看选择后的发展"
    ],
    positions: [
      {
        key: "choice-a",
        label: "选择A",
        description: "第一条路的现状",
        meaning: "选择A当下的状态和能量"
      },
      {
        key: "choice-b",
        label: "选择B",
        description: "第二条路的现状",
        meaning: "选择B当下的状态和能量"
      },
      {
        key: "outcome-a",
        label: "结果A",
        description: "选择A的发展",
        meaning: "如果选择A，事情会如何发展"
      },
      {
        key: "outcome-b",
        label: "结果B",
        description: "选择B的发展",
        meaning: "如果选择B，事情会如何发展"
      }
    ],
    interpretation: {
      summary: "对比两个选择的现状和结果，帮助你做出明智的决定。",
      advice: "没有绝对正确的选择，只有更适合当下你的选择。"
    }
  },
  {
    id: "relationship",
    name: "感情关系",
    nameEn: "Relationship",
    cardCount: 5,
    icon: "❤️",
    description: "双方关系深度分析",
    usage: "适合分析感情关系中的双方状态和关系走向。",
    steps: [
      "心中想着这段关系",
      "第一张代表你在关系中的状态",
      "第二张代表对方的状态",
      "第三张代表关系的现状",
      "第四张代表关系的挑战",
      "第五张代表关系的可能发展"
    ],
    positions: [
      {
        key: "you",
        label: "你",
        description: "你在关系中的状态",
        meaning: "你对这段关系的感受和态度"
      },
      {
        key: "partner",
        label: "对方",
        description: "对方的状态",
        meaning: "对方对这段关系的感受和态度"
      },
      {
        key: "relationship",
        label: "关系",
        description: "关系的现状",
        meaning: "这段关系目前的真实状态"
      },
      {
        key: "challenge",
        label: "挑战",
        description: "关系面临的挑战",
        meaning: "这段关系需要克服的问题或障碍"
      },
      {
        key: "potential",
        label: "发展",
        description: "关系的可能发展",
        meaning: "这段关系可能的发展方向"
      }
    ],
    interpretation: {
      summary: "全面分析感情关系，看清双方状态和关系走向。",
      advice: "关系是双方的舞蹈，理解对方也是理解自己的镜子。"
    }
  }
];

// 导出牌阵数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SPREADS;
}
