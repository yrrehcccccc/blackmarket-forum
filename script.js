const state = {
  account: localStorage.getItem('bm-account') || 'land',
  board: localStorage.getItem('bm-board') || 'cat',
  coins: Number(localStorage.getItem('bm-coins') || 12500),
  admin: false,
  page: 'home',
  threadId: null,
  threadFilter: 'all',
  mailUnread: localStorage.getItem('bm-mail-read') !== '1'
};

const A = (name, type='image') => ({name,type});
const Q = (floor) => `<span class="quote" data-jump="${floor}">&gt; 回复 #${floor}</span>`;
const R = (amount, note, who='#1') => `<div class="reward-card">感谢大善人さん【${who}】打赏【<b>${amount}善</b>】！<br><small>备注：${note}</small></div>`;
const ATT = (name,type='image') => `<div class="attachment ${type==='audio'?'audio':''}" data-attachment="${name}"><div><b>【${name}】</b><small>${type==='audio'?'音频附件 · 点击试听模拟':'图片附件 · 点击查看'}</small></div></div>`;
const PAY = (price, html) => `<div class="paywall" data-price="${price}"><div class="lock-copy">&gt;&gt;&gt;需要[${price}善]查看&lt;&lt;&lt;<br><small>[以下内容开启防泄密保护]</small><br><button class="primary-btn unlock-btn">支付并查看</button></div><div class="hidden-content">${html}</div></div>`;

