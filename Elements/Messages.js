var jsonMessages = {
	"tutorialMessage" : {
		"flush" : "If flush is set to true message will clear chatbox before adding its content and reset chatTrimmer delays",
		
		"loreText" : "What will be added to current content of respective chatbox (after flushing)",
		"loreFreezeDuration": "Period of time in ms during which chatTrimmer won't touch respective chatbox. negative values are permament disable (until next message)",
		"gameplayText" : "Same as above",
		"gameplayFreezeDuration": "Same as above",
		
		"activeElements" : "Gameplay and chatTrimmer are frozen until all active elements are completed",
		"firstActiveElement" : "button/progressBar/none - which element is activated first",
		"progressBar" : {
			"barText": "text appearing on bar",
			"duration": "duration in ms of progress bar",
		},
		"buttonAvailable": "If set to true will make button visible and clickable once",
		
		"chainedMessage": "If this exists then after this msg is complete next message will fire instead of resuming gameplay",
		"chainedMessageDelay": "Delay between finish of this msg and firing of the next - gameplay is still frozen, but chatTrimmer is not",
		
		"eventId": "Id of an event that will fire as soon as this message appears"
	},
	"outro0" : {
		"flush" : true,
		"loreText" : "Legend tells that knowledge possessed by Alchemist came from combining four Elements together.",
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
		"loreText" : "So my plan at first was to touch every Orb at the same time. Technically the Glove can only hold one element, but this way I can connect to all elements at the same time. I've tried it before. Complete failure - the interactions between elements caused all Orbs to empty themselves.",
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
		"loreText" : "But now they aren't really Orbs any more. I removed all four Golems from their pedestals and put them in small circle.",
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
		"loreText" : "Alright, I'm ready. I will take my Elemental Glove and touch each Golem with one of my fingers. Hopefully, the combined elements will be able to heal my father.",
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
		"loreText" : "Blinding light. Visions. Old person running towards me. A loud shout, piercing every cell of my existence.",
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
		"loreText" : "\"Thou shalt not meddle with Elements! What have you done?! Go back where you came from, and never do this again!\"",
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
		"loreText" : "Darkness. Quiet and comforting.",
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
		"loreText" : "I woke up slowly. I was still in attic of my old family house. At least the walls look similar. Every single movable piece in the room has disappeared. What happened? What happened?!",
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
		"loreText" : "Nothing.<br>I don't remember what happened after hearing that shout.<br>I might not remember, but I know one thing certainly did change.<br>The Elemental Glove I used is now fused with my whole arm. I cannot take it off. I don't need to take it off. I think I can use it to go back there. To find out what lies on the other side.",
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
		"loreText" : "Wait, no. I try to stop my galloping thoughts and focus. I have to go see my father. He's the whole reason I was able to get so far in my life. I can't leave him now while he's at his weakest. I need to go. I need to move. Why can't I move?!",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "You are trying to move. It's not looking good.",
			"duration": 20000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "outro10",
		"chainedMessageDelay": 50
	},
	"outro10" : {
		"flush" : true,
		"loreText" : "After what felt like eternity I saw small twitch in my left thumb. I think I'll be alright. I just need few minutes to recover, and I'll go out.",
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
		"loreText" : "Thank you for playing intro stage of my game. \\('_' ) <br><br> You can always refresh the page to reset.",
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
		"loreText" : "I-I... I think I messed up. Nothing said that there was a capacity limit of Elemental Orb. It was supposed to condense Element and transfer excess to another plane of existence in case of overflow.<br><br>But something else happened. There was a big implosion inside the Elemental Orb and soon after, a huge wave of unleashed Elements sent me flying across the room.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "progressBar",
		"progressBar" : {
			"barText": "Getting out of the human shaped hole in the wall.",
			"duration": 25000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset1",
		"chainedMessageDelay": 50
	},
	"reset1" : {
		"flush" : true,
		"loreText" : "Aftermath of the situation: My body has all its pieces. At least I think so.<br>Element inside every Orb disappeared. That's bad, I worked hard to collect so much of them.<br>Machines seem to be fine, but my crystals imploded, slightly damaging my tanks. I guess I'll need to upgrade the machine's tanks again.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Repair damaged components and get everything back in place.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"chainedMessage": "reset1.1",
		"chainedMessageDelay": 50
	},
	"reset1.1" : {
		"flush" : true,
		"loreText" : "Now, for the Crystals inside Orbs themselves. Hm... Strange. Crystal bases are left intact, but the compression crystals inside orb that caused implosion are vibrating at high rates. I need to repair my machinery and test this crystal out.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Repair damaged components and get everything back in place.",
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
		"loreText" : "Alright, my whole setup is back in working order. Lets start filling Orbs again. Certainly there is more to them than I thought.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Start filling Orbs again.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent1"
	},
	"reset3" : {
		"flush" : true,
		"loreText" : "Another implosion. Surprised I walk back into the room and check on the Orbs again.<br><br>The vibrating crystal transformed. I never saw anything like this in books about Elemental manipulation. The Orb still holds Element like before, but its compression crystal expanded ten-fold. I wonder what will happen when I fill it again? I need to do few adjustments and I'll let machines run once more.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Put transformed Orb back on pedestal and fill it with a bit of its Element.",
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
		"loreText" : "The Expanded Crystal lit up for a second, then started generating its Element by itself. Did I just reverse the overflow process!? Well, I still wonder what will happen if I fill it to the point of imploding again...",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Try to fill the Orb with the expanded crystal.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent2"
	},
	"reset5" : {
		"flush" : true,
		"loreText" : "Another Orb imploded, but it took noticeably longer this time. I have no idea what that means for the future, but for now I just have to keep going. I don't have any other ideas.",
		"loreFreezeDuration": -1,
		"gameplayText" : "I made some preparations so I was safe this time.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Reinstalling machines back in their docks.",
			"duration": 6000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset6",
		"chainedMessageDelay": 50
	},
	"reset6" : {
		"flush" : true,
		"loreText" : "A few small adjustments and few big impact walls around each Orb made out of debris let me dissipate most of the implosion aftershock. Thanks to that repairs took me way less time.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Fill Orb with expanded crystal.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent1"
	},
	"reset7" : {
		"flush" : true,
		"loreText" : "I thought I only began to scratch capacity of new Orb, but it seems an expanding crystal had the reverse effect on a Orb's capacity threshold. This time overflow did not cause implosion, but the compression crystal fully merged with the Orb itself.<br>I need to test my newest accidental creation.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Test transformed Orb in safe environment.",
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
		"loreText" : "Are those... eyes? This Orb has started to have gradual changes in its shape. Now it looks more like a tear, and Element inside swirls in two small orbs.<br>I feel like they looking at me. I feel... strange about it. Anyway it seems inside the Orb it is fully connected to another plane and is able to channel insane amounts of Element both ways. Input pipes coming out of it instantly fill and also containers I provide it. Well, that's certainly helpful.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Testing phase 2/2.",
			"duration": 4000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "reset9",
		"chainedMessageDelay": 50
	},
	"reset9" : {
		"flush" : true,
		"loreText" : "Tests complete. I guess I should try to turn rest of the Orbs into this new entity. I decided to name it \"Golem\". Time to enable my machines once again.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Overflow one of the remaining Orbs",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"reset10" : {
		"flush" : true,
		"loreText" : "Another Orb transformed into a Golem. I need to continue doing the same with remaining Orbs.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Overflow one of the remaining Orbs",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"reset11" : {
		"flush" : true,
		"loreText" : "I've transformed each Orb into their Golem state. It's time.",
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
		"loreText" : "<br><br><br>Suddenly, nothing of particular interest happened.",
		"loreFreezeDuration": 35000,
		"gameplayText" : "",
		"gameplayFreezeDuration": 0,
		
		"firstActiveElement" : "none"
	},
	"pun2" : {
		"loreText" : "<br><br><br>Before all this I tried fishing. Didn't go swimmingly well.<br>Who would've thought that you can't find undiscovered medicine on the bottom of the river.",
		"loreFreezeDuration": 35000,
		"gameplayText" : "",
		"gameplayFreezeDuration": 0,
		
		"firstActiveElement" : "none"
	},
	"base0" : {
		"flush" : true,
		"loreText" : "The base of Earth Orb has been filled. Now I can truly start filling it with Earth.",
		"loreFreezeDuration": 1000,
		"gameplayText" : "Also first upgrade appeared at the bottom of the page.",
		"gameplayFreezeDuration": 1000,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"base1" : {
		"flush" : true,
		"loreText" : "The Water Orb's base is complete. Finally I should be able to use full potential of Liquefier.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "Fully fill Liquefier reagent tank",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"base2" : {
		"flush" : true,
		"loreText" : "The Air Orb is online.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"base3" : {
		"flush" : true,
		"loreText" : "Fire Orb activated. With the power of Fire all machines should be able to work automatically at long last.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"elementGathered0" : {
		"flush" : true,
		"loreText" : "With increasing supplies of Earth I should start thinking about activating another Orb. <br><br>Under rusted sheets near the Orbs I found a Liquefier. It's slightly damaged, but should work nonetheless.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "Setup machine on docking station.",
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
		"loreText" : "Machine's ready.<br>I should open the input valve and hopefully Earth should start flowing into it.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine0"
	},
	"elementGathered2" : {
		"flush" : true,
		"loreText" : "With a slow, but steady way of getting of Air a few other upgrades have become available.<br><br>I also found parts of another machine. While over half of it is missing, I think I should be able to find replacements for them.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Searching for another set of machine parts.",
			"duration": 6000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "elementGathered2.2",
		"chainedMessageDelay": 50
	},
	"elementGathered2.2" : {
		"flush" : true,
		"loreText" : "And another machine's ready. I found replacement parts that are good enough in the workshop of my father.<br><br> With a Combustor I should be able to produce Fire. Soon I'll have the missing reagent for my machines.",
		"loreFreezeDuration": 8000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine2"
	},
	"elementGathered3" : {
		"flush" : true,
		"loreText" : "In the center of the room a new piece activated - a Reaction Catalyst. It seems that fire inside it increases efficiency of reactions in machines.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"upgradeBought0" : {
		"loreText" : "<br>Now I don't need to fill Earth manually. What a relief.",
		"loreFreezeDuration": 5000,
		"gameplayText" : " | Autoclicker will get slightly better as the game progresses",
		"gameplayFreezeDuration": 5000,
		
		"firstActiveElement" : "none"
	},
	"upgradeBought2" : {
		"flush" : true,
		"loreText" : "While I was tinkering with reaction regulators I noticed two halves of another machine laying in the corner. I think with a bit of spare parts lying around I could assemble it myself.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Searching for machine parts.",
			"duration": 4000
		},
		"buttonAvailable": true
	},
	"upgradeBought2.2" : {
		"flush" : true,
		"loreText" : "The Boiler is ready. It will help me with creating Air. Sadly to automate reaction I'll need Fire, so for the time being only a manual method will be available.",
		"loreFreezeDuration": 9000,
		"gameplayText" : "Fill the Boiler with some Water.",
		"gameplayFreezeDuration": 16000,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine2"
	},
	"upgradeBought13" : {
		"flush" : true,
		"loreText" : "For the longest time I thought it was a decoration. A small volcano made with brass alloys. Apparently it's machine.<br>If I upgrade the Reaction Catalyst once more I should be able to make a positive feedback loop to multiply my Earth supply.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "I suggest pushing for the next reaction catalyst upgrade before using volcano.",
		"gameplayFreezeDuration": 15000,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"upgradeBought24" : {
		"flush" : true,
		"loreText" : "After sub-space breakthroughs my supply of elements will increase drastically. With sheer amount of Elements I can use I might try creating my own compression crystals. <br><br>It gave me interesting new idea...",
		"loreFreezeDuration": 25000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"machineThresholdAmount-0" : {
		"flush" : true,
		"loreText" : "I realized few things about Liquefier. Once Earth flowed into its internal tank, the whole machine started rotating on a track that goes around the whole room.<br><br> While it's moving it can gather required Element from the pipes. Of course its valve need to be open too. And when it reached a dock it stops there for a while. It seems that the reaction can only occur when docked.<br><br>Sadly it seems that without reagent it is not going to do anything anyway.",
		"loreFreezeDuration": -1,
		"gameplayText" : "Proceed only after reading lore above. Machines are quite complicated.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"progressBar" : {
			"barText": "Pondering about ways of obtaining Water.",
			"duration": 7000
		},
		"buttonAvailable": true,
		
		"chainedMessage": "machineThresholdAmount-0.2",
		"chainedMessageDelay": 50
	},
	"machineThresholdAmount-0.2" : {
		"flush" : true,
		"loreText" : "I think I came up with a way of manually forcing a reaction using my Glove without the use of reagent.<br><br>It's going to be inefficient, but I can turn 4 Earth inside the Liquefier into some Water by tapping the Water Orb.",
		"loreFreezeDuration": 16000,
		"gameplayText" : "Try to fill Water Orb after Liquefier fills up.",
		"gameplayFreezeDuration": 16000,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockElement1"
	},
	"machineThresholdAmount-1" : {
		"loreText" : "<br>The Boiler requires Fire to run, but my manual method should still be viable. 4 Water in the Boiler will turn into some Air.",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"machineThresholdAmount-2" : {
		"loreText" : "<br>It seems that the end of manual grinding is near. 4 Air in the Combustor will turn into some Fire.",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"machineActivated0" : {
		"loreText" : "<br>Yes! It works! Now I can accumulate Water with 100% efficiency. 4 Earth and 1 Water => 4 Water means that overall I still lose some.<br>But with increased supplies of Water I can start thinking about upgrading the Liquefier and working towards my next Orb",
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
