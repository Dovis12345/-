const nodeOrder = ['residence', 'old-houses', 'old-wharf', 'archway', 'banyan', 'temple', 'community'];
const memory = {
  residence: {
    index: '01', title: '传统民居', kicker: '01 / 空间记忆', location: '传统民居 · 门内门外', themes: ['空间记忆', '生活记忆', '情感态度'],
    deck: '青砖、镬耳、天井和趟栊门，把老广府的生活尺度留在一进一出的门槛之间。',
    quote: '“旧时泮塘民居都是典型青砖镬耳屋，雨天雨水落天井，是老广府民居独有的景观。”',
    source: '原住民老人 · 访谈编码 03', question: '以前您住的老房子是青砖镬耳屋，可以说说老房子天井下雨是什么体验吗？',
    image: 'assets/art/traditional-residence.jpg', art: 'assets/art/traditional-residence.jpg', artTitle: '门的尺度', audio: 'assets/audio/03-blue-brick-rain.m4a', audioLabel: '青砖屋下雨时'
  },
  'old-houses': {
    index: '02', title: '古巷老宅群', kicker: '02 / 生活记忆', location: '五约直街 · 巷里有光', themes: ['空间记忆', '生活记忆'],
    deck: '一扇趟栊门打开通风与交往，也保留着老屋内部的安静和分寸。',
    quote: '“以前家家户户都有趟栊门，白天开门通风透光，私密性强。”',
    source: '原住民老人 · 访谈编码 04', question: '以前家家户户的趟栊门，在日常生活里起到什么样的作用？',
    image: 'assets/art/house-character.jpg', art: 'assets/art/house-character.jpg', artTitle: '进来坐', audio: 'assets/audio/04-tanglong-door.m4a', audioLabel: '趟栊门作用'
  },
  'old-wharf': {
    index: '03', title: '泮塘旧码头', kicker: '03 / 生活记忆', location: '泮塘涌边 · 水岸童年', themes: ['空间记忆', '生活记忆', '民俗记忆'],
    deck: '水岸曾经是孩子的游乐场，也是龙舟、五秀和邻里往来的生活边界。',
    quote: '“儿时伙伴常在泮塘河涌边玩耍，摸鱼戏水，是一代代泮塘孩子的童年记忆。”',
    source: '中年原住民 · 访谈编码 17', question: '小时候会到泮塘河涌边玩耍吗，河涌边留给您什么童年回忆？',
    image: 'assets/art/old-wharf.jpg', art: 'assets/art/water-five-crops-1.jpg', artTitle: '水畔生长', audio: 'assets/audio/17-river-childhood.m4a', audioLabel: '河边游戏童年回忆'
  },
  archway: {
    index: '04', title: '泮塘牌坊', kicker: '04 / 情感态度', location: '牌坊入口 · 老城底色', themes: ['空间记忆', '民俗记忆', '情感态度'],
    deck: '牌坊是一道入口，也是记忆的门框：走出去是城市，走回来仍然是泮塘。',
    quote: '“长大后才明白，这些老街巷、老建筑，才是广州最珍贵的老城底色。”',
    source: '中年原住民 · 访谈编码 23', question: '回想年少时期简陋老旧街巷，什么时候您才读懂老街巷的珍贵？',
    image: 'assets/art/archway.jpg', art: 'assets/art/archway.jpg', artTitle: '入口与回望', audio: 'assets/audio/23-old-lane-value.m4a', audioLabel: '老街巷的珍贵'
  },
  banyan: {
    index: '05', title: '千年古榕', kicker: '05 / 空间记忆', location: '榕树广场 · 一棵树的乡愁', themes: ['空间记忆', '生活记忆', '情感态度', '民俗记忆'],
    deck: '一棵树把几代人的下午叠在同一片树荫下，成为街巷里不动的时间坐标。',
    quote: '“家门口的大榕树，是整条街巷的中心。”',
    source: '原住民老人 · 访谈编码 02 / 22', question: '家门口这棵大榕树在这里很多年，过去街坊们会在树下做些什么？',
    image: 'assets/art/banyan.jpg', art: 'assets/art/banyan-study.jpg', artTitle: '一棵树的乡愁', audio: 'assets/audio/02-banyan-square.m4a', audioLabel: '榕树下活动'
  },
  temple: {
    index: '06', title: '三官古庙', kicker: '06 / 民俗记忆', location: '古庙周边 · 节庆与祈愿', themes: ['民俗记忆', '情感态度'],
    deck: '庙会、供品、戏台和巡游，把共同体的节庆写进街巷的声音里。',
    quote: '“每年北帝诞，仁威庙周边会搭戏台、摆供品、办庙会，戏曲演出接连不断。”',
    source: '原住民老人 · 访谈编码 08', question: '过去仁威庙的北帝诞庙会，街坊们一般都会举办哪些活动？',
    image: 'assets/art/temple.jpg', art: 'assets/art/temple.jpg', artTitle: '庙会的回声', audio: 'assets/audio/08-renwei-temple.m4a', audioLabel: '仁威庙举办的活动'
  },
  community: {
    index: '07', title: '社区居委会', kicker: '07 / 情感态度', location: '祠堂广场 · 共同记忆', themes: ['生活记忆', '情感态度'],
    deck: '记忆不是一个人的收藏。社区让采访、整理和回望成为共同完成的事。',
    quote: '“现在有大学生团队记录老街故事，让沉淀多年的泮塘老故事被看见、被传承。”',
    source: '原住民老人 · 访谈编码 24', question: '看到现在大学生来记录老街故事、保护街区文化，您内心感受如何？',
    image: 'assets/art/community.jpg', art: 'assets/art/installation-banyan.jpg', artTitle: '榕下留声', audio: 'assets/audio/24-student-feeling.m4a', audioLabel: '学生访谈时内心感受'
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return '--:--';
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
};

const drawer = $('[data-drawer]');
const drawerPanel = $('.drawer-panel', drawer);
const audio = $('[data-audio]', drawer);
const introModal = $('[data-intro-modal]');
const artModal = $('[data-art-modal]');
let activeNode = 'banyan';
let lastFocused = null;

function setDrawerContent(nodeId) {
  const item = memory[nodeId];
  if (!item) return;
  activeNode = nodeId;
  $('[data-drawer-kicker]').textContent = item.kicker;
  $('[data-drawer-index]').textContent = item.index;
  const image = $('[data-drawer-image]');
  image.src = item.image;
  image.alt = `${item.title}艺术插画`;
  $('[data-drawer-location]').textContent = item.location;
  $('[data-drawer-themes]').textContent = item.themes.join(' · ');
  $('[data-drawer-title]').textContent = item.title;
  $('[data-drawer-deck]').textContent = item.deck;
  $('[data-drawer-quote]').textContent = item.quote;
  $('[data-drawer-source]').textContent = item.source;
  $('[data-drawer-question]').textContent = item.question;
  $('[data-drawer-codes]').textContent = item.themes.join(' / ');
  const art = $('[data-drawer-art]');
  art.src = item.art;
  art.alt = `${item.title}艺术转译作品`;
  $('[data-drawer-art-title]').textContent = item.artTitle;
  audio.src = item.audio;
  audio.load();
  $('[data-audio-current]').textContent = '00:00';
  $('[data-audio-total]').textContent = '--:--';
  $('[data-audio-duration]').textContent = item.audioLabel;
  $('[data-audio-progress]').value = '0';
  $('[data-audio-play]').textContent = '▶';
  $$('.map-node').forEach((node) => node.classList.toggle('is-selected', node.dataset.node === nodeId));
  const preview = $('.map-preview');
  if (preview) {
    $('.preview-kicker', preview).textContent = `当前点位 / ${item.index}`;
    const previewImage = $('.preview-image-wrap img', preview);
    previewImage.src = item.image;
    previewImage.alt = `${item.title}艺术插画`;
    $('.preview-meta span:first-child', preview).textContent = item.location;
    $('.preview-meta span:last-child', preview).textContent = item.themes.slice(0, 2).join(' / ');
    $('h3', preview).textContent = item.title;
    $('blockquote', preview).textContent = item.quote;
  }
}

function openDrawer(nodeId = activeNode, trigger = null) {
  setDrawerContent(nodeId);
  lastFocused = trigger || document.activeElement;
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-locked');
  requestAnimationFrame(() => $('.drawer-close', drawer).focus());
}
function closeDrawer() {
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-locked');
  if (audio && !audio.paused) audio.pause();
  $('[data-audio-play]').textContent = '▶';
  if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
}

$$('[data-node]').forEach((node) => node.addEventListener('click', (event) => {
  event.preventDefault();
  openDrawer(node.dataset.node, node);
}));
$$('[data-open-node]').forEach((button) => button.addEventListener('click', () => openDrawer(button.dataset.openNode, button)));
$$('[data-close-drawer]').forEach((button) => button.addEventListener('click', closeDrawer));
$('[data-prev-node]').addEventListener('click', () => openDrawer(nodeOrder[(nodeOrder.indexOf(activeNode) + nodeOrder.length - 1) % nodeOrder.length]));
$('[data-next-node]').addEventListener('click', () => openDrawer(nodeOrder[(nodeOrder.indexOf(activeNode) + 1) % nodeOrder.length]));

$('[data-audio-play]').addEventListener('click', async () => {
  if (!audio.src) return;
  if (audio.paused) {
    try { await audio.play(); } catch (error) { console.warn('音频需要用户再次点击才能播放', error); }
  } else audio.pause();
});
audio.addEventListener('play', () => {
  $('[data-audio-play]').textContent = 'Ⅱ';
  const player = $('[data-global-player]');
  player.classList.add('is-visible');
  player.setAttribute('aria-hidden', 'false');
  $('[data-global-title]').textContent = memory[activeNode].audioLabel;
  $('[data-global-meta]').textContent = `${memory[activeNode].title} · ${memory[activeNode].location}`;
  $('[data-global-play]').textContent = 'Ⅱ';
});
audio.addEventListener('pause', () => { $('[data-audio-play]').textContent = '▶'; $('[data-global-play]').textContent = '▶'; });
audio.addEventListener('ended', () => { $('[data-audio-play]').textContent = '▶'; $('[data-global-play]').textContent = '▶'; });
audio.addEventListener('loadedmetadata', () => { $('[data-audio-total]').textContent = formatTime(audio.duration); $('[data-audio-duration]').textContent = `${memory[activeNode].audioLabel} · ${formatTime(audio.duration)}`; });
audio.addEventListener('timeupdate', () => { $('[data-audio-current]').textContent = formatTime(audio.currentTime); $('[data-audio-progress]').value = audio.duration ? String((audio.currentTime / audio.duration) * 100) : '0'; });
$('[data-audio-progress]').addEventListener('input', (event) => { if (audio.duration) audio.currentTime = audio.duration * (Number(event.target.value) / 100); });
$('[data-global-play]').addEventListener('click', () => { if (audio.paused) audio.play(); else audio.pause(); });
$('[data-global-close]').addEventListener('click', () => { audio.pause(); $('[data-global-player]').classList.remove('is-visible'); });

$$('[data-filter]').forEach((chip) => chip.addEventListener('click', () => {
  const filter = chip.dataset.filter;
  $$('[data-filter]').forEach((item) => item.classList.toggle('is-active', item === chip));
  $$('.map-node').forEach((node) => {
    const visible = filter === 'all' || node.dataset.themes.split(' ').includes(filter);
    node.classList.toggle('is-hidden', !visible);
  });
}));

const navToggle = $('.menu-toggle');
const mobileNav = $('.main-nav-mobile');
navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
  mobileNav.classList.toggle('is-open', !open);
});
$$('.main-nav-mobile a').forEach((link) => link.addEventListener('click', () => { navToggle.setAttribute('aria-expanded', 'false'); mobileNav.classList.remove('is-open'); }));
const siteHeader = $('.site-header');
window.addEventListener('scroll', () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 30), { passive: true });

