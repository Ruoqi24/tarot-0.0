/**
 * TARO - 主应用逻辑
 * 实现抽牌、解牌、页面导航等核心功能
 */

// ==================== 全局状态 ====================
const AppState = {
  currentSpread: null,      // 当前选择的牌阵
  drawnCards: [],           // 已抽的牌
  remainingCards: [],       // 剩余牌堆
  currentPosition: 0,       // 当前抽牌位置
  userQuestion: '',         // 用户问题
  isDrawing: false          // 是否正在抽牌
};

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSpreads();
  setupEventListeners();
});

// ==================== 主题功能 ====================
function initTheme() {
  const savedTheme = localStorage.getItem('taro-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('taro-theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ==================== 页面导航 ====================
function showPage(pageId) {
  // 隐藏所有页面
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // 显示目标页面
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    targetPage.classList.add('fade-in');

    // 页面特定初始化
    if (pageId === 'drawPage') {
      initDrawPage();
    } else if (pageId === 'resultPage') {
      initResultPage();
    } else if (pageId === 'historyPage') {
      initHistoryPage();
    }
  }

  // 滚动到顶部
  window.scrollTo(0, 0);
}

// ==================== 牌阵选择页 ====================
function renderSpreads() {
  const grid = document.getElementById('spreadGrid');
  if (!grid) return;

  grid.innerHTML = SPREADS.map(spread => `
    <div class="spread-card" onclick="selectSpread('${spread.id}')">
      <div class="spread-icon">${spread.icon}</div>
      <h3>${spread.name}</h3>
      <span class="card-count">${spread.cardCount} 张牌</span>
      <p>${spread.description}</p>
    </div>
  `).join('');
}

function selectSpread(spreadId) {
  const spread = SPREADS.find(s => s.id === spreadId);
  if (!spread) return;

  AppState.currentSpread = spread;

  // 显示牌阵说明弹窗
  showSpreadModal(spread);
}

function showSpreadModal(spread) {
  const modal = document.getElementById('spreadModal');
  const body = document.getElementById('modalBody');

  body.innerHTML = `
    <h3>${spread.icon} ${spread.name}</h3>
    <p>${spread.usage}</p>

    <h4>使用步骤</h4>
    <ol>
      ${spread.steps.map(step => `<li>${step}</li>`).join('')}
    </ol>

    <h4>牌位说明</h4>
    <ul>
      ${spread.positions.map(pos => `
        <li><strong>${pos.label}</strong> - ${pos.description}</li>
      `).join('')}
    </ul>

    <div class="modal-actions">
      <button class="btn btn-primary" onclick="startDrawing('${spread.id}')">
        开始抽牌
      </button>
      <button class="btn btn-secondary" onclick="closeModal()">
        再看看
      </button>
    </div>
  `;

  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('spreadModal').classList.remove('active');
}

function startDrawing(spreadId) {
  closeModal();

  // 重置抽牌状态
  AppState.drawnCards = [];
  AppState.currentPosition = 0;
  AppState.userQuestion = '';

  // 初始化牌堆（洗牌）
  shuffleDeck();

  // 进入抽牌页
  showPage('drawPage');
}

// ==================== 抽牌页 ====================
function initDrawPage() {
  const spread = AppState.currentSpread;
  if (!spread) {
    showPage('spreadPage');
    return;
  }

  // 更新标题
  document.getElementById('drawSpreadName').textContent = spread.name;
  document.getElementById('drawSpreadDesc').textContent = spread.description;

  // 清空问题输入（只在第一次进入时清空）
  const questionInput = document.getElementById('userQuestion');
  if (AppState.currentPosition === 0) {
    questionInput.value = '';
  }

  // 渲染牌位槽
  renderCardSlots();

  // 高亮当前牌位
  highlightActiveSlot();

  // 更新牌堆计数
  updateDeckCount();

  // 重置牌堆动画
  const deckCard = document.getElementById('deckCard');
  deckCard.style.transform = '';
  deckCard.style.opacity = '1';
  deckCard.classList.add('glowing');
}

function renderCardSlots() {
  const slots = document.getElementById('cardSlots');
  const spread = AppState.currentSpread;

  if (!spread) return;

  slots.innerHTML = spread.positions.map((pos, index) => {
    // 检查这个位置是否已经抽过牌
    const drawnCard = AppState.drawnCards[index];

    if (drawnCard) {
      // 已抽牌，显示牌面
      const orientationText = drawnCard.orientation === 'reversed' ? '逆位' : '正位';
      const orientationClass = drawnCard.orientation === 'reversed' ? 'reversed' : '';
      const imageStyle = drawnCard.orientation === 'reversed' ? 'transform: rotate(180deg);' : '';
      return `
        <div class="card-slot" data-position="${index}">
          <div class="slot-label">${pos.label}</div>
          <div class="slot-position">${pos.description}</div>
          <div class="slot-area filled" id="slot-${index}">
            <div class="tarot-card flipped">
              <div class="card-face card-back"></div>
              <div class="card-face card-front">
                <img class="card-image" src="${drawnCard.card.image}" alt="${drawnCard.card.nameZh}" style="${imageStyle}">
                <span class="card-orientation ${orientationClass}">${orientationText}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      // 未抽牌，显示序号
      return `
        <div class="card-slot" data-position="${index}">
          <div class="slot-label">${pos.label}</div>
          <div class="slot-position">${pos.description}</div>
          <div class="slot-area" id="slot-${index}">
            ${index + 1}
          </div>
        </div>
      `;
    }
  }).join('');
}

// ==================== 洗牌与抽牌逻辑 ====================
function shuffleDeck() {
  // 复制牌库并洗牌（Fisher-Yates算法）
  AppState.remainingCards = [...TAROT_CARDS];

  for (let i = AppState.remainingCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [AppState.remainingCards[i], AppState.remainingCards[j]] =
    [AppState.remainingCards[j], AppState.remainingCards[i]];
  }
}

function drawCard() {
  // 检查是否还可以抽牌
  if (!AppState.currentSpread || AppState.currentPosition >= AppState.currentSpread.cardCount) {
    return;
  }

  // 防止重复点击
  if (AppState.isDrawing) return;
  AppState.isDrawing = true;

  // 保存用户问题
  AppState.userQuestion = document.getElementById('userQuestion').value.trim();

  // 从牌堆顶部抽一张
  if (AppState.remainingCards.length === 0) {
    shuffleDeck();
  }

  const card = AppState.remainingCards.pop();

  // 随机决定正逆位 (正位概率约70%)
  const isReversed = Math.random() > 0.7;

  // 记录抽牌结果
  const drawResult = {
    position: AppState.currentSpread.positions[AppState.currentPosition],
    card: card,
    orientation: isReversed ? 'reversed' : 'upright'
  };

  AppState.drawnCards.push(drawResult);

  // 移除牌堆发光效果（抽牌完成后）
  const deckCard = document.getElementById('deckCard');
  deckCard.classList.remove('glowing');

  // 动画效果
  animateDrawCard(card, isReversed, () => {
    // 更新牌位槽显示
    updateSlot(AppState.currentPosition, card, isReversed);

    // 移动到下一个位置
    AppState.currentPosition++;

    // 更新牌堆计数
    updateDeckCount();

    // 更新高亮
    highlightActiveSlot();

    // 检查是否抽完
    if (AppState.currentPosition >= AppState.currentSpread.cardCount) {
      setTimeout(() => {
        showPage('resultPage');
      }, 1000);
    } else {
      // 恢复牌堆发光效果
      deckCard.classList.add('glowing');
    }

    AppState.isDrawing = false;
  });
}

function animateDrawCard(card, isReversed, callback) {
  const deckCard = document.getElementById('deckCard');
  const slotIndex = AppState.currentPosition;
  const slotElement = document.getElementById(`slot-${slotIndex}`);

  // 简单的抽牌动画
  deckCard.style.transform = 'translateY(-20px) scale(0.95)';
  deckCard.style.opacity = '0.8';

  setTimeout(() => {
    deckCard.style.transform = '';
    deckCard.style.opacity = '1';
    if (callback) callback();
  }, 300);
}

function updateSlot(index, card, isReversed) {
  const slot = document.getElementById(`slot-${index}`);
  const orientationText = isReversed ? '逆位' : '正位';
  const orientationClass = isReversed ? 'reversed' : '';

  slot.classList.add('filled');
  const imageStyle = isReversed ? 'transform: rotate(180deg);' : '';
  slot.innerHTML = `
    <div class="tarot-card flipped">
      <div class="card-face card-back"></div>
      <div class="card-face card-front">
        <img class="card-image" src="${card.image}" alt="${card.nameZh}" style="${imageStyle}">
        <span class="card-orientation ${orientationClass}">${orientationText}</span>
      </div>
    </div>
  `;
}

function updateDeckCount() {
  const count = AppState.remainingCards.length;
  document.getElementById('deckCount').textContent = `剩余 ${count} 张`;
}

// ==================== 解牌页 ====================
function initResultPage() {
  const spread = AppState.currentSpread;
  const results = AppState.drawnCards;

  if (!spread || results.length === 0) {
    showPage('spreadPage');
    return;
  }

  // 显示用户问题
  const questionEl = document.getElementById('resultQuestion');
  if (AppState.userQuestion) {
    questionEl.textContent = `问：${AppState.userQuestion}`;
    questionEl.style.display = 'block';
  } else {
    questionEl.style.display = 'none';
  }

  // 显示牌阵名称
  document.getElementById('resultSpreadName').textContent = `${spread.name} · ${spread.icon}`;

  // 显示整体概览
  document.getElementById('resultOverview').textContent = spread.interpretation.summary;

  // 渲染每张牌的解释
  renderCardInterpretations();

  // 生成整体分析
  generateOverallAnalysis();

  // 显示建议
  document.getElementById('actionAdvice').textContent = spread.interpretation.advice;
}

function renderCardInterpretations() {
  const container = document.getElementById('resultCards');

  container.innerHTML = AppState.drawnCards.map((result, index) => {
    const { position, card, orientation } = result;
    const isReversed = orientation === 'reversed';
    const meaning = isReversed ? card.reversed : card.upright;
    const miniImageStyle = isReversed ? 'transform: rotate(180deg);' : '';

    return `
      <div class="result-card-item">
        <div class="result-card-header">
          <div class="result-card-mini ${isReversed ? 'reversed' : ''}">
            <img class="mini-image" src="${card.image}" alt="${card.nameZh}" style="${miniImageStyle}">
          </div>
          <div class="result-card-info">
            <h4>${card.nameZh} · ${card.nameEn}</h4>
            <span class="position-label">${position.label} · ${position.description}</span>
          </div>
        </div>
        <div class="result-card-content">
          <h5>${meaning.title}</h5>
          <p>${meaning.meaning}</p>
          <div class="card-advice">
            <strong>给你的指引：</strong>${meaning.advice}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function generateOverallAnalysis() {
  const spread = AppState.currentSpread;
  const results = AppState.drawnCards;

  // 统计正逆位
  const uprightCount = results.filter(r => r.orientation === 'upright').length;
  const reversedCount = results.length - uprightCount;

  // 统计牌面元素（简化版）
  const hasMajorArcana = results.some(r => r.card.arcana === 'major');

  // 生成分析文本
  let analysis = `<p><strong>牌面概况：</strong>你抽到了 ${results.length} 张牌，`;
  analysis += `其中 <strong>${uprightCount}</strong> 张正位`;
  if (reversedCount > 0) {
    analysis += `，<strong>${reversedCount}</strong> 张逆位`;
  }
  analysis += '。</p>';

  // 根据正逆位比例给出分析
  if (reversedCount === 0) {
    analysis += `<p>所有牌均为正位，显示能量流动顺畅，当前是一个有利于行动和发展的时期。</p>`;
  } else if (reversedCount === results.length) {
    analysis += `<p>牌面显示你可能正处于一个需要反思和调整的阶段。逆位并非坏事，它们指出了需要关注的内在领域。</p>`;
  } else {
    analysis += `<p>正位与逆位并存，显示你正处于一个能量转换的过渡期。既有顺利发展的领域，也有需要调整的方向。</p>`;
  }

  // 根据牌阵类型添加特定分析
  analysis += generateSpreadSpecificAnalysis();

  // 牌与牌之间的联系
  analysis += `<p><strong>牌面联系：</strong>${generateCardConnections()}</p>`;

  document.getElementById('overallAnalysis').innerHTML = analysis;
}

function generateSpreadSpecificAnalysis() {
  const spread = AppState.currentSpread;
  const results = AppState.drawnCards;

  let analysis = '';

  switch (spread.id) {
    case 'three-card':
      const [past, present, future] = results;
      analysis = `<p><strong>时间之流：</strong>从${past.card.nameZh}（过去）到${present.card.nameZh}（现在），再到${future.card.nameZh}（未来），`;

      // 检查趋势
      const pastIsPositive = isPositiveCard(past.card, past.orientation);
      const presentIsPositive = isPositiveCard(present.card, present.orientation);
      const futureIsPositive = isPositiveCard(future.card, future.orientation);

      if (!pastIsPositive && presentIsPositive && futureIsPositive) {
        analysis += '显示你正在从过去的困境中走出来，未来充满希望。</p>';
      } else if (pastIsPositive && !presentIsPositive && futureIsPositive) {
        analysis += '显示你现在可能遇到一些挑战，但未来会好转。</p>';
      } else if (pastIsPositive && presentIsPositive && !futureIsPositive) {
        analysis += '提醒你在顺境时也要为未来可能的挑战做准备。</p>';
      } else {
        analysis += '显示能量在时间线上的流动和变化。</p>';
      }
      break;

    case 'choice':
      const choiceA = results.find(r => r.position.key === 'choice-a');
      const choiceB = results.find(r => r.position.key === 'choice-b');
      const outcomeA = results.find(r => r.position.key === 'outcome-a');
      const outcomeB = results.find(r => r.position.key === 'outcome-b');

      if (choiceA && choiceB && outcomeA && outcomeB) {
        const outcomeABetter = isPositiveCard(outcomeA.card, outcomeA.orientation);
        const outcomeBBetter = isPositiveCard(outcomeB.card, outcomeB.orientation);

        if (outcomeABetter && !outcomeBBetter) {
          analysis += `<p><strong>选择分析：</strong>从牌面来看，选择A的路径似乎更有利。但请记住，塔罗只显示趋势，最终决定权在你。</p>`;
        } else if (!outcomeABetter && outcomeBBetter) {
          analysis += `<p><strong>选择分析：</strong>从牌面来看，选择B的路径似乎更有利。但请记住，塔罗只显示趋势，最终决定权在你。</p>`;
        } else {
          analysis += `<p><strong>选择分析：</strong>两条路各有优劣，关键在于你内心的真实渴望。</p>`;
        }
      }
      break;

    case 'relationship':
      const you = results.find(r => r.position.key === 'you');
      const partner = results.find(r => r.position.key === 'partner');
      const relationship = results.find(r => r.position.key === 'relationship');

      if (you && partner && relationship) {
        analysis += `<p><strong>关系动态：</strong>你和对方的状态${you.orientation === partner.orientation ? '较为同步' : '有所不同'}，`;
        analysis += `这段关系目前${isPositiveCard(relationship.card, relationship.orientation) ? '整体积极' : '面临挑战'}。</p>`;
      }
      break;

    default:
      analysis += `<p>单张牌为你当下的状况提供了直接的指引。</p>`;
  }

  return analysis;
}

function isPositiveCard(card, orientation) {
  // 简化判断：正位通常更积极，逆位更消极（但不是绝对）
  const positiveCards = ['the-sun', 'the-star', 'the-world', 'the-fool', 'the-magician',
                        'the-empress', 'the-lovers', 'the-chariot', 'strength', 'wheel-of-fortune'];

  if (orientation === 'reversed') {
    return positiveCards.includes(card.id) ? false : true; // 逆位时，正面牌变负面
  }

  return positiveCards.includes(card.id);
}

function generateCardConnections() {
  const results = AppState.drawnCards;

  if (results.length < 2) {
    return '单张牌聚焦于当下最需要的讯息。';
  }

  // 寻找关键词关联
  const allKeywords = results.flatMap(r => r.card.keywords);
  const uniqueKeywords = [...new Set(allKeywords)];

  if (uniqueKeywords.length > 0) {
    return `这组牌的共同主题是：${uniqueKeywords.slice(0, 3).join('、')}。这些元素在你的问题中都有重要意义。`;
  }

  return '牌与牌之间形成了独特的能量场，共同回答你的问题。';
}

// ==================== 保存结果 ====================
function saveResult() {
  const result = {
    date: new Date().toISOString(),
    spread: AppState.currentSpread,
    question: AppState.userQuestion,
    cards: AppState.drawnCards
  };

  // 从localStorage获取历史记录
  let history = JSON.parse(localStorage.getItem('taro-history') || '[]');
  history.push(result);

  // 最多保存20条记录
  if (history.length > 20) {
    history = history.slice(-20);
  }

  localStorage.setItem('taro-history', JSON.stringify(history));

  alert('结果已保存到历史记录！');
}

// ==================== 关于页面 ====================
function showAbout() {
  alert(`TARO - 塔罗牌抽卡与解读

这是一个简约风格的塔罗牌网页应用，帮助你：
• 选择不同常用牌阵
• 获得牌阵的使用说明
• 通过点击完成抽牌
• 自动生成单牌解析与整体牌阵分析
• 在明暗主题间自由切换

牌库包含22张大阿卡那牌，每张牌都有详细的正逆位解释。

⚠️ 仅供娱乐参考，人生的选择永远在你手中。`);
}

// ==================== 事件监听 ====================
function setupEventListeners() {
  // 主题切换
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // 键盘事件（ESC关闭弹窗）
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // 点击弹窗外部关闭
  document.getElementById('spreadModal').addEventListener('click', (e) => {
    if (e.target.id === 'spreadModal') {
      closeModal();
    }
  });
}

// ==================== Phase 2: 动画优化 ====================

// 洗牌动画
function playShuffleAnimation() {
  const deckCard = document.getElementById('deckCard');
  deckCard.classList.add('shuffling');

  return new Promise(resolve => {
    setTimeout(() => {
      deckCard.classList.remove('shuffling');
      resolve();
    }, 1500);
  });
}

// 创建粒子效果
function createParticles(x, y) {
  const colors = ['#d4af37', '#f5f5f5', '#b8b8d1'];

  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    const angle = (Math.PI * 2 * i) / 8;
    const distance = 50 + Math.random() * 50;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    particle.style.setProperty('--tx', tx + 'px');
    particle.style.setProperty('--ty', ty + 'px');

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

// 增强的抽牌动画
function animateDrawCard(card, isReversed, callback) {
  const deckCard = document.getElementById('deckCard');
  const slotIndex = AppState.currentPosition;
  const slotElement = document.getElementById(`slot-${slotIndex}`);

  // 创建飞入动画
  deckCard.style.transform = 'translateY(-30px) scale(0.9)';

  // 创建粒子效果
  const rect = deckCard.getBoundingClientRect();
  createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2);

  setTimeout(() => {
    deckCard.style.transform = '';
    if (callback) callback();
  }, 400);
}

// 高亮当前牌位
function highlightActiveSlot() {
  const spread = AppState.currentSpread;
  if (!spread) return;

  document.querySelectorAll('.slot-area').forEach((slot, index) => {
    // 只有未抽牌的位置且是当前位置才高亮
    const shouldHighlight = index === AppState.currentPosition &&
                           index < spread.cardCount &&
                           !AppState.drawnCards[index];
    slot.classList.toggle('active', shouldHighlight);
  });
}

// ==================== Phase 2: 历史记录功能 ====================

// 初始化历史记录页面
function initHistoryPage() {
  renderHistoryStats();
  renderHistoryList();
}

// 渲染统计信息
function renderHistoryStats() {
  const history = JSON.parse(localStorage.getItem('taro-history') || '[]');
  const statsContainer = document.getElementById('historyStats');

  if (history.length === 0) {
    statsContainer.innerHTML = '';
    return;
  }

  // 计算统计数据
  const totalReadings = history.length;
  const uniqueSpreads = [...new Set(history.map(h => h.spread.id))].length;
  const reversedCount = history.reduce((acc, h) =>
    acc + h.cards.filter(c => c.orientation === 'reversed').length, 0);
  const totalCards = history.reduce((acc, h) => acc + h.cards.length, 0);
  const reversedRate = Math.round((reversedCount / totalCards) * 100);

  statsContainer.innerHTML = `
    <div class="stat-card">
      <div class="stat-value">${totalReadings}</div>
      <div class="stat-label">总占卜次数</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${uniqueSpreads}</div>
      <div class="stat-label">使用牌阵</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${totalCards}</div>
      <div class="stat-label">抽牌总数</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${reversedRate}%</div>
      <div class="stat-label">逆位比例</div>
    </div>
  `;
}

// 渲染历史记录列表
function renderHistoryList() {
  const history = JSON.parse(localStorage.getItem('taro-history') || '[]');
  const listContainer = document.getElementById('historyList');

  if (history.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔮</div>
        <h3>还没有占卜记录</h3>
        <p>开始你的第一次塔罗之旅吧</p>
        <button class="btn btn-primary" onclick="showPage('spreadPage')">
          ✨ 开始占卜
        </button>
      </div>
    `;
    return;
  }

  // 按时间倒序排列
  const sortedHistory = [...history].reverse();

  listContainer.innerHTML = sortedHistory.map((record, index) => {
    const date = new Date(record.date);
    const dateStr = `${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
    const actualIndex = history.length - 1 - index;

    return `
      <div class="history-item" onclick="viewHistoryItem(${actualIndex})">
        <div class="history-item-header">
          <div class="history-item-title">
            <span class="history-item-spread">${record.spread.icon} ${record.spread.name}</span>
          </div>
          <span class="history-item-date">📅 ${dateStr}</span>
        </div>

        ${record.question ? `<div class="history-item-question">${record.question}</div>` : ''}

        <div class="history-item-cards">
          ${record.cards.map(c => `
            <span class="history-card-tag ${c.orientation}">
              ${c.card.nameZh} ${c.orientation === 'reversed' ? '↓' : '↑'}
            </span>
          `).join('')}
        </div>

        <div class="history-item-actions" onclick="event.stopPropagation()">
          <button class="history-item-btn" onclick="deleteHistoryItem(${actualIndex})" title="删除记录">
            🗑️
          </button>
        </div>
      </div>
    `;
  }).join('') + `
    <div style="text-align: center; margin-top: 2rem;">
      <button class="clear-history-btn" onclick="clearAllHistory()">
        🗑️ 清空所有记录
      </button>
    </div>
  `;
}

// 查看历史记录详情
function viewHistoryItem(index) {
  const history = JSON.parse(localStorage.getItem('taro-history') || '[]');
  const record = history[index];

  if (!record) return;

  // 恢复到当前状态
  AppState.currentSpread = record.spread;
  AppState.drawnCards = record.cards;
  AppState.userQuestion = record.question;
  AppState.currentPosition = record.cards.length;

  // 显示结果页
  showPage('resultPage');
}

// 删除单条历史记录
function deleteHistoryItem(index) {
  if (!confirm('确定要删除这条记录吗？')) return;

  let history = JSON.parse(localStorage.getItem('taro-history') || '[]');
  history.splice(index, 1);
  localStorage.setItem('taro-history', JSON.stringify(history));

  renderHistoryStats();
  renderHistoryList();
  showToast('记录已删除', 'success');
}

// 清空所有历史记录
function clearAllHistory() {
  if (!confirm('确定要清空所有历史记录吗？此操作不可恢复。')) return;

  localStorage.removeItem('taro-history');
  renderHistoryStats();
  renderHistoryList();
  showToast('所有记录已清空', 'success');
}

// ==================== Phase 2: 分享功能 ====================

// 分享结果
function shareResult() {
  const spread = AppState.currentSpread;
  const results = AppState.drawnCards;

  if (!spread || results.length === 0) {
    showToast('没有可分享的结果', 'error');
    return;
  }

  // 构建分享文本
  let shareText = `🔮 TARO塔罗牌占卜结果\n\n`;
  shareText += `牌阵：${spread.name}\n`;

  if (AppState.userQuestion) {
    shareText += `问题：${AppState.userQuestion}\n`;
  }

  shareText += `\n📜 抽牌结果：\n`;

  results.forEach((result, index) => {
    const orientation = result.orientation === 'reversed' ? '逆位' : '正位';
    shareText += `${index + 1}. ${result.position.label} - ${result.card.nameZh} (${orientation})\n`;
  });

  shareText += `\n💫 ${spread.interpretation.advice}\n\n`;
  shareText += `#塔罗牌 #TARO`;

  // 尝试使用原生分享API
  if (navigator.share) {
    navigator.share({
      title: '我的塔罗牌占卜结果',
      text: shareText
    }).catch(() => {
      // 用户取消，不做处理
    });
  } else {
    // 复制到剪贴板
    copyToClipboard(shareText);
  }
}

// 复制到剪贴板
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('结果已复制到剪贴板！', 'success');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

// 备用复制方法
function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    showToast('结果已复制到剪贴板！', 'success');
  } catch (err) {
    showToast('复制失败，请手动复制', 'error');
  }

  document.body.removeChild(textarea);
}

// ==================== Phase 4: AI智能解读 ====================

// AI配置状态
const AiState = {
  config: {
    model: 'simulated',
    apiKey: '',
    style: 'mystic',
    detail: 'normal'
  },
  isGenerating: false
};

// 加载AI配置
function loadAiConfig() {
  const saved = localStorage.getItem('taro-ai-config');
  if (saved) {
    AiState.config = JSON.parse(saved);
  }
}

// 打开AI配置模态框
function openAiConfig() {
  loadAiConfig();
  document.getElementById('aiModel').value = AiState.config.model;
  document.getElementById('aiStyle').value = AiState.config.style;
  document.getElementById('aiDetail').value = AiState.config.detail;
  document.getElementById('apiKey').value = AiState.config.apiKey || '';

  // 根据模型显示/隐藏API密钥输入
  toggleApiKeyInput();

  document.getElementById('aiConfigModal').classList.add('active');
}

// 关闭AI配置模态框
function closeAiConfig() {
  document.getElementById('aiConfigModal').classList.remove('active');
}

// 切换API密钥输入框显示
function toggleApiKeyInput() {
  const model = document.getElementById('aiModel').value;
  const apiKeyGroup = document.getElementById('apiKeyGroup');
  apiKeyGroup.style.display = model === 'simulated' ? 'none' : 'block';
}

// 监听模型选择变化
document.addEventListener('DOMContentLoaded', () => {
  const modelSelect = document.getElementById('aiModel');
  if (modelSelect) {
    modelSelect.addEventListener('change', toggleApiKeyInput);
  }
});

// 保存AI配置
function saveAiConfig() {
  AiState.config = {
    model: document.getElementById('aiModel').value,
    apiKey: document.getElementById('apiKey').value,
    style: document.getElementById('aiStyle').value,
    detail: document.getElementById('aiDetail').value
  };
  localStorage.setItem('taro-ai-config', JSON.stringify(AiState.config));
  closeAiConfig();
  showToast('AI配置已保存', 'success');
}

// 打开AI解读
function openAiReading() {
  const spread = AppState.currentSpread;
  const results = AppState.drawnCards;

  if (!spread || results.length === 0) {
    showToast('请先完成抽牌', 'error');
    return;
  }

  // 重置模态框状态
  document.getElementById('aiLoading').style.display = 'block';
  document.getElementById('aiResult').style.display = 'none';
  document.getElementById('aiReadingModal').classList.add('active');

  // 开始生成解读
  generateAiReading();
}

// 关闭AI解读
function closeAiReading() {
  document.getElementById('aiReadingModal').classList.remove('active');
}

// 生成AI解读
async function generateAiReading() {
  if (AiState.isGenerating) return;
  AiState.isGenerating = true;

  const startTime = Date.now();
  const spread = AppState.currentSpread;
  const results = AppState.drawnCards;
  const question = AppState.userQuestion;

  // 更新加载状态
  updateAiLoading('分析牌阵结构中...', 20);

  try {
    // 构建提示词
    const prompt = buildAiPrompt(spread, results, question);

    updateAiLoading('解读牌意中...', 50);

    let reading;
    if (AiState.config.model === 'simulated') {
      // 模拟AI生成
      reading = await simulateAiReading(prompt);
    } else {
      // 真实AI调用（需要实现）
      reading = await callRealAi(prompt);
    }

    updateAiLoading('生成建议中...', 90);

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);

    // 显示结果
    setTimeout(() => {
      displayAiReading(reading, duration);
    }, 500);

  } catch (error) {
    console.error('AI解读失败:', error);
    displayAiReading('抱歉，AI解读暂时无法使用。请稍后重试或使用规则解读。', '0.0');
  } finally {
    AiState.isGenerating = false;
  }
}

// 构建AI提示词
function buildAiPrompt(spread, results, question) {
  const styleDescriptions = {
    mystic: '你是一位神秘学大师，用深邃、富有哲理的语言解读塔罗牌',
    warm: '你是一位温暖的心理咨询师，用亲切、治愈的语言给予指引',
    direct: '你是一位直率的预言者，用简洁、有力的语言直击要害',
    poetic: '你是一位浪漫的诗人，用优美、富有画面感的语言描绘命运'
  };

  const detailLevels = {
    brief: '请用100字以内简洁回答',
    normal: '请用200-300字详细解读',
    detailed: '请用500字以上深度分析'
  };

  const style = styleDescriptions[AiState.config.style] || styleDescriptions.mystic;
  const detail = detailLevels[AiState.config.detail] || detailLevels.normal;

  let cardsInfo = results.map((r, i) => {
    const orientation = r.orientation === 'reversed' ? '逆位' : '正位';
    const meaning = r.orientation === 'reversed' ? r.card.reversed : r.card.upright;
    return `${i + 1}. ${r.position.label}: ${r.card.nameZh}(${orientation}) - ${meaning.title}`;
  }).join('\n');

  const questionPart = question ? `\n用户问题："${question}"` : '';

  return `${style}。

牌阵：${spread.name}
${questionPart}

抽到的牌：
${cardsInfo}

${detail}，请包含以下内容：
1. 牌面整体能量的感受
2. 每张牌在这个位置的深层含义
3. 牌与牌之间的联系和故事
4. 给用户具体的行动建议
5. 一句鼓励或提醒的话`;
}

// 模拟AI生成
async function simulateAiReading(prompt) {
  // 模拟延迟
  await new Promise(resolve => setTimeout(resolve, 2000));

  const spread = AppState.currentSpread;
  const results = AppState.drawnCards;
  const style = AiState.config.style;

  // 根据风格和牌阵生成模拟解读
  return generateSimulatedReading(spread, results, style);
}

// 生成模拟解读内容
function generateSimulatedReading(spread, results, style) {
  const cardNames = results.map(r => r.card.nameZh).join('、');
  const hasReversed = results.some(r => r.orientation === 'reversed');

  const templates = {
    mystic: `在${spread.name}的镜影中，我看见命运编织的丝线正悄然颤动。

${cardNames}——这组牌阵如同夜空中的星座，诉说着一个关于转变与觉醒的故事。${hasReversed ? '逆位的出现不是阻碍，而是宇宙邀请你向内探索的讯号。' : '全正位的格局显示能量流动顺畅，此刻正是行动的黄金时机。'}

牌面揭示的核心讯息是：你正处于一个关键的能量转折点。过去的积累即将开花结果，但需要你保持内心的清明与觉知。不要急于追求外在的成就，先倾听灵魂深处的声音。

建议你在这个月内进行更多的冥想或独处，让潜意识中的智慧自然浮现。当你与内在的自性和解时，外在世界也会以奇妙的方式回应你。

记住：塔罗从不是命运的枷锁，而是照亮前行之路的星辰。愿你在迷雾中找到属于自己的光芒。✨`,

    warm: `亲爱的，${spread.name}带给你温柔的拥抱。

看到${cardNames}这组牌，我感受到一种深深的被爱与支持的能量环绕着你。${hasReversed ? '即使有些牌是逆位，也请相信这是生命在温柔地提醒你照顾自己。' : '所有牌都是正位，这是多么美好的祝福啊！'}

你最近可能感到有些疲惫或迷茫，但请相信，你比自己想象的要强大得多。这组牌告诉我，你已经拥有了应对当下挑战的所有内在资源。

我想对你说：请对自己温柔一点。就像对待最好的朋友那样对待自己。允许自己休息，允许自己不完美，允许自己慢慢来。

接下来的日子里，试着每天给自己一点小确幸——一杯喜欢的茶、一段安静的时间、或者只是深深地呼吸。

你值得被温柔以待，尤其是被自己。💝`,

    direct: `${spread.name}的核心讯息：

${cardNames}——这组牌没有废话，直接告诉你：${hasReversed ? '你现在在逃避一些东西，是时候面对了。' : '时机已到，别再犹豫，直接行动。'}

牌面显示的问题很清楚：你想太多了，做得太少。你一直在等待"完美时机"，但完美时机就是现在。

我的建议：
1. 今天就迈出第一步，哪怕是很小的一步
2. 停止向他人寻求认同，相信自己的判断
3. 接受可能的失败，但不要因为害怕失败而不敢开始

你不是没有能力，你只是被自己的恐惧困住了。

打破它。现在。⚡`,

    poetic: `在${spread.name}铺陈的丝绒上，
${cardNames}如星辰般依次点亮。

${hasReversed ? '有逆位的星辰低垂，' : '星光都向着正位流淌，'}
仿佛在诉说着一个古老而常新的故事——
关于失去与重逢，关于沉睡与苏醒。

你问我命运将往何方？
看这些牌面交织的光：
它们在低语，在歌唱，
在说每一个结束都是新的序章。

且让心灵如纸牌般轻盈，
在风中旋转，却不迷失方向。
因为你本就是光，
只是暂时忘记了如何发亮。

去吧，带着这份古老的祝福，
去书写属于你的诗行。

所有的星辰都在为你导航。🌟`
  };

  return templates[style] || templates.mystic;
}

// 调用真实AI（占位符）
async function callRealAi(prompt) {
  // 这里可以实现真实的AI API调用
  // 例如 OpenAI、Claude、Kimi 等
  throw new Error('真实AI功能需要配置API密钥');
}

// 更新加载状态
function updateAiLoading(text, progress) {
  document.getElementById('aiLoadingDetail').textContent = text;
  // 可以在这里添加进度条动画
}

// 显示AI解读结果
function displayAiReading(reading, duration) {
  document.getElementById('aiLoading').style.display = 'none';
  document.getElementById('aiResult').style.display = 'block';

  const styleNames = {
    mystic: '神秘学者',
    warm: '温暖治愈',
    direct: '直接果断',
    poetic: '诗意浪漫'
  };

  document.getElementById('aiStyleBadge').textContent = styleNames[AiState.config.style] || '神秘学者';
  document.getElementById('aiReadingTime').textContent = `耗时 ${duration}s`;
  document.getElementById('aiResultContent').textContent = reading;
}

// 重新生成解读
function regenerateAiReading() {
  document.getElementById('aiLoading').style.display = 'block';
  document.getElementById('aiResult').style.display = 'none';
  generateAiReading();
}

// 复制AI解读
function copyAiReading() {
  const reading = document.getElementById('aiResultContent').textContent;
  copyToClipboard(reading);
}

// ==================== Phase 2: Toast提示 ====================

// 显示Toast提示
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// 重写保存结果函数
function saveResult() {
  const result = {
    date: new Date().toISOString(),
    spread: AppState.currentSpread,
    question: AppState.userQuestion,
    cards: AppState.drawnCards
  };

  let history = JSON.parse(localStorage.getItem('taro-history') || '[]');
  history.push(result);

  if (history.length > 20) {
    history = history.slice(-20);
  }

  localStorage.setItem('taro-history', JSON.stringify(history));
  showToast('结果已保存到历史记录！', 'success');
}

// ==================== 控制台彩蛋 ====================
console.log('%c🔮 TARO 塔罗牌抽卡', 'font-size: 24px; font-weight: bold; color: #d4af37;');
console.log('%c在牌卡的镜像中，看见内心的指引', 'font-size: 14px; color: #666;');
console.log('%c✨ 韦斯特风格 | 🧠 AI智能解读 | 📜 历史记录 - 全部完成!', 'font-size: 12px; color: #27ae60;');
