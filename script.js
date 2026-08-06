const state = {board:'cat', account:'land', coins:200, page:'home'};
const catTopics = [
  {bounty:500,title:'找走丢的小鸟 QAQ',status:'未解决',count:10,new:true},
  {bounty:600,title:'Chiikawa 最新扭蛋互换',status:'未解决',count:5},
  {bounty:20000,title:'风铃眼罩佬真身究竟是？？！！',status:'未解决',count:3411,hot:true,thread:true},
  {bounty:10000,title:'求一个番茄｜转型种植技术分享',status:'未解决',count:2659,hot:true},
  {bounty:600,title:'寻找迷路的公猫［已绝育］',status:'已解决',count:15},
  {bounty:300,title:'求跑腿代购绿萝咖啡豆！！！',status:'未解决',count:2}
];
const dogTopics = [
  {label:'娱乐八卦',title:'跑了几家便利店联动文件夹都缺货了！到底哪里能买到',count:28},
  {label:'美食人生',title:'大家觉得最好吃的布丁是哪个牌子，什么口味？',count:74},
  {label:'高端论战',title:'来，轮战力！！！已有 34 人下注',count:5736,featured:true},
  {label:'生活妙招',title:'该死的，游戏打得好好的，停电了啊啊啊啊！',count:121},
  {label:'生活妙招',title:'台风来之前参加了街头采访，有什么要问的吗',count:41}
];
const posts = [
 {n:1,date:'06/21 11:52',id:'5aSm7X',text:'风铃那个戴黑眼罩的\n总一副很拽的样子 😤😤\n来个善善打探打探眼罩下面到底是什么\n我出500善！（全部身家，别嫌我抠）\n自带返图谢谢，或者你有理有据，给我编信了也OK',up:26,down:2},
 {n:2,date:'06/21 11:55',id:'pL5mS7',text:'谁在乎？本人自炒？',up:4,down:18},
 {n:3,date:'06/21 12:01',id:'4k55eV',text:'打发叫花子啊，还返图……我干嘛不去隔壁找猫 😅',up:31,down:3},
 {n:4,date:'06/21 12:02',id:'5aSm7X',text:'> 回复 #3\n你这辈子也就找找猫这样',up:11,down:9},
 {n:5,date:'06/21 12:03',id:'KdT2nG',text:'> 回复 #4\n乐，破防了 🤡🤡🤡🤡🤡\n@BLACKHAND\n人身攻击啊这 😅 黑手快来关他一个月',up:42,down:4},
 {n:6,date:'06/21 12:04',id:'4k55eV',text:'> 回复 #5\n你有病吧 😅 干嘛 COS 我',up:66,down:1},
 {n:3210,date:'07/25 18:25',id:'7kj2qp',text:'你楼刷到这条了吗\n评论还有泥潭善善果奔，笑死\n会有更多人被引流加入战局吗，wakuwaku!',up:1,down:0},
 {n:3211,date:'07/25 18:26',id:'yy57i9',text:'> 回复 #3210\n你来晚了\n已经给罩宝底裤扒没一轮了哈哈哈',up:0,down:0},
 {n:3212,date:'07/25 18:28',id:'T5ii88',text:'死眼罩跟你小情儿一起去死吧！！ 🖕 🖕 🖕',up:2,down:15,flagged:true}
];
const content = document.querySelector('#content');
function clone(id){return document.querySelector(id).content.cloneNode(true)}
function renderHome(){state.page='home';content.innerHTML='';content.append(clone('#homeTemplate'));document.querySelector('#boardIcon').textContent=state.board==='cat'?'😼':'🐶';document.querySelector('#boardName').textContent=state.board==='cat'?'猫版悬赏':'狗版吹水';const primary=state.board==='cat'?catTopics:dogTopics.slice(0,3);const secondary=state.board==='cat'?dogTopics:dogTopics.slice(3);renderTopics(primary,document.querySelector('#topicList'));renderTopics(secondary,document.querySelector('#secondaryList'));document.querySelector('#newPostBtn').onclick=()=>document.querySelector('#postModal').hidden=false;document.querySelector('#moreBtn').onclick=e=>{e.currentTarget.textContent='已经到底啦 ···'};}
function renderTopics(items,target){target.innerHTML='';items.forEach(t=>{const el=document.createElement('article');el.className='topic'+(t.hot?' hot':'')+(t.featured?' featured':'');el.innerHTML=`<span>${state.board==='cat'?'😼':'🐶'}</span><span class="bounty">${t.bounty?`🐠×${t.bounty}`:(t.label||'')}</span><span class="title">${t.title}${t.new?' <b class="tag">NEW</b>':''}</span><span class="status">${t.status?`[${t.status}]`:''}</span><span class="count">💬 ${t.count}</span>`;if(t.thread)el.onclick=renderThread;target.append(el)})}
function renderThread(){state.page='thread';content.innerHTML='';content.append(clone('#threadTemplate'));const list=document.querySelector('#postList');posts.forEach(p=>list.append(makePost(p)));document.querySelector('#backBtn').onclick=renderHome;document.querySelector('#replyText').oninput=e=>document.querySelector('#charCount').textContent=`${e.target.value.length}/300`;document.querySelector('#replyForm').onsubmit=e=>{e.preventDefault();const t=document.querySelector('#replyText');if(!t.value.trim())return;const p={n:3213,date:'07/25 18:39',id:Math.random().toString(36).slice(2,8),text:t.value.trim(),up:0,down:0};list.append(makePost(p));t.value='';document.querySelector('#charCount').textContent='0/300';document.querySelector('#threadReplies').textContent=Number(document.querySelector('#threadReplies').textContent)+1;};}
function makePost(p){const el=document.createElement('article');el.className='post'+(p.flagged?' flagged':'');el.innerHTML=`<div class="post-head">#${p.n} 善人さん | ${p.date} | ${p.id}${p.flagged?'（已封禁 300天）':''}${p.flagged?'<div class="moderation">由管理员 <b>BLACKHAND</b> 标记：<u>八卦分布图</u>　<span class="reason">理由：性骚扰</span></div>':''}</div><div class="post-body"></div><div class="post-actions"><button class="vote">👍 <b>${p.up}</b></button><button class="vote">👎 <b>${p.down}</b></button></div>`;el.querySelector('.post-body').textContent=p.text;el.querySelectorAll('.vote').forEach(btn=>btn.onclick=()=>{if(btn.classList.contains('active'))return;btn.classList.add('active');btn.querySelector('b').textContent=Number(btn.querySelector('b').textContent)+1});return el}
function renderProfile(){state.page='profile';content.innerHTML='';content.append(clone('#profileTemplate'));document.querySelector('#profileCoin').textContent=state.coins}
function setBoard(board){state.board=board;document.querySelectorAll('.board-switch').forEach(b=>b.classList.toggle('active',b.dataset.board===board));renderHome()}
document.querySelectorAll('.board-switch').forEach(b=>b.onclick=()=>setBoard(b.dataset.board));document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>b.dataset.page==='profile'?renderProfile():renderHome());document.querySelector('#homeSeal').onclick=renderHome;document.querySelectorAll('.account').forEach(b=>b.onclick=()=>{state.account=b.dataset.account;document.querySelectorAll('.account').forEach(x=>x.classList.toggle('active',x===b));document.querySelector('.side-link').style.visibility=state.account==='land'?'visible':'hidden'});
document.querySelector('#modalClose').onclick=()=>document.querySelector('#postModal').hidden=true;document.querySelector('#submitPost').onclick=()=>{const title=document.querySelector('#newTitle').value.trim();const bounty=Number(document.querySelector('#newBounty').value);if(!title)return;catTopics.unshift({bounty,title,status:'未解决',count:0,new:true});state.coins=Math.max(0,state.coins-bounty);document.querySelector('#coinCount').textContent=state.coins;document.querySelector('#postModal').hidden=true;renderHome()};
renderHome();
