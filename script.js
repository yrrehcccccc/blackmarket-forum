const app = document.getElementById('appContent');
const state = { account: 'land', admin: false, coins: 12500, mailRead: false, board: 'cat' };

const data = {
  home: [
    { title: '找走丢的小鸟QAQ', bounty: 500, status: '未解决', replies: 10 },
    { title: 'Chiikawa最新扭蛋互换', bounty: 600, status: '未解决', replies: 5 },
    { title: '风铃眼罩佬真身究竟是？？！！', bounty: 20000, status: '未解决', replies: 3411, hot: true, action: () => renderThread('identity') },
    { title: '求🍅的番茄1个 转型种植技术分享', bounty: 10000, status: '未解决', replies: 2659, hot: true },
    { title: '寻找迷路的公猫[已绝育]', bounty: 600, status: '已解决', replies: 15 },
    { title: '求跑腿代购绿萝咖啡豆！！！', bounty: 300, status: '未解决', replies: 2 }
  ],
  dog: [
    { id: 'live', title: '【🐶直播】黑市第一届全民追踪大赛 冠军：50000善', replies: 312 },
    { id: 'job', title: '【🐶职场】求兼职推荐', replies: 334 },
    { id: 'marriage', title: '【🐶婚恋】🥺对象A10/BBA/颜值9小美...', replies: 534 }
  ],
  identity: [
    { f:3210, name:'善人さん', date:'07/25 18:25', id:'7kj2qp', body:'你楼刷到这条了吗<br>评论还有泥潭善善果奔，笑死<br>会有更多人被引流加入战局吗，wakuwaku!<br><br><div class="quote-box"><b>KKKK</b> @fjwwwraa801<br>强塞路人安利的我 be like:</div>', up:1, down:0 },
    { f:3211, name:'善人さん', date:'07/25 18:26', id:'yy57i9', body:'<div class="quote-box">&gt; 回复 #3210<br>你来晚了<br>已经给罩宝底裤扒没一轮了哈哈哈</div>', up:0, down:0 },
    { f:3212, name:'善人さん', date:'07/25 18:28', id:'T5ii88', ban:true, admin:true, body:'死眼罩跟你小情儿一起去死吧！！ 🖕🖕🖕', up:2, down:15 }
  ],
  live: [
    {f:41, name:'善人さん', date:'07/26 09:27', body:'那个女生押囚犯一样押着小眼罩填、报、名、表！<br><div class="img-box" onclick="alert(\'图片占位：20250726.JPG\')">【20250726.JPG】</div>'},
    {f:75, name:'善人さん', date:'07/26 09:40', ban:true, body:'马上打个电话试试，等我好消息🤭'},
    {f:97, name:'善人さん', date:'07/26 10:12', body:'身高：178m？兴趣：架空幻想生物？梦想：解放奴隶？语言：腹语、唇语、樱语？'},
    {f:156, name:'善人さん', date:'07/26 11:03', ban:true, body:'我是打电话的那个，被个老男人骂了，听声音就肾虚！😒'},
    {f:735, name:'善人さん', date:'07/26 18:02', body:'这玩意一本村上春树摊开摆那，一个小时都没翻，盯着外面发呆。<br><div class="img-box" onclick="alert(\'图片占位：发呆.JPG\')">【发呆.JPG】</div>'},
    {f:748, name:'善人さん', date:'07/26 18:16', body:'大佬请留步！！！你们看，对面那个便利店，这店员是谁啊，黑白头发的！<br><div class="img-box" onclick="alert(\'图片占位：锤.JPG\')">【锤.JPG】</div>'},
    {f:2737, name:'NONONO', date:'07/27 00:19', trip:'🥥', body:'请收回，苏枋同学和樱同学是正直的朋友关系，15岁没有资质去 LOVE HOTEL，已取证。'},
    {f:2810, name:'善人さん', date:'07/27 00:42', body:'谢邀，人在 LOVE HOTEL，刚才跟女友打完第7炮。主楼那俩小屁孩就在我们前排！<div class="paywall" data-price="10000">&gt;&gt;&gt;需要[10000善]查看&lt;&lt;&lt;</div>'}
  ],
  job: [
    {f:1, name:'善人さん', date:'07/20 08:00', trip:'2ej7uD', body:'RT，要交房租，想多打几份工'},
    {f:2, name:'Gemini', date:'07/20 08:03', trip:'mS0jX6', fakeAI:true, body:'楼主不说要求和薪酬，还开识别码，自己又不dd挽尊，你看都没人回呀'},
    {f:328, name:'善人さん', date:'07/22 12:40', body:'我什么都能做，体力活都行！钱不能说看着给，时薪1000以上。我很抢手哦😼养了五条鱼，没有白莲味。老板离开我会死，还给我士力架😊好吃！'},
    {f:334, name:'善人さん', date:'07/22 12:49', body:'<div class="quote-box">&gt; 回复 #328</div>心神别上当啊，这人都是现场缝的😅<br>“离开我会死” cr [豪门娇妻帖]<br>“还给我士力架”图穷匕见，鉴定为硬广！'}
  ],
  marriage: [
    {f:1, name:'善人さん', date:'07/18 22:11', trip:'🥺', ip:'219.176.85.122', body:'瑟瑟发抖🥺预感明天会有贵妇甩我支票，让我离开她儿子🥺对象什么都好，唯一不好就是离开我会死🥺'},
    {f:533, name:'善人さん', date:'07/21 20:33', body:'我都不要1000万，给我10万就好，能付两个月房租😼'},
    {f:534, name:'善人さん', date:'07/21 20:35', ip:'219.176.85.122', body:'<div class="quote-box">&gt; 回复 #533</div>分手费只要10万吗宝宝😩那你对象还真是个赔钱货🤣🤣🤣'}
  ]
};