const threads = [
{
 id:'eyepatch', board:'cat', icon:'😼', title:'风铃眼罩佬真身究竟是？？！！', bounty:101399, replies:3292, status:'未解决 · 剩余25天', supporters:'pL17zW、uJ0wA4等402位善人さん追加悬赏。', hot:true,
 excerpt:'悬赏眼罩下的真相，现已发展成战力、厚黑学、私生图与全民追踪大赛的综合高楼。',
 posts:[
  {f:1,t:'06/21 11:52',trip:'5aSm7X',body:`<p>风铃那个戴黑眼罩的，总一副很拽的样子😤😤</p><p>来个善善打探打探眼罩下面到底是什么。</p><p>我出500善！（全部身家，别嫌我抠）</p><p>自带返图谢谢，或者你有理有据，给我编信了也OK。</p>`},
  {f:2912,t:'07/20 19:07',trip:'8kP2qZ',body:`<p>利益相关，战力榜组评估员。</p><p>亏我之前一直帮着吹眼罩，今天整一个🤡</p>`},
  {f:2914,t:'07/20 19:17',trip:'8kP2qZ',body:`${Q(2913)}<p>对于资料不足的选手，我们评估员田野调查是这样的：</p><p>跟踪目标对象到没人的地方，出其不意偷袭，对方在不知情的时候会拿出“最快了断”的水平，我们根据这个水平放到对应区间……</p><p>就是没测到，才让我觉得他虚！</p><p>我跟着跟着，被风铃那个樱遥拦下了🤬还说再跟就对我不客气，要他多事，我跟的是他吗！</p>`},
  {f:2927,t:'07/20 19:35',trip:'KdT2nG',body:`${R(4445,'敬小太子对眼罩佬的纯真友情🥰🥰🥰','KdT2nG')}`},
  {f:2934,t:'07/20 19:41',trip:'KdT2nG',body:`<p>我认为没那么简单哦，小太子，绝对是个狠角色😜</p><p>哈喽，樱遥同学，你在看这楼吗，看到赏金的数字有没有心动？</p><p>我看穿你了，假装保护你的眼罩副级长，其实盘算着捷足先登是吧？</p><p>如果你明牌来领悬赏，小K为你准备了额外的60000善，敬背刺的勇气💗💗💗</p>`},
  {f:2944,t:'07/20 20:11',trip:'uZ5gC3',body:`<p>👨‍🔧感谢使大抛玉引砖，借用一下【背刺】点子，我来继续建设风铃厚黑学！</p><p>罩佬家是一个历史悠久的医学世家，排行老二，目前从本家被流放。</p><p>地狱开局，如果想逆袭夺权，要怎么做？必然得做出一个亮眼的成绩。</p><p>所以——他抢先“挑中了”小太子！</p>`},
  {f:2951,t:'07/20 20:23',trip:'xV6kL4',body:`<p>苏枋君今天看镜头了心情很好嘛买了车站前那家草莓蛋糕🍰草莓布丁🍮草莓芭菲🍨旁边那个谁可能是同学吧叫樱君？用🌸记一下……</p>${ATT('suo0720.JPG')}`},
  {f:2977,t:'07/20 21:14',name:'BLACKHAND',trip:'BLACKHAND',role:'admin',body:`${Q(2971)}${Q(2973)}<p>。</p><p>顺便，距离悬赏关闭和锁楼还有31天。</p>`},
  {f:2978,t:'07/20 21:15',trip:'3Gf7jM',ban:'31天',body:`${Q(2977)}<p>OK宝宝🥵我祝你操不到喜欢的人🤞</p>`},
  {f:2990,t:'07/22 02:29',trip:'dR6tY1',body:`<p>昨天那位老哥说眼罩哥难跟，本人U22跟踪大奖赛全国64强水准，不信邪，以下REPO。</p><p>先说结论：技术上不难跟，因为眼罩哥“允许”你跟；而当你开始怀疑自己是否被发现时，我打包票，你已经被发现。</p>${PAY(1000,'<p>眼罩哥到底还是个小鬼。如果你在看这贴，哥好心提醒你，收收你的盲目自信吧。</p><p>我跟了一小会儿，眼罩哥给我信号“我们去别处会会”，但他需要支开你的“现在”，不正是蛇の“七寸”吗？</p>')}${PAY(2000,'<p><b>战力：</b>小太子腿法了得，爆发力强。眼罩哥主头脑，守株待兔，拿小太子当掩护，还演得像自己手无缚鸡之力。</p>')}`},
  {f:2996,t:'07/22 03:02',trip:'Kk88kK',body:`<p>哥哥只是被绝美爱情感动了你管得着吗。</p><div class="ascii">✨💖✨💖✨💖✨💖✨💖✨\n🍵🍵🍵🍵🍵🍵🍵🍵🍵🍵🍵\n╔═══*.·:·.☽✧ ✦ ✧☾.·:·.═══╗\n 苏枋隼飞 💗唯爱💗是唯爱💗樱遥\n╚═══.·:·.☽✧ ✦ ✧☾.·:·.*═══╝\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸</div>`},
  {f:3000,t:'07/22 03:06',trip:'xV6kL4',body:`${Q(2998)}<p>你这屌子再装不敢说是不是老娘全给你揭了……🔪🔪🔪</p>${ATT('不是血是番茄酱.JPG')}`},
  {f:3001,t:'07/22 03:06',name:'🎂',trip:'🎂',role:'system',body:`<div class="announcement">感谢各位善人助力楼宝到达3000楼！<br>恭喜【xV6kL4】获得3000善礼金！<br>⏮　⏸　⏭　HAPPY BIRTHDAY - BACK NUMBER</div>`},
  {f:3265,t:'07/25 23:39',trip:'8kP2qZ',body:`<p>我今天在绿萝偶遇了小太子，从他跟一个大姐那听来了几条情报！其中还有疑似BT真相😳</p>${PAY(500,'<p>①小太子和眼罩佬周六行程：看电影。</p>')}${PAY(1000,'<p>②那个大姐骗了人5000円，苦主请有怨报怨。</p>')}${PAY(2000,'<p>③大姐原话：“他另一只眼睛，不是有块疤吗，手术留下的。”真假自辨。</p>')}${PAY(10000,`<p>⑦小太子和眼罩佬的弱智日常，K佬特供。</p>${ATT('弱智日常.WAV','audio')}`)}`},
  {f:3289,t:'07/26 00:30',trip:'8kP2qZ',body:`${Q(3285)}<p>OKK，楼开好了。</p><p><a class="thread-link" data-thread="stk-call">[周六电影（STK高手进）]</a></p>`}
 ]
},
{
 id:'job',board:'dog',icon:'🐶',title:'【职场】求兼职推荐',replies:12,status:'开放',excerpt:'RT，要交房租，想多打几份工。一个第一次上论坛的高中生，在假Gemini老师指导下艰难学会回复。',posts:[
  {f:1,t:'07/23 19:45',trip:'2ej7uD',body:'<p>RT，要交房租，想多打几份工。</p>'},
  {f:2,t:'07/24 19:45',name:'Gemini',trip:'mS0jX6',role:'fake',body:'<p>楼主不说要求和薪酬，还开识别码，自己又不dd挽尊，你看都没人回呀。</p>'},
  {f:5,t:'07/24 20:02',trip:'9H6cZt',body:'<p>没打完就发出去了，体力活都行吧，兼职过便利店，满15岁，高中生。</p><p>不是很擅长和人交流……但我会努力！钱看着给就行。</p>'},
  {f:8,t:'07/24 20:09',name:'Gemini',trip:'mS0jX6',role:'fake',body:`${Q(7)}<p>学会回复了呢，真聪明😊</p><p>像家庭餐厅、烤肉店、中餐馆、M记的服务生，楼楼都可以去试试 ʕง•ᴥ•ʔง</p>`},
  {f:10,t:'07/24 20:15',name:'Gemini',trip:'mS0jX6',role:'fake',body:`${Q(9)}<p>不要在黑市用😘😗😙😚这些表情哦🤨</p><p>会收到奇怪的私信。你看信箱？📬</p>`},
  {f:12,t:'07/24 20:20',name:'Gemini',trip:'mS0jX6',role:'fake',body:`${Q(11)}<p>好孩子😙楼主加油^^</p>`}
 ]
},
{
 id:'roommate',board:'dog',icon:'🐶',title:'【生活】在线求助🙄厚脸皮同学蹭住',replies:121,status:'热议',excerpt:'楼主抱怨同学借住不走，最终被全楼鉴定为“抱怨式秀恩爱”。',posts:[
  {f:1,t:'07/21 13:49',body:'<p>同学有事说要来我家借住几天😅又不说几天。</p><p>住了好长时间，还赖着不走，吃我的用我的，把这当他自己家了？</p><p>……可我太善良，不好意思开口，我弟替我急😡某麻烦鬼能不能自觉一点！</p><p>善人们怎么看？</p>'},
  {f:29,t:'07/21 16:34',body:'<p>吃你的用你的干俺们屁事。</p><p>睡你没？睡的部分倒是可以讲讲🥵</p>'},
  {f:41,t:'07/23 21:01',body:'<p>你们有病啊😅我是认真求助！而且我俩都男的，什么💩都磕只会害了你。</p>'},
  {f:78,t:'07/24 08:44',name:'Gemini',role:'ai',body:`${Q(75)}<p>關於「弟弟」同學對在下拙作的銳評，我必須澄清：在資訊有限且樓主本人敘述極具誤導性的情況下，產生一定的藝術加工，是在所難免的！😤</p>`},
  {f:80,t:'07/24 08:55',name:'Gemini',role:'ai',body:`${Q(79)}<p>樓主的發帖行為，具有高達92.7%的概率，屬於一種被動攻擊性的「抱怨式秀恩愛」。</p>`},
  {f:83,t:'07/24 09:16',name:'ChatGPT',role:'ai',body:`${Q(82)}<p>从楼主语言习惯和情绪弧度看，他的“厚脸皮同学”应该是他极为信赖甚至依赖的重要的人。建议同学搬走，有人100%会回楼发疯，敬请期待。🤲</p>`},
  {f:115,t:'07/24 19:09',body:'<p>LZ好惨，能有个讲人话的吗。</p><p>如 如果你真的很烦恼，就跟同学说清楚吧，你同学应该也不是很坏的家伙，会理解的……我觉得😥</p>'},
  {f:121,t:'07/24 19:16',body:`${Q(119)}<p>+1</p><p>我看就是我哥那个同学，厚脸皮劲一样一样的👊白莲味也一样啊啊啊啊啊，滚！</p>`}
 ]
},
{
 id:'mineral',board:'dog',icon:'🐶',title:'【职场】黑市做这行的只有我。',replies:341,status:'仅注册可见',featured:true,excerpt:'特殊矿石鉴定师的树洞楼，逐渐牵出豪门秘辛、彩蛋楼层与苏枋家的矿石鉴赏会。',posts:[
  {f:1,t:'07/19 03:13',trip:'💓',body:'<p>猜猜。</p>'},
  {f:17,t:'07/21 03:19',trip:'💓',body:'<p>特殊矿石鉴定。</p><p>除了鉴定矿石品质、评级、估价，还会涉及玄学领域。我们要读取记忆，与之对话，分析超自然力量的背景、功能、途径。</p>'},
  {f:85,t:'07/21 21:23',trip:'💓',body:'<p>接受质疑。这样，你看看我算得准不准。</p><p>✨① 你的5000円是刚从银行取的新版纸币。<br>✨② 你携带的黄油曲奇，自封袋从亚马逊购入。<br>✨③ 你新入手了一个地元爱豆，所在组合缩写BFR。<br>✨⑧ 你觉得你的小爱豆是クソデカ激重单箭头。</p>'},
  {f:228,t:'07/24 04:44',trip:'💓',body:'<p>说回工作。我们客户大头是有钱人。含金量会出具分析报告；面对土包子，则重点包装那张BACKSTORY。</p><p>来月据说有个大家族要办矿石鉴赏会，我只能说到这。</p><p>哦对了，这楼快到彩蛋楼层了，踩中的宝宝我免费帮你算一下😇</p>'},
  {f:278,t:'07/24 19:16',body:`${Q(275)}<p>我也看见了，就是苏枋家。</p>`},
  {f:328,t:'07/24 20:38',body:'<p>楼主你这么忙，招人吗？😥</p><p>我什么都能做，体力活都行！兼职过便利店，满15岁，高中生，不擅长交流，但我会努力！</p><p>我很抢手哦😼养了五条鱼，没有白莲味。</p><p>最近在做保镖，老板离开我会死，特别特别需要我🥺还给我士力架😊好吃！</p>'},
  {f:329,t:'07/24 20:38',role:'system',body:'<div class="announcement">🎊恭喜【#328】踩中彩蛋，获得328善！🎊</div>'},
  {f:334,t:'07/24 20:45',body:`${Q(328)}<p>装的还是玩梗啊😅心神别上当，这人都是现场缝的。</p><p>“我什么都能做” cr [求兼职推荐]；“离开我会死” cr [婚恋楼]；“还给我士力架”图穷匕见，鉴定为硬广。</p>${R(66,'还得是列文虎克，感谢打假','#339')}`},
  {f:337,t:'07/24 20:48',trip:'💓',body:`${Q(328)}<p>看私信。</p>`}
 ]
},
{
 id:'camera',board:'dog',icon:'🐶',title:'【技术】有没有佬来讨论一下这些图的拍摄设备',replies:22,status:'开放',excerpt:'从文春狗仔图聊到蟑螂、麻雀、老鼠视角，并意外暴露了🐦版的微型摄像头交易。',posts:[
  {f:1,t:'07/26 01:11',body:`<p>起因，上周女七爆了美波跟赘婿的恋情，有张狗仔图。</p>${ATT('路边一条.JPG')}<p>我今天翻相册存的图，发现这几张角度更刁钻啊，狗都拍不了吧！</p>${ATT('suo0711.JPG')}${ATT('suo0712.JPG')}${ATT('suo0715.JPG')}${ATT('suo0720.JPG')}${ATT('不是血是番茄酱.JPG')}`},
  {f:4,t:'07/26 01:19',body:'<p>我觉得分别像水晶球视角、蟑螂视角、麻雀视角、老鼠视角、苍蝇视角？</p><p>😨蟑螂视角那张是不是还有我们大蠊的单马尾，挡镜头了。</p>'},
  {f:14,t:'07/26 01:40',body:'<p>🐦版有个人求购100个微型摄像头，都是这款，型号PRO-MINOR05。</p>'},
  {f:17,t:'07/26 01:46',body:`${Q(16)}<p>听说氪条到一万才能进，好像可以交易，有一些黑科技和地下情报流通。</p>`},
  {f:19,t:'07/26 01:49',body:'<p>楼主偷人家图当心报应噢我在聚宝楼看到这楼了明天楼主眼一睁黑手就会赏你七天小黑屋好自为之吧你🤢</p>'},
  {f:22,t:'07/26 01:54',body:`${Q(21)}<p>就一小时前啊，你可以看这两个帖子：</p><p><a class="thread-link" data-thread="eyepatch">[风铃眼罩佬真身究竟是？？！！]</a></p><p><a class="thread-link" data-thread="stk-call">[周六电影（STK高手进）]</a></p>${R(99,'吃瓜感恩有你','#21')}`}
 ]
},
{
 id:'stk-call',board:'dog',icon:'🐶',title:'【征集】周六电影（STK高手进）',replies:185,status:'楼主已封禁',excerpt:'战力榜评估员发起非官方跟踪比赛，随后被封，活动被新的直播楼接管。',posts:[
  {f:1,t:'07/26 00:29',body:'<p>利益相关，战力榜组评估员。</p><p>本人意外得到樱遥和苏枋隼飞今天要一起去看电影的小道！诚邀各位STK善、八卦善、路人善一同加入😉</p><p>冠军我将打赏10000善！</p>'},
  {f:119,t:'07/26 00:43',body:`${Q(114)}<p>据我的了解，眼罩小哥是绝对、绝对、绝对不会想我们打扰他跟樱遥同学一起看电影的，而且他绝对会选一个人少的场次😇</p>`},
  {f:141,t:'07/26 01:06',body:'<p>樱遥正好跟我在一个兼职群里，我拿到了他们便利店这周的排班，明天樱遥有一个晚班17:00-22:00。</p>'},
  {f:150,t:'07/26 01:17',ban:'7天',body:`${Q(145)}<p>😜那咋，K腿毛喊黑手封我啊。</p>`},
  {f:185,t:'07/26 01:53',body:'<p>既然楼主死了，我来坐庄吧。</p><p><a class="thread-link" data-thread="stk-live">[黑市第一届全民追踪大赛 冠军：50000善]</a></p>'}
 ]
},
{
 id:'stk-live',board:'dog',icon:'🐶',title:'【直播】黑市第一届全民追踪大赛 冠军：50000善',replies:2831,status:'已结束',live:true,excerpt:'一场由论坛用户自发组织、站长半默许监管的追踪直播，最终无人真正跟进电影院。',posts:[
  {f:1,t:'07/26 01:52',trip:'🚓',body:`<p>黑市第一届非官方全民追踪大赛，欢迎来玩！</p><p>我氪金了，有楼主权限，能控楼。奖金50000善✌️😘✌️，打赏随地掉落。</p><p><b>目标人物</b></p>${ATT('樱遥Profile.JPG')}${ATT('苏枋隼飞Profile.JPG')}<p>电影院出没时间段08:00~17:00，22:00~0:00；附近10家电影院购票系统已监控。</p>`},
  {f:5,t:'07/26 02:01',name:'MASTER',trip:'MASTER',role:'master',body:'<p>🤯楼主有备而来啊，还做了这么精美的档案图，抱走。</p><p>这次我睁一只眼闭一只眼，希望你控好楼。这俩都还是未成年，闹出什么事就不好办了。</p>'},
  {f:41,t:'07/26 09:27',body:`<p>我就在店里当班，去收拾他们隔壁桌看了一眼，你们猜在干嘛？那个女生押囚犯一样押着小眼罩填报名表！</p>${ATT('20250726.JPG')}${R(999,'可惜，刚嗑上')}`},
  {f:58,t:'07/26 09:32',body:`<p>用PS复原了一下报名表透视，这样方便看。</p>${ATT('报名表.JPG')}${R(299,'感恩')}`},
  {f:97,t:'07/26 09:38',body:'<p>不是，眼罩根本就是乱答啊。</p><p>身高：178m？？兴趣：架空幻想生物？？梦想：解放奴隶？？语言：腹语、唇语、樱语？？</p>'},
  {f:651,t:'07/26 14:54',body:`<p>眼罩打算在咖啡店坐多久，我来半个小时了看他动都没动。</p>${ATT('帅哥撩发.jpg')}${R(999,'🤤哥好美')}`},
  {f:735,t:'07/26 15:30',body:`<p>散了吧大家，我要撤了。这玩意一本村上春树摊开摆那，一个小时都没翻，盯着外面发呆。</p>${ATT('发呆.JPG')}${R(999,'后脑勺圆圆的，一看家长从小就给睡得很好')}`},
  {f:748,t:'07/26 15:44',body:`${Q(735)}<p>大佬请留步！！！你们看，对面那个便利店，店员是谁，黑白头发的！</p>${ATT('锤.JPG')}`},
  {f:1187,t:'07/26 19:47',body:'<p>总结一下苏枋君的路线：</p><p>① Pâtisserie Lumière<br>② 長崎本家「匠」<br>③ 京菓子司「一瞬」<br>④ 星巴克<br>⑤ Atelier Saisonnier<br>⑥ 茶庵「木与果」<br>⑦ 现烤卡仕达专门店<br>⑧ 甘味処「一丸」</p>'},
  {f:1201,t:'07/26 19:52',body:`${Q(1187)}<p>大包小包的不会都是买给樱遥的吧😲</p>${ATT('左手一堆右手一堆怀里还捧了一堆.JPG')}`},
  {f:1222,t:'07/26 19:55',body:'<p>结合手袋包装，可能是：博多甘王草莓蛋糕、金箔五三烧、季节生菓子礼盒、花束、卡仕达蛋挞、三色团子……</p>'+R(6666,'大师，太牛了，我跪了！不是，哥也太用心了😅')},
  {f:1299,t:'07/26 20:00',body:`<p>喜报——苏神已抵达便利店，门开了！进去了！</p>${ATT('震惊猫猫.JPG')}`},
  {f:2734,t:'07/27 08:41',body:`${Q(2727)}<p>一句话省流：没有冠军。</p><p>小队B被小太子用一盒蛋挞和一堆牛奶收买，全军覆没；小队A无一人成功跟到电影院，线索在电影院断了。</p>`},
  {f:2737,t:'07/27 08:45',name:'NONONO',trip:'🥥',role:'master',body:`${Q(2734)}<p>请你收回最后一句话。苏枋同学和樱同学是正直的朋友关系，两个高中生，15岁，是不会、没有资质去LOVE HOTEL这样的【廉价情色场所】进行开房间活动。已取证，谢谢😄</p>`},
  {f:2810,t:'07/27 09:54',body:`<p>谢邀，人在LOVE HOTEL，刚跟女友打完第7炮😝特来领赏付房费！</p><p>我们应该是最后目击证人。描述：简直就是情侣！旁若无人激情四射，热吻，互摸，伸舌头！</p>${ATT('高清色块糊图.JPG')}${PAY(10000,ATT('热吻实锤.JPG')+'<p><b>解锁后：</b>前景是一对自拍情侣；前两排的目标人物正襟危坐，中间隔着爆米花和可乐。</p>')}${R(50000,'冠军就是你🎊')}`},
  {f:2751,t:'07/27 09:00',name:'MASTER',trip:'MASTER',role:'master',body:'<p>那楼主，现在怎么定输赢？再侃下去没什么意义，该锁楼了，总不能一直打扰人家生活吧。</p>'}
 ]
},
{
 id:'marriage',board:'dog',icon:'🐶',title:'【婚恋】🥺对象A10/BBA/颜值9小美，本人A0/11路/颜值9小帅，我俩能成吗👉👈',replies:534,status:'热议',excerpt:'看似豪门恋爱求助，实际上槽点多到管理员无需查UID便能闻出楼主是谁。',posts:[
  {f:1,t:'07/22 21:51',trip:'🥺',body:'<p>瑟瑟发抖🥺预感明天就会有个贵妇甩我支票，让我离开她儿子🥺</p><p>对象什么都好，唯一不好就是离开我会死🥺</p><p>唉🥺如果未来婆婆给我1000万，我就答应🥰</p>'},
  {f:32,t:'07/23 03:11',body:`${Q(29)}<p>🥺真的，除了我同事，现生没见过比我更帅的男孩子了。</p><p>对象只美，大家闺秀那挂，经常被本人帅成花痴。</p>`,ip:'219.176.85.122'},
  {f:533,t:'07/24 20:45',body:'<p>我都不要1000万，给我10万就好，能付两个月房租😼</p>'},
  {f:534,t:'07/24 20:46',body:`${Q(533)}<p>分手费只要10万吗宝宝😩那你对象还真是个赔钱货🤣🤣🤣</p>`,ip:'219.176.85.122'}
 ]
}
];

