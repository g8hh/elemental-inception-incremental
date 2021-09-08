var jsonMessages = {
	"tutorialMessage" : {
		"flush" : "如果 红晕 设置为 true 消息将在添加其内容之前清除聊天框并重置 聊天修剪器 延迟",
		
		"loreText" : "将添加到相应聊天框的当前内容中的内容（刷新后）",
		"loreFreezeDuration": "聊天 修剪器 不会接触相应聊天机器人的时间段（以毫秒为单位）。 负值是永久禁用（直到下一条消息）",
		"gameplayText" : "和上面一样",
		"gameplayFreezeDuration": "和上面一样",
		
		"activeElements" : "Gameplay and chatTrimmer are frozen until all active elements are completed",
		"firstActiveElement" : "button/progressBar/none - which element is activated first",
		"progressBar" : {
			"barText": "出现在栏上的文字",
			"duration": "进度条的持续时间（以毫秒为单位）",
		},
		"buttonAvailable": "If set to true will make button visible and clickable once",
		
		"chainedMessage": "If this exists then after this msg is complete next message will fire instead of resuming gameplay",
		"chainedMessageDelay": "Delay between finish of this msg and firing of the next - gameplay is still frozen, but chatTrimmer is not",
		
		"eventId": "出现此消息时将立即触发的事件 ID"
	},
	"outro0" : {
		"flush" : true,
		"loreText" : "传说炼金术士所拥有的知识来自于四种元素的结合。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro1",
		"chainedMessageDelay": 50
	},
	"outro1" : {
		"flush" : true,
		"loreText" : "所以我最初的计划是同时触摸每个 宝珠。 从技术上讲，手套只能容纳一个元素，但这样我可以同时连接到所有元素。 我以前试过。 完全失败 - 元素之间的相互作用导致所有 Orb 自行清空。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro2",
		"chainedMessageDelay": 50
	},
	"outro2" : {
		"flush" : true,
		"loreText" : "但现在它们不再是真正的球体了。 我从他们的底座上取下了所有四个魔像，并将它们放在一个小圆圈中。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro3",
		"chainedMessageDelay": 50
	},
	"outro3" : {
		"flush" : true,
		"loreText" : "好的，我准备好了。 我会拿起我的元素手套，用我的一根手指触摸每个魔像。 希望结合的元素能够治愈我的父亲。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Reach out to Golems",
			"duration": 2000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "outro4",
		"chainedMessageDelay": 50
	},
	"outro4" : {
		"flush" : true,
		"loreText" : "刺眼的光。 愿景。 老人向我跑来。 一声巨响，穿透了我存在的每一个细胞。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro5",
		"chainedMessageDelay": 50
	},
	"outro5" : {
		"flush" : true,
		"loreText" : "“你不能干涉元素！你做了什么？！回到你原来的地方，再也不这样做了！”",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro6",
		"chainedMessageDelay": 50
	},
	"outro6" : {
		"flush" : true,
		"loreText" : "黑暗。 安静和安慰。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "progressBar",
		"progressBar" : {
			"barText": "",
			"duration": 4000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "outro7",
		"chainedMessageDelay": 50
	},
	"outro7" : {
		"flush" : true,
		"loreText" : "我慢慢醒来。 我还在我老房子的阁楼里。 至少墙壁看起来很相似。 房间里的每一个可移动的部件都消失了。 发生了什么？ 发生了什么？！",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro8",
		"chainedMessageDelay": 50
	},
	"outro8" : {
		"flush" : true,
		"loreText" : "什么都没有。<br>我不记得听到那个叫声后发生了什么。<br>我可能不记得了，但我知道一件事确实发生了变化。<br>我使用的元素手套现在与我的整个手臂融合在一起。 我不能把它取下来。 我不需要把它取下来。 我想我可以用它回到那里。 找出另一边是什么。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro9",
		"chainedMessageDelay": 50
	},
	"outro9" : {
		"flush" : true,
		"loreText" : "等等，没有。 我试着停止我飞驰的想法和注意力。 我得去看我父亲。 他是我能够在我的生活中走这么远的全部原因。 在他最虚弱的时候，我现在不能离开他。 我要走了。 我需要移动。 为什么我动不了？！",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "你正试图移动。 看起来不太好。",
			"duration": 20000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "outro10",
		"chainedMessageDelay": 50
	},
	"outro10" : {
		"flush" : true,
		"loreText" : "在感觉像是永恒之后，我看到我的左手拇指有轻微的抽搐。 我想我会没事的。 我只需要几分钟恢复，我就出去。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "outro11",
		"chainedMessageDelay": 50
	},
	"outro11" : {
		"flush" : true,
		"loreText" : "感谢您玩我游戏的介绍阶段。 \\('_' ) <br><br> 您可以随时刷新页面以重置。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "theEnd"
	},
	"intro0" : {
		"flush" : true,
		"loreText" : "欢迎使用\“第一位阿尔卡史学家 \”或\“我还没有确定名称-元素 \”的原型。<br> <br>目前只有第1到第3阶段可用。 第1阶段比一个教程要大，而比所谓的“第一次重置之路”也要小。<br> <br>我很乐意听到您的任何反馈，或者作为评论 游戏的帖子，直接消息或电子邮件。<br> <br>如果您将游戏留在非活动窗口中，则会累积时间，然后将其用于将游戏速度提高至3倍。",
		"loreFreezeDuration": -1,
		"gameplayText" : "点击继续按钮以继续",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro1",
		"chainedMessageDelay": 50
	},
	"intro1" : {
		"flush" : true,
		"loreText" : "关于这个消息框我想说几句:当有东西出现在这里时，它通常会冻结游戏玩法。<br/><br/>此框通常包含知识，而下方的小框将包含游戏玩法提示或通过按钮激活的动作。",
		"loreFreezeDuration": -1,
		"gameplayText" : "有时在按下按钮之后，您必须等待操作完成。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "",
			"duration": 2000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "intro2",
		"chainedMessageDelay": 50
	},
	"intro2" : {
		"flush" : true,
		"loreText" : "每条消息都被复制到您的个人日志中。在那里你可以在空闲时重读所有的东西。<br/>好了，是时候开始讲真实的故事了。",
		"loreFreezeDuration": -1,
		"gameplayText" : "其他时候你得先等一下，然后按下按钮继续讲故事。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "progressBar",
		"progressBar" : {
			"barText": "加载介绍场景...",
			"duration": 2000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "intro3",
		"chainedMessageDelay": 50
	},
	"intro3" : {
		"flush" : true,
		"loreText" : "我的导师给我讲了一个关于元素的故事。<br/><br/>传说有一位聪明的炼金术士，他精通我们所知的世界的所有基本知识。",
		"loreFreezeDuration": -1,
		"gameplayText" : "文本也可以以动画的方式消失。",
		"gameplayFreezeDuration": 500,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro4",
		"chainedMessageDelay": 2550
	},
	"intro4" : {
		"flush" : true,
		"loreText" : "他能够控制所有的元素并产生堆积如山的黄金，改变物质的性质等等。<br> <br> “呃,童话故事…”这是我通常说的。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro5",
		"chainedMessageDelay": 50
	},
	"intro5" : {
		"flush" : true,
		"loreText" : "但现在我父亲已经病倒了，这是我最后的希望了。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro6",
		"chainedMessageDelay": 50
	},
	"intro6" : {
		"flush" : true,
		"loreText" : "我不想成为上帝。如果可能的话，我想去。<br><br>但我只是想尝试研究元素的神秘艺术。也许他们会引导我发现一种未知的药物，可以帮助我的父亲。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro7",
		"chainedMessageDelay": 50
	},
	"intro7" : {
		"flush" : true,
		"loreText" : "学者们只给他一个月的时间。<br><br>时间不多了。带着极大的动力，我朝图书馆走去。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro8",
		"chainedMessageDelay": 50
	},
	"intro8" : {
		"flush" : true,
		"loreText" : "传说告诉炼金术士拥有的知识来自于将四个元素结合在一起。<br> <br>所以我将学习元素操作。 对于大多数人来说，这就像一种爱好。 他们喜欢称呼自己的大多数“元素主义者”，只是坐在他们的小操场上，创造浮灯或其他装饰性小玩意。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro9",
		"chainedMessageDelay": 50
	},
	"intro9" : {
		"flush" : true,
		"loreText" : "在图书馆里读了几天后，我开始了解基础知识。 您需要开始进行实验的只是元素手套。",
		"loreFreezeDuration": -1,
		"gameplayText" : "开始你的搜索",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "搜索附近的商店。应该不难找到。",
			"duration": 5000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "intro10",
		"chainedMessageDelay": 50
	},
	"intro10" : {
		"flush" : true,
		"loreText" : "我在一家玩具店里以负担得起的价格找到了手套。 人们对他们的评价不高。 我希望我能比大多数人更好地使用它。<br> <br>手套本身非常有限。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro11",
		"chainedMessageDelay": 50
	},
	"intro11" : {
		"flush" : true,
		"loreText" : "所以我需要其他组件。它们被称为元素球。如果没有专用的容器，元素就不能保存它们的形式。魔法球的另一个好处是它们的安全性。由于球体内部有一个小水晶，它可以将元素压缩成更密集的形式，并将任何潜在的溢出物重定向到虚空中。",
		"loreFreezeDuration": -1,
		"gameplayText" : "将球体放在基座上，并在它们周围留出一些空间。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "",
			"duration": 2000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "intro12",
		"chainedMessageDelay": 50
	},
	"intro12" : {
		"flush" : true,
		"loreText" : "我该怎么形容呢?生锈的底座，破裂的管道——这是一个更大的混乱之上的混乱。至少压缩晶体似乎处于工作状态。这对于学习经验来说已经足够了。所以我的研究开始于这个凌乱的房间。很快我遇到了最大的障碍。元素手套一次只能处理一个元素。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro13",
		"chainedMessageDelay": 50
	},
	"intro13" : {
		"flush" : true,
		"loreText" : "我怎么把4个结合起来呢?<br/>看起来球体也会被禁用，直到我给它们注入一点元素。这将为该元素创建一个基础，支持Orb的全部功能。一旦球体处于活动状态，就可以通过管道和阀门操纵它。祖母的房间里似乎有一些简单的机械设备，但一切都碎了。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro14",
		"chainedMessageDelay": 50
	},
	"intro14" : {
		"flush" : true,
		"loreText" : "通常，当两个元素恰好位于一个容器中时，它们会在微弱的闪光中发生干扰并消失。 好吧，我应该先开始研究各种可能性。 也许如果我更集中精力尝试一下，它的行为会有所不同吗？<br>好了，该开始尝试了。 书本理论是一回事，现实世界是另一回事。 我需要激活那些球体。",
		"loreFreezeDuration": -1,
		"gameplayText" : "开始实验。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro15",
		"chainedMessageDelay": 50
	},
	"intro15" : {
		"flush" : true,
		"loreText" : "好吧，使用乱抛垃圾在地板上乱扔垃圾，我应该能够用地球填充一个宝珠。 放手吧。<br> <br>好吧，在实际做任何事情之前还要做一件事。<br> <br>我决定让与宝珠的所有互动缓慢而稳定。 我不想通过点击太快来破坏它们。",
		"loreFreezeDuration": -1,
		"gameplayText" : "在所有宝珠下面都有一个指示器。你只能在球体完全变成绿色时点击它。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "intro16",
		"chainedMessageDelay": 50
	},
	"intro16" : {
		"flush" : true,
		"loreText" : "",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "theBeginning"
	},
	"reset0" : {
		"flush" : true,
		"loreText" : "我、我……我想我搞砸了。 没说元素珠有容量限制。 它应该浓缩元素并在溢出的情况下将多余的转移到另一个存在位面。<br><br>但发生了其他事情。 元素宝珠内部发生了巨大的内爆，不久之后，释放出的巨大元素浪潮让我飞过房间。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "progressBar",
		"progressBar" : {
			"barText": "从墙上的人形洞里出来。",
			"duration": 25000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset1",
		"chainedMessageDelay": 50
	},
	"reset1" : {
		"flush" : true,
		"loreText" : "情况的后果：我的身体已经分崩离析。 至少我是这么认为的。<br>每个 宝珠 中的元素都消失了。 这很糟糕，我努力收集了这么多。<br>机器看起来很好，但我的水晶爆炸了，对我的坦克造成了轻微的损坏。 我想我需要再次升级机器的坦克。",
		"loreFreezeDuration": -1,
		"gameplayText" : "修复损坏的组件并将所有部件恢复原状。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "reset1.1",
		"chainedMessageDelay": 50
	},
	"reset1.1" : {
		"flush" : true,
		"loreText" : "现在，对于 宝珠 内部的水晶。 嗯……奇怪。 水晶底座完好无损，但导致内爆的球体内部的压缩水晶正在高速振动。 我需要修理我的机器并测试这个晶体。",
		"loreFreezeDuration": -1,
		"gameplayText" : "修复损坏的组件并将所有部件恢复原状。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "",
			"duration": 36000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset2",
		"chainedMessageDelay": 50
	},
	"reset2" : {
		"flush" : true,
		"loreText" : "好的，我的整个设置已恢复正常工作。 让我们再次开始填充 宝珠。 当然，他们比我想象的要多得多。",
		"loreFreezeDuration": 2000,
		"gameplayText" : "再次开始填充 宝珠。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent1"
	},
	"reset3" : {
		"flush" : true,
		"loreText" : "另一个内爆。 我很惊讶地走回房间再次检查 宝珠。<br><br>振动的水晶发生了变化。 我从来没有在关于元素操纵的书中看到过这样的东西。 宝珠依旧像以前一样持有元素，但它的压缩晶体扩大了十倍。 我想知道当我再次填充它时会发生什么？ 我需要做一些调整，我会让机器再次运行。",
		"loreFreezeDuration": -1,
		"gameplayText" : "将转换后的 宝珠 放回基座上，并用它的一些元素填充它。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "",
			"duration": 2000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset4",
		"chainedMessageDelay": 50
	},
	"reset4" : {
		"flush" : true,
		"loreText" : "膨胀水晶亮了一秒，然后开始自行生成元素。 我是不是刚刚反转了溢出过程！？ 好吧，我仍然想知道如果我将它填充到再次内爆的程度会发生什么......",
		"loreFreezeDuration": 2000,
		"gameplayText" : "尝试用膨胀的水晶填充 宝珠。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent2"
	},
	"reset5" : {
		"flush" : true,
		"loreText" : "另一个 宝珠 爆炸了，但这次花费的时间明显更长。 我不知道这对未来意味着什么，但现在我必须继续前进。 我没有其他想法。",
		"loreFreezeDuration": -1,
		"gameplayText" : "我做了一些准备，所以这次我是安全的。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "将机器重新安装回他们的码头。",
			"duration": 6000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset6",
		"chainedMessageDelay": 50
	},
	"reset6" : {
		"flush" : true,
		"loreText" : "每个由碎片制成的 宝珠 周围的一些小调整和几个大冲击墙让我消散了大部分内爆余震。 多亏了维修，我花了更少的时间。",
		"loreFreezeDuration": 2000,
		"gameplayText" : "用膨胀的水晶填充 宝珠。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent1"
	},
	"reset7" : {
		"flush" : true,
		"loreText" : "我以为我只是开始刮新 宝珠 的容量，但似乎膨胀的晶体对 宝珠 的容量阈值产生了相反的影响。 这次溢出并没有引起内爆，而是压缩水晶与宝珠本身完全融合。<br>我需要测试我最新的意外创造。",
		"loreFreezeDuration": -1,
		"gameplayText" : "在安全的环境中测试转化的 宝珠。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Testing phase 1/2.",
			"duration": 4000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset8",
		"chainedMessageDelay": 50
	},
	"reset8" : {
		"flush" : true,
		"loreText" : "那是……眼睛？ 这颗宝珠的形状开始逐渐发生变化。 现在它看起来更像是一滴眼泪，里面的 元素 变成了两个小球体。<br>我觉得他们在看着我。 我觉得……很奇怪。 无论如何，它似乎在 宝珠 内部完全连接到另一个位面，并且能够双向引导疯狂数量的元素。 从它出来的输入管道会立即填满，我还提供容器。 嗯，这当然有帮助。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "测试阶段 2/2.",
			"duration": 4000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset9",
		"chainedMessageDelay": 50
	},
	"reset9" : {
		"flush" : true,
		"loreText" : "测试完成。 我想我应该尝试将其余的 宝珠 变成这个新实体。 我决定将它命名为“魔像”。 是时候再次启用我的机器了。",
		"loreFreezeDuration": 2000,
		"gameplayText" : "溢出剩余的球体之一",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"reset10" : {
		"flush" : true,
		"loreText" : "另一个宝珠变成了魔像。 我需要继续对剩余的球体做同样的事情。",
		"loreFreezeDuration": 2000,
		"gameplayText" : "溢出剩余的球体之一",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"reset11" : {
		"flush" : true,
		"loreText" : "我已将每个 宝珠 转换为它们的 魔像 状态。 是时候了。",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "reset12",
		"chainedMessageDelay": 50
	},
	"reset12" : {
		"flush" : true,
		"loreText" : "",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "theOutro"
	},
	"pun1" : {
		"loreText" : "<br><br><br>突然之间，没有什么特别感兴趣的事情发生。",
		"loreFreezeDuration": 35000,
		"gameplayText" : "",
		"gameplayFreezeDuration": 0,
		
		"firstActiveElement" : "none"
	},
	"pun2" : {
		"loreText" : "<br><br><br>在这一切之前，我尝试过钓鱼。 游泳并不顺利。<br>谁会想到在河底找不到未被发现的药物。",
		"loreFreezeDuration": 35000,
		"gameplayText" : "",
		"gameplayFreezeDuration": 0,
		
		"firstActiveElement" : "none"
	},
	"base0" : {
		"flush" : true,
		"loreText" : "地宝珠的底部已被填满。 现在我可以真正开始用地球填充它了。",
		"loreFreezeDuration": 1000,
		"gameplayText" : "第一次升级也出现在页面底部。",
		"gameplayFreezeDuration": 1000,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"base1" : {
		"flush" : true,
		"loreText" : "水球的底座已经完成。 最后，我应该能够充分利用 液化器 的潜力。",
		"loreFreezeDuration": 4000,
		"gameplayText" : "将液化器试剂罐装满",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"base2" : {
		"flush" : true,
		"loreText" : "气 宝珠 已上线。",
		"loreFreezeDuration": 2000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"base3" : {
		"flush" : true,
		"loreText" : "火宝珠激活。 有了 火 的力量，所有机器终于应该能够自动工作了。",
		"loreFreezeDuration": 4000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"elementGathered0" : {
		"flush" : true,
		"loreText" : "随着地供应的增加，我应该开始考虑激活另一个 宝珠。 <br><br>在宝珠附近生锈的床单下，我发现了一个液化器。 它有轻微损坏，但应该可以工作。",
		"loreFreezeDuration": 5000,
		"gameplayText" : "在扩展坞上安装机器。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "",
			"duration": 4000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "elementGathered0.2",
		"chainedMessageDelay": 50
	},
	"elementGathered0.2" : {
		"flush" : true,
		"loreText" : "机器准备好了。<br>我应该打开输入阀，希望 地 开始流入它。",
		"loreFreezeDuration": 4000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine0"
	},
	"elementGathered2" : {
		"flush" : true,
		"loreText" : "通过缓慢但稳定的获取 气 的方式，还可以进行其他一些升级。<br><br>我还找到了另一台机器的部件。 虽然其中一半以上丢失了，但我想我应该能够找到替代品。",
		"loreFreezeDuration": 5000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "正在寻找另一套机器零件。",
			"duration": 6000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "elementGathered2.2",
		"chainedMessageDelay": 50
	},
	"elementGathered2.2" : {
		"flush" : true,
		"loreText" : "另一台机器准备好了。 我在我父亲的车间找到了足够好的替换零件。<br><br> 有了燃烧器，我应该能够生产火。 很快我的机器就会有丢失的试剂。",
		"loreFreezeDuration": 8000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine2"
	},
	"elementGathered3" : {
		"flush" : true,
		"loreText" : "在房间的中央，一个新的部件被激活了——反应催化剂。 内部的火似乎提高了机器反应的效率。",
		"loreFreezeDuration": 5000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"upgradeBought0" : {
		"loreText" : "<br>现在我不需要手动填充 地。 终于解脱了。",
		"loreFreezeDuration": 5000,
		"gameplayText" : " | 随着游戏的进行，自动点击器会变得更好",
		"gameplayFreezeDuration": 5000,
		
		"firstActiveElement" : "none"
	},
	"upgradeBought2" : {
		"flush" : true,
		"loreText" : "当我修补反应调节器时，我注意到另一台机器的两半放在角落里。 我想如果周围有一些备件，我可以自己组装。",
		"loreFreezeDuration": 5000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "寻找机器零件。",
			"duration": 4000
		},
		"buttonAvailable": true
	},
	"upgradeBought2.2" : {
		"flush" : true,
		"loreText" : "锅炉准备好了。 它将帮助我创建 气。 可悲的是，为了自动化反应，我需要 火，所以暂时只能使用手动方法。",
		"loreFreezeDuration": 9000,
		"gameplayText" : "用一些水装满锅炉。",
		"gameplayFreezeDuration": 16000,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine2"
	},
	"upgradeBought13" : {
		"flush" : true,
		"loreText" : "很长一段时间，我认为这是一种装饰。 一个用黄铜合金制成的小火山。 显然是机器。<br>如果我再次升级反应催化剂，我应该能够建立一个正反馈循环来增加我的地球供应。",
		"loreFreezeDuration": 5000,
		"gameplayText" : "我建议在使用火山之前推动下一次反应催化剂升级。",
		"gameplayFreezeDuration": 15000,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"upgradeBought24" : {
		"flush" : true,
		"loreText" : "在子空间突破后，我的元素供应将急剧增加。 凭借我可以使用的大量元素，我可能会尝试创建自己的压缩晶体。 <br><br>它给了我有趣的新想法...",
		"loreFreezeDuration": 25000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"machineThresholdAmount-0" : {
		"flush" : true,
		"loreText" : "我意识到关于液化器的一些事情。 一旦地球流入其内部水箱，整个机器就开始在环绕整个房间的轨道上旋转。<br><br> 在移动时，它可以从管道中收集所需的元素。 当然它的阀门也需要打开。 当它到达码头时，它会在那里停一会儿。 似乎反应只能在对接时发生。<br><br>遗憾的是，如果没有试剂，它似乎什么也做不了。",
		"loreFreezeDuration": -1,
		"gameplayText" : "只有在阅读上述知识后才能继续。 机器相当复杂。",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "思考获取水的方法。",
			"duration": 7000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "machineThresholdAmount-0.2",
		"chainedMessageDelay": 50
	},
	"machineThresholdAmount-0.2" : {
		"flush" : true,
		"loreText" : "我想我想出了一种不使用试剂而使用我的手套手动强制反应的方法。<br><br>这将是低效的，但我可以通过轻敲水将液化器内的 4 个地球变成一些水 球体。",
		"loreFreezeDuration": 16000,
		"gameplayText" : "在液化器装满后尝试装满水球。",
		"gameplayFreezeDuration": 16000,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockElement1"
	},
	"machineThresholdAmount-1" : {
		"loreText" : "<br>锅炉 需要 火 才能运行，但我的手动方法应该仍然可行。 4 锅炉中的水会变成一些气。",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"machineThresholdAmount-2" : {
		"loreText" : "<br>看来手工打磨的末日已经临近了。 4 燃烧室中的气会变成一些火焰。",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"machineActivated0" : {
		"loreText" : "<br>是的！ 有用！ 现在我可以以 100% 的效率积水。 4 地 和 1 水 => 4 水意味着总体而言我仍然会损失一些。<br>但是随着水供应的增加，我可以开始考虑升级液化器并为我的下一个 宝珠 努力",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": 1,
		
		"firstActiveElement" : "none"
	}
};
/*
sendMessage(6,"For the whole time I thought it was a decoration. Volcano made with brass alloys. It's machine.<br>
If I upgrade Reaction Catalyst once more I should be able to make positive feedback loop to multiply my Earth supply.");


	sendMessage(12,);
*/