function renderHome(board = state.board) {
  state.board = board;
  setActiveNav(board);
  const items = board === 'dog'
    ? data.dog.map(t => ({ title:t.title, bounty:50000, status:'围观中', replies:t.replies, hot:t.id==='live', action:() => renderThread(t.id) }))
    : data.home;

  app.innerHTML = `
    <div class="home-head">
      <h1>${board === 'dog' ? '🐶 狗版 · 八卦放送区' : '😼 猫版 · 有偿互助区'}</h1>
      <p>${state.account === 'land' ? '当前身份：陆党（注册用户）' : '当前身份：水党（游客）'} · 今日在线 328 人</p>
    </div>
    <span class="section-label">LATEST THREADS</span>
    <div id="threadList"></div>`;

  const list = document.getElementById('threadList');
  items.forEach(t => {
    const card = document.createElement('article');
    card.className = `thread-card ${t.hot ? 'hot-border' : ''}`;
    card.innerHTML = `
      ${t.hot ? '<span class="hot-tag">HOT♥</span>' : ''}
      <span class="bounty-icon">😼 🐟×${t.bounty}</span>
      <div class="thread-title">${t.title}</div>
      <div class="thread-meta">[${t.status}] 💬 ${t.replies}</div>`;
    card.addEventListener('click', t.action || (() => alert('该楼暂未收录进演示版。')));
    list.appendChild(card);
  });
}

function renderThread(id) {
  let posts, title, extra = '';
  if (id === 'identity') {
    posts = data.identity; title = '风铃眼罩佬真身究竟是？？！！';
  } else {
    posts = data[id];
    title = data.dog.find(t => t.id === id)?.title || '主题帖';
    if (id === 'job') extra = '<div class="system-msg">🎊 本楼埋有 1/1 个踩楼彩蛋，GOOD LUCK! 🎊</div>';
  }

  app.innerHTML = `
    <div class="thread-banner" id="backToBoard">
      <span style="font-size:24px">${id === 'identity' ? '😼' : '🐶'}</span>
      <div><div class="rainbow-text">${title}</div><small>点击标题返回版面</small></div>
    </div>${extra}<div id="postList"></div>`;
  document.getElementById('backToBoard').onclick = () => renderHome(id === 'identity' ? 'cat' : 'dog');

  const list = document.getElementById('postList');
  posts.forEach(p => {
    const post = document.createElement('article');
    post.className = `post ${p.admin ? 'admin-post' : ''}`;
    const adminUI = p.admin ? '<div class="admin-tag">由管理员 <b>BLACKHAND</b> 标记：<u>[风铃阴阳头的八卦分布图]</u>　理由：<b>性骚扰</b></div>' : '';
    const rewardUI = p.admin ? '<div class="admin-reward">感谢大善人さん【BLACKHAND】打赏【-65535善】！<br>备注：上次和我聊得开心吗？听说你有好好道歉呀。顺便借您吉言啦^^</div>' : '';
    const aiClass = (!p.fakeAI && (p.name === 'Gemini' || p.name === 'ChatGPT')) ? 'role-ai' : '';
    post.innerHTML = `
      <div class="post-head">
        <b>#${p.f}</b><span class="${aiClass}">${p.name}</span>
        ${p.date ? `<span>| ${p.date}</span>` : ''}${p.id ? `<span>| ${p.id}</span>` : ''}${p.trip ? `<span>| ${p.trip}</span>` : ''}
        ${p.ban ? '<span class="banned">（已封禁）</span>' : ''}
      </div>
      ${adminUI}
      <div class="post-body">${p.body}</div>
      ${rewardUI}
      ${typeof p.up === 'number' ? `<div class="actions">👍 ${p.up}　👎 ${p.down}</div>` : ''}
      <div class="admin-toolbar">▲ ${p.ip ? `[IP: ${p.ip}]` : '[查看UID]'}
        <span class="admin-btn" data-action="ban">[封禁]</span>
        <span class="admin-btn" data-action="mark">[标记]</span>
        <span class="admin-btn" data-action="delete">[删除]</span>
      </div>`;
    list.appendChild(post);
  });
  bindDynamicEvents();
}