function openModal(modal) { modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('is-locked'); $('.drawer-close', modal).focus(); }
function closeModal(modal) { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('is-locked'); }
$('[data-open-intro]').addEventListener('click', () => openModal(introModal));
$$('[data-close-intro]').forEach((button) => button.addEventListener('click', () => { $('[data-intro-audio]').pause(); closeModal(introModal); }));
$('[data-play-intro]').addEventListener('click', async () => { const introAudio = $('[data-intro-audio]'); try { await introAudio.play(); } catch (error) { console.warn(error); } });
$('[data-intro-audio]').addEventListener('ended', () => closeModal(introModal));

const artContent = {
  traditional: { image: 'assets/art/traditional-residence.jpg', kicker: 'ART TRANSLATION / 01', title: '传统民居', copy: '从一个门、一面墙和一条巷子的尺度出发，把街区记忆压缩成可以带走的物件。' },
  banyan: { image: 'assets/art/banyan-study.jpg', kicker: 'ART TRANSLATION / 05', title: '一棵树的乡愁', copy: '老榕树既是点位，也是居民共同使用过的时间容器。' },
  water: { image: 'assets/art/water-five-crops-1.jpg', kicker: 'ART TRANSLATION / 03', title: '水生五秀', copy: '马蹄、莲藕、茨菇、菱角和茭笋，把失去的水田记忆重新带回日常。' },
  archway: { image: 'assets/art/archway.jpg', kicker: 'ART TRANSLATION / 04', title: '入口与回望', copy: '牌坊是边界，也是回到泮塘时首先认出的记忆符号。' },
  poster: { image: 'assets/art/poster-1.jpg', kicker: 'ART TRANSLATION / 07', title: '巷陌海报', copy: '将口述史转化为年轻人可以理解和分享的视觉入口。' }
};
$$('[data-art]').forEach((tile) => tile.addEventListener('click', () => {
  const item = artContent[tile.dataset.art];
  if (!item) return;
  $('[data-art-modal-image]').src = item.image;
  $('[data-art-modal-image]').alt = item.title;
  $('[data-art-modal-kicker]').textContent = item.kicker;
  $('[data-art-modal-title]').textContent = item.title;
  $('[data-art-modal-copy]').textContent = item.copy;
  openModal(artModal);
}));
$$('[data-close-art]').forEach((button) => button.addEventListener('click', () => closeModal(artModal)));

window.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (drawer.classList.contains('is-open')) closeDrawer();
  if (introModal.classList.contains('is-open')) closeModal(introModal);
  if (artModal.classList.contains('is-open')) closeModal(artModal);
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('revealed'); }), { threshold: .16 });
$$('.reveal').forEach((element) => observer.observe(element));
setDrawerContent('banyan');