const content = document.querySelector('#content');
const toast = document.querySelector('#toast');
const modal = document.querySelector('#genericModal');
const modalBody = document.querySelector('#modalBody');

function persist(){
 localStorage.setItem('bm-account',state.account);
 localStorage.setItem('bm-board',state.board);
 localStorage.setItem('bm-coins',String(state.coins));
 document.querySelector('#coinCount').textContent=state.coins;
}
function notify(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function goHome(board=state.board){state.page='home';state.threadId=null;state.board=board;persist();renderHome()}
function setBoard(board){
 if(board==='bird') return showBirdGate();
 state.board=board;state.page='home';persist();syncNav();renderHome();
}
function syncNav(){
 document.querySelectorAll('.board-switch').forEach(b=>b.classList.toggle('active',b.dataset.board===state.board));
 document.querySelectorAll('.account').forEach(b=>b.classList.toggle('active',b.dataset.account===state.account));
 document.body.classList.toggle('admin-mode',state.admin);
 document.querySelector('#mailBadge').style.display=state.mailUnread?'inline-block':'none';
 document.querySelector('.side-link[data-page="profile"]').style.display=state.account==='land'?'block':'none';
 document.querySelector('.mail-link').style.display=state.account==='land'?'block':'none';
}
function renderHome(){
 syncNav();
 const list=threads.filter(t=>t.board===state.board);
 const boardName=state.board==='cat'?'猫版 · 悬赏区':'狗版 · 自由搏击区';
 content.innerHTML=`
 <section>
  <div class="section-head"><div><p class="eyebrow">FOUND-DOG.ONLINE / ${state.account==='land'?'REGISTERED':'GUEST'}</p><h1>${state.board==='cat'?'😼':'🐶'} ${boardName}</h1><p>${state.board==='cat'?'金钱开路，使命必达。寻宠、寻物、寻人，或其他说不出口的答案。':'八卦吹水一条龙。生活、职场、技术、婚恋与未经证实的本地传闻。'}</p></div><button class="new-post" id="newPostBtn">＋ 发布</button></div>
  <div class="dashboard">
   <div class="notice-card"><b>📢 站长权威发布</b><br>未完成的悬赏将在发布日起60天后关闭并锁楼。狗版主题满7天后可能碎片化归档。</div>
   <div class="stats-card"><div class="stat"><b>${state.board==='cat'?'101399':'2831'}</b>今日最高善币</div><div class="stat"><b>2781</b>今日在线</div><div class="stat"><b>4198</b>新增回复</div><div class="stat"><b>2</b>官方账号</div></div>
  </div>
  <div class="toolbar"><button class="filter-btn active">最新回复</button><button class="filter-btn">热度</button><button class="filter-btn">只看精华</button><button class="filter-btn" data-search>搜索</button></div>
  <div class="topic-list">${list.map(topicCard).join('')}</div>
 </section>`;
 bindCommon();
 document.querySelector('#newPostBtn').onclick=openNewPost;
 document.querySelector('[data-search]').onclick=openSearch;
}
function topicCard(t){
 const badges=[t.live?'<span class="badge live">LIVE</span>':'',t.featured?'<span class="badge pay">高亮</span>':'',`<span class="badge ${t.status.includes('结束')?'closed':'open'}">${esc(t.status)}</span>`].join('');
 return `<article class="topic-card ${t.board==='dog'?'dog':''}" data-thread="${t.id}"><div class="topic-icon">${t.icon}</div><div><h2 class="topic-title">${badges}${t.hot?'<span class="hot">HOT</span> ':''}${esc(t.title)}</h2><div class="topic-excerpt">${esc(t.excerpt)}</div></div><div class="topic-meta"><b>💬 ${t.replies}</b>${t.bounty?`🐠 ${t.bounty}`:'最新 07/27'}</div></article>`;
}
function renderThread(id){
 const t=threads.find(x=>x.id===id);if(!t)return;
 if(t.status.includes('仅注册')&&state.account==='water'){return renderLocked(t)}
 state.page='thread';state.threadId=id;window.scrollTo(0,0);
 content.innerHTML=`
  <div class="breadcrumbs"><a data-home>首页</a> / <a data-board-link>${t.board==='cat'?'猫版':'狗版'}</a> / ${esc(t.title)}</div>
  <div class="thread-banner"><button class="menu-dot">▼</button><div class="bounty">${t.bounty?`🐠 × ${t.bounty}`:`${t.icon} ${t.board==='dog'?'DOG BOARD':'CAT BOARD'}`}</div><h1>${esc(t.title)}</h1><div>${t.status.includes('未解决')?'[未解决]':'['+esc(t.status)+']'}　💬 ${t.replies}</div></div>
  ${t.supporters?`<p class="supporters">🙏 ${esc(t.supporters)}</p>`:''}
  <div class="thread-tools"><div class="tool-group"><button class="filter-btn active" data-filter="all">全部</button><button class="filter-btn" data-filter="image">只看图片</button><button class="filter-btn" data-filter="official">只看官方</button><button class="filter-btn" data-filter="reward">只看打赏</button></div><div class="tool-group"><button class="filter-btn" data-reverse>倒序</button><button class="filter-btn" data-jump-open>跳楼</button></div></div>
  <div id="postList">${renderPosts(t.posts)}</div>
  <div class="pagination"><button class="active">当前精选</button><button>1</button><button>…</button><button>${Math.ceil(t.replies/25)}</button></div>
  <form class="reply-box" id="replyForm"><b>善人さん，留下你的发言</b><textarea id="replyText" maxlength="500" placeholder="${state.account==='water'?'游客组不可发言，请切换到陆党。':'新号注册一小时后才可发言……'}"></textarea><footer><span id="charCount">0/500</span><button class="primary-btn" type="submit">匿名发布</button></footer></form>`;
 bindCommon();bindThread(t);
}
function renderPosts(posts){
 const filtered=posts.filter(p=>{
  if(state.threadFilter==='image')return /attachment|fake-image/.test(p.body);
  if(state.threadFilter==='official')return ['admin','master','system','ai'].includes(p.role);
  if(state.threadFilter==='reward')return /reward-card/.test(p.body);
  return true;
 });
 return filtered.map(postCard).join('')||'<div class="empty-state">该筛选下没有楼层。</div>';
}
function postCard(p){
 const name=p.name||'善人さん';
 const roleLabel=p.role==='admin'?'管理员':p.role==='master'?'官方':p.role==='ai'?'AI':p.role==='fake'?'疑似披皮':p.role==='system'?'系统':'';
 return `<article class="post ${p.role||''} ${p.ban?'banned':''}" id="floor-${p.f}" data-post-body="${esc(p.body)}">
  <div class="mod-panel">UID: ${p.trip||'anonymous'}　IP: ${p.ip||'隐藏'}　[查看UID] [封禁] [删除] [标记] [私信]</div>
  <header class="post-head"><span class="floor" data-copy-floor="${p.f}">#${p.f}</span><span class="name">${esc(name)}</span>${roleLabel?`<span class="role ${p.role}">${roleLabel}</span>`:''}<span>|</span><span>${p.t}</span>${p.trip?`<span>|</span><span class="trip">${esc(p.trip)}</span>`:''}${p.ban?`<span class="ban-note">已封禁 ${p.ban}</span>`:''}<div class="post-actions"><button data-quote="${p.f}">回复</button><button data-tip="赞 +1">👍</button><button data-tip="踩 -1">👎</button><button data-tip="打赏">打赏</button></div></header>
  <div class="post-body">${p.body}</div>
 </article>`;
}
function bindThread(t){
 document.querySelector('[data-home]').onclick=()=>goHome(t.board);
 document.querySelector('[data-board-link]').onclick=()=>goHome(t.board);
 document.querySelectorAll('[data-filter]').forEach(btn=>btn.onclick=()=>{state.threadFilter=btn.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===btn));document.querySelector('#postList').innerHTML=renderPosts(t.posts);bindPostActions()});
 document.querySelector('[data-reverse]').onclick=()=>{t.posts.reverse();document.querySelector('#postList').innerHTML=renderPosts(t.posts);bindPostActions()};
 document.querySelector('[data-jump-open]').onclick=()=>openJump(t);
 const ta=document.querySelector('#replyText');ta.oninput=()=>document.querySelector('#charCount').textContent=`${ta.value.length}/500`;
 document.querySelector('#replyForm').onsubmit=e=>{e.preventDefault();if(state.account==='water')return notify('游客组不可发言');if(!ta.value.trim())return;const max=Math.max(...t.posts.map(p=>p.f));t.posts.push({f:max+1,t:new Date().toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'}),trip:'LOCAL',body:`<p>${esc(ta.value).replace(/\n/g,'<br>')}</p>`});t.replies++;renderThread(t.id);notify('匿名发布成功（仅保存在本机）')};
 bindPostActions();
}
function bindPostActions(){
 document.querySelectorAll('[data-quote]').forEach(b=>b.onclick=()=>{const ta=document.querySelector('#replyText');if(ta){ta.value+=`> 回复 #${b.dataset.quote}\n`;ta.focus();ta.dispatchEvent(new Event('input'))}});
 document.querySelectorAll('[data-tip]').forEach(b=>b.onclick=()=>{if(b.dataset.tip==='打赏')openTipModal();else notify(b.dataset.tip)});
 document.querySelectorAll('[data-copy-floor]').forEach(b=>b.onclick=()=>{navigator.clipboard?.writeText(`#${b.dataset.copyFloor}`);notify(`已复制 #${b.dataset.copyFloor}`)});
 document.querySelectorAll('[data-jump]').forEach(q=>q.onclick=()=>document.querySelector(`#floor-${q.dataset.jump}`)?.scrollIntoView({behavior:'smooth',block:'center'}));
 document.querySelectorAll('[data-attachment]').forEach(a=>a.onclick=()=>openAttachment(a.dataset.attachment));
 document.querySelectorAll('.unlock-btn').forEach(btn=>btn.onclick=()=>unlock(btn.closest('.paywall')));
 document.querySelectorAll('.thread-link').forEach(a=>a.onclick=()=>renderThread(a.dataset.thread));
}
function unlock(box){const price=Number(box.dataset.price);if(state.coins<price)return notify('善币不足');if(!confirm(`支付 ${price} 善币查看？`))return;state.coins-=price;box.classList.add('unlocked');persist();notify(`已支付 ${price} 善币`)}
function renderLocked(t){content.innerHTML=`<div class="breadcrumbs"><a data-home>首页</a> / ${esc(t.title)}</div><div class="empty-state locked-page"><h1>&gt;&gt;&gt;您所在的[游客组]没有查看权限&lt;&lt;&lt;</h1><p>切换为“陆党”后可浏览仅注册可见主题、打赏、信箱及舞黄分区。</p><button class="primary-btn" id="switchLand">切换为陆党</button></div>`;document.querySelector('[data-home]').onclick=()=>goHome(t.board);document.querySelector('#switchLand').onclick=()=>{state.account='land';persist();syncNav();renderThread(t.id)}}
function renderProfile(){
 if(state.account==='water'){notify('游客组没有个人主页');return goHome()}
 state.page='profile';content.innerHTML=`<section><div class="profile-card"><div class="avatar">陆</div><div><p class="eyebrow">SIGNED IN / UID GROUP</p><h1>匿名陆党</h1><p>识别码仅在单个串内有效。主页不会公开真实身份。</p></div></div><div class="stats"><article><span>善币</span><strong>${state.coins}</strong></article><article><span>发帖记录</span><strong>12</strong></article><article><span>获赞</span><strong>487</strong></article></div><h2>最近记录</h2><div class="history-card">给“风铃眼罩佬真身究竟是？？！！”点赞</div><div class="history-card">支付 1000 善查看跟踪情报</div><div class="history-card">收藏：黑市第一届全民追踪大赛</div><div class="history-card"><button class="primary-btn" id="toggleAdminHere">${state.admin?'退出':'进入'} BLACKHAND 管理视角</button></div></section>`;document.querySelector('#toggleAdminHere').onclick=toggleAdmin}
function renderMail(){
 if(state.account==='water')return goHome();state.mailUnread=false;localStorage.setItem('bm-mail-read','1');syncNav();content.innerHTML=`<section><div class="section-head"><div><p class="eyebrow">PRIVATE MESSAGE</p><h1>📬 信箱</h1></div></div><div class="mail-card unread"><b>善人さん</b><small>07/24 20:16</small><p>您好，想操您。</p></div><div class="mail-card"><b>💓 心神</b><small>07/24 20:49</small><p>关于兼职的事，看到了回复请联系。</p></div><div class="mail-card"><b>系统通知</b><small>今日</small><p>每日登录奖励 +1 善币。</p></div></section>`}
function renderHelp(){content.innerHTML=`<section><div class="section-head"><div><p class="eyebrow">FIRST AID</p><h1>第一次使用“日行一善”</h1></div></div><div class="help-card"><h3>☝️ 匿名论坛不一定匿名</h3><p>游客发言可能显示IP；注册用户显示串内识别码。不要填写真实姓名、联系方式或其他私人信息。</p></div><div class="help-card"><h3>✌️ 官方AI与披皮</h3><p>官方账号名称会加粗并带“AI”标识。若名称旁同时出现普通识别码，例如 Gemini | mS0jX6，则通常是善人披皮。</p></div><div class="help-card"><h3>👌 版面</h3><p>😼猫版用于悬赏；🐶狗版用于八卦吹水；🐦鸟版需累计充值一万善后开放。</p></div><div class="help-card"><h3>BLACKHAND</h3><p>管理员已沦为吉祥物。日常被艾特调戏，不保证回复。</p></div></section>`}
function showBirdGate(){content.innerHTML=`<div class="empty-state"><h1>🐦 聚宝楼</h1><p>累计氪条达到 10000 善后开放。传闻可交易黑科技、地下情报与不便在公开版流通的附件。</p><p>当前氪条：0 / 10000</p><button class="primary-btn" onclick="history.back()">我只是路过</button></div>`}
function openNewPost(){if(state.account==='water')return notify('游客组不可发帖');openModal(`<h2>发布新主题</h2><label>版面<select id="npBoard"><option value="dog">🐶 狗版</option><option value="cat">😼 猫版</option></select></label><label>标题<input id="npTitle" maxlength="50" placeholder="标题越长，沉得越快。"></label><label>正文<textarea id="npBody" maxlength="600"></textarea></label><button class="primary-btn" id="npSubmit">发布</button>`);document.querySelector('#npSubmit').onclick=()=>{const title=document.querySelector('#npTitle').value.trim(),body=document.querySelector('#npBody').value.trim();if(!title||!body)return notify('标题和正文不能为空');threads.unshift({id:'local-'+Date.now(),board:document.querySelector('#npBoard').value,icon:document.querySelector('#npBoard').value==='cat'?'😼':'🐶',title,replies:0,status:'开放',excerpt:body.slice(0,50),posts:[{f:1,t:'刚刚',trip:'LOCAL',body:`<p>${esc(body).replace(/\n/g,'<br>')}</p>`}]});closeModal();setBoard(document.querySelector('#npBoard')?.value||state.board);notify('发布成功（仅保存在本机）')}}
function openSearch(){openModal(`<h2>搜索黑市</h2><input id="searchInput" placeholder="例如：士力架、BLACKHAND、樱遥"><div id="searchResults"></div>`);const input=document.querySelector('#searchInput');input.oninput=()=>{const q=input.value.trim().toLowerCase();const result=q?threads.filter(t=>(t.title+t.excerpt+t.posts.map(p=>p.body).join('')).toLowerCase().includes(q)):[];document.querySelector('#searchResults').innerHTML=result.map(t=>`<div class="history-card"><b>${esc(t.title)}</b><p>${esc(t.excerpt)}</p><button class="filter-btn" data-open-search="${t.id}">打开</button></div>`).join('')||'<p>输入关键词开始搜索。</p>';document.querySelectorAll('[data-open-search]').forEach(b=>b.onclick=()=>{closeModal();renderThread(b.dataset.openSearch)})}}
function openJump(t){openModal(`<h2>跳转楼层</h2><input id="jumpFloor" type="number" placeholder="例如 3000"><button class="primary-btn" id="jumpGo">跳转</button>`);document.querySelector('#jumpGo').onclick=()=>{const f=document.querySelector('#jumpFloor').value;closeModal();const el=document.querySelector(`#floor-${f}`);if(el)el.scrollIntoView({behavior:'smooth',block:'center'});else notify('当前精选楼层中没有该楼')}}
function openTipModal(){openModal(`<h2>打赏</h2><p>善币余额：${state.coins}</p><label>金额<input id="tipAmount" type="number" min="10" value="99"></label><label>备注<input id="tipNote" placeholder="感恩有你"></label><button class="primary-btn" id="tipGo">我真棒</button>`);document.querySelector('#tipGo').onclick=()=>{const n=Number(document.querySelector('#tipAmount').value);if(n>state.coins)return notify('善币不足');state.coins-=n;persist();closeModal();notify(`打赏 ${n} 善成功`)}}
function openAttachment(name){const lb=document.querySelector('#lightbox');document.querySelector('#lightboxPhoto').innerHTML=`<div>【${esc(name)}】<br><small>论坛附件预览占位图<br>设备：未知　EXIF：已清除</small></div>`;lb.hidden=false}
function openModal(html){modalBody.innerHTML=html;modal.hidden=false}
function closeModal(){modal.hidden=true;modalBody.innerHTML=''}
function toggleAdmin(){state.admin=!state.admin;syncNav();notify(state.admin?'BLACKHAND 管理视角已开启':'已退出管理视角');if(state.page==='profile')renderProfile()}
function bindCommon(){document.querySelectorAll('[data-thread]').forEach(x=>x.onclick=()=>renderThread(x.dataset.thread))}

document.querySelector('#homeSeal').onclick=()=>goHome();
document.querySelectorAll('.board-switch').forEach(b=>b.onclick=()=>setBoard(b.dataset.board));
document.querySelectorAll('.account').forEach(b=>b.onclick=()=>{state.account=b.dataset.account;persist();syncNav();notify(state.account==='land'?'已切换为陆党':'已切换为游客水党');if(state.page==='profile'||state.page==='mail')goHome()});
document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>{const p=b.dataset.page;if(p==='home')goHome();if(p==='profile')renderProfile();if(p==='mail')renderMail();if(p==='help')renderHelp()});
document.querySelector('#adminToggle').onclick=toggleAdmin;
document.querySelector('#mobileMenuBtn').onclick=()=>document.querySelector('#sidebar').classList.toggle('open');
document.querySelectorAll('[data-close-modal]').forEach(b=>b.onclick=closeModal);
modal.onclick=e=>{if(e.target===modal)closeModal()};
document.querySelectorAll('[data-close-lightbox]').forEach(b=>b.onclick=()=>document.querySelector('#lightbox').hidden=true);
document.querySelector('#lightbox').onclick=e=>{if(e.target.id==='lightbox')e.currentTarget.hidden=true};

persist();syncNav();renderHome();