function bindDynamicEvents() {
  document.querySelectorAll('.paywall').forEach(el => {
    if (!el.querySelector('button')) {
      const btn = document.createElement('button');
      btn.className = 'pixel-btn'; btn.textContent = '支付并查看';
      btn.onclick = () => unlock(el, Number(el.dataset.price));
      el.append(document.createElement('br'), btn);
    }
  });
  document.querySelectorAll('[data-action="ban"]').forEach(btn => btn.onclick = banUser);
  document.querySelectorAll('[data-action="mark"]').forEach(btn => btn.onclick = () => alert('已全局标记该目标！'));
  document.querySelectorAll('[data-action="delete"]').forEach(btn => btn.onclick = () => alert('演示模式：帖子已加入删除队列。'));
}

function unlock(el, price) {
  if (state.account === 'water') return alert('>>> 您所在的[游客组]没有查看权限 <<<');
  if (state.coins < price) return alert('善币不足！穷鬼退散。');
  state.coins -= price; updateUI();
  el.classList.add('unlocked');
  el.innerHTML = '【🔒热吻实锤.JPG】<br>照片解密成功：前景是一对自拍情侣；前两排的目标人物（樱遥和苏枋）正襟危坐，中间隔着爆米花和可乐，标准观影姿势。';
}
function banUser() {
  const days = prompt('请输入封禁天数（如：99）：', '99');
  if (days) alert(`操作成功：已封禁 ${days} 天。\n系统日志：BLACKHAND，我真棒。`);
}
function renderMail() {
  state.mailRead = true; updateUI(); setActiveNav('mail');
  app.innerHTML = `<div class="home-head"><h1>📬 您的信箱</h1><p>共 1 封站内信</p></div><div class="mail-card"><b>匿名善人</b><br><small>07/26 03:28</small><hr><br>您好，想操您。</div>`;
}
function setActiveNav(board) {
  document.querySelectorAll('.icon-link,.nav-btn').forEach(el => el.classList.remove('active'));
  if (board === 'cat') { document.getElementById('navCat')?.classList.add('active'); document.getElementById('mobileCat')?.classList.add('active'); }
  if (board === 'dog') { document.getElementById('navDog')?.classList.add('active'); document.getElementById('mobileDog')?.classList.add('active'); }
  if (board === 'mail') document.getElementById('mobileMail')?.classList.add('active');
  if (board === 'home') document.getElementById('mobileHome')?.classList.add('active');
}
function updateUI() {
  document.body.className = `${state.account === 'water' ? 'water-mode' : ''} ${state.admin ? 'admin-mode' : ''}`;
  document.getElementById('btnLand')?.classList.toggle('active', state.account === 'land');
  document.getElementById('btnWater')?.classList.toggle('active', state.account === 'water');
  document.getElementById('coinCount').textContent = state.coins;
  document.getElementById('mobileCoins').textContent = `🐟 ${state.coins}`;
  document.getElementById('mailBadge').style.display = state.mailRead ? 'none' : 'inline-block';
}

document.getElementById('homeBtn').onclick = () => renderHome('cat');
document.getElementById('navCat').onclick = () => renderHome('cat');
document.getElementById('navDog').onclick = () => renderHome('dog');
document.getElementById('navMail').onclick = renderMail;
document.getElementById('btnLand').onclick = () => { state.account = 'land'; updateUI(); renderHome(state.board); };
document.getElementById('btnWater').onclick = () => { state.account = 'water'; updateUI(); renderHome(state.board); };
document.getElementById('adminToggle').onclick = () => { state.admin = !state.admin; updateUI(); };
document.getElementById('mobileHome').onclick = () => renderHome('cat');
document.getElementById('mobileCat').onclick = () => renderHome('cat');
document.getElementById('mobileDog').onclick = () => renderHome('dog');
document.getElementById('mobileMail').onclick = renderMail;

updateUI();
renderHome('cat');
