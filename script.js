const app = document.getElementById('appContent');

const data = {
  home: [
    { title: '找走丢的小鸟QAQ', bounty: 500, status: '未解决', replies: 10, hot: false },
    { title: 'Chiikawa最新扭蛋互换', bounty: 600, status: '未解决', replies: 5, hot: false },
    { title: '风铃眼罩佬真身究竟是？？！！', bounty: 20000, status: '未解决', replies: 3411, hot: true, link: true },
    { title: '求🍅的番茄1个 转型种植技术分享', bounty: 10000, status: '未解决', replies: 2659, hot: true },
    { title: '寻找迷路的公猫[已绝育]', bounty: 600, status: '已解决', replies: 15, hot: false },
    { title: '求跑腿代购绿萝咖啡豆！！！', bounty: 300, status: '未解决', replies: 2, hot: false }
  ],
  thread: [
    {
      f: 3210,
      name: '善人さん',
      date: '07/25 18:25',
      id: '7kj2qp',
      body: '你楼刷到这条了吗<br>评论还有泥潭善善果奔，笑死<br>会有更多人被引流加入战局吗，wakuwaku!<br><br><div style="border:2px solid #777;padding:8px;background:#fff;"><b>KKKK</b> @fjwwwraa801<br>强塞路人安利的我be like:</div>',
      up: 1,
      down: 0
    },
    {
      f: 3211,
      name: '善人さん',
      date: '07/25 18:26',
      id: 'yy57i9',
      body: '<div class="quote-box">&gt; 回复 #3210<br>你来晚了<br>已经给罩宝底裤扒没一轮了哈哈哈</div>',
      up: 0,
      down: 0
    },
    {
      f: 3212,
      name: '善人さん',
      date: '07/25 18:28',
      id: 'T5ii88',
      ban: true,
      admin: true,
      body: '死眼罩跟你小情儿一起去死吧！！ 🖕🖕🖕',
      up: 2,
      down: 15
    }
  ]
};

function renderHome() {
  const cards = data.home.map(t => `
    <article class="thread-card ${t.hot ? 'hot' : ''}" ${t.link ? 'onclick="renderThread()"' : ''}>
      ${t.hot ? '<span class="hot-tag">HOT!!</span>' : ''}
      <div class="bounty">◆ 善币×${t.bounty}</div>
      <div class="thread-title">${t.title}</div>
      <div class="thread-meta">[${t.status}]<br>💬 ${t.replies}</div>
    </article>
  `).join('');

  app.innerHTML = `
    <div class="board-header">■ 综合区 <strong>/ TODAY'S GOOD DEED</strong></div>
    <div class="notice-box">
      <b>【置顶】</b> 本站为匿名互助论坛。请勿公开真实姓名、住址及学校信息。<br>
      发帖成功即视为同意《善人守则》第1—8条。
    </div>
    ${cards}
  `;
}

function renderThread() {
  const posts = data.thread.map(p => {
    const adminTag = p.admin
      ? '<div class="admin-tag">由管理员 <b>BLACKHAND</b> 标记：<u>[风铃阴阳头的八卦分布图]</u>　理由：<b>性骚扰</b></div>'
      : '';

    const reward = p.admin
      ? '<div class="admin-reward">感谢大善人さん【BLACKHAND】打赏【-65535善】！<br>备注：上次和我聊得开心吗？听说你有好好道歉呀。顺便借您吉言啦^^</div>'
      : '';

    return `
      <article class="post ${p.admin ? 'admin-post' : ''}">
        <div class="post-head">
          #${p.f}　${p.name}｜${p.date}｜ID:${p.id}
          ${p.ban ? '<span style="color:#b40000;">（已封禁300天）</span>' : ''}
        </div>
        ${adminTag}
        <div class="post-body">${p.body}</div>
        ${reward}
        <div class="actions">👍 ${p.up}　👎 ${p.down}　[引用] [举报]</div>
      </article>
    `;
  }).join('');

  app.innerHTML = `
    <div class="thread-banner" onclick="renderHome()">
      ← 返回主题列表　◆ 善币×21999　
      <span class="rainbow">风铃眼罩佬真身究竟是？？！！</span>
    </div>
    ${posts}
  `;
}

function tickVisitor() {
  const node = document.getElementById('visitorCount');
  if (!node) return;
  const value = Number(node.textContent) + Math.floor(Math.random() * 3);
  node.textContent = String(value).padStart(6, '0');
}

setInterval(tickVisitor, 8000);
renderHome();
