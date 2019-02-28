var jsonMessages = {
	"tutorialMessage" : {
		"flush" : "if flush is set to true message will clear chatbox before adding it's content and reset chatTrimmer delays",
		
		"loreText" : "what will be added to current content of respective chatbox (after flushing)",
		"loreFreezeDuration": "period of time in ms during which chatTrimmer won't touch respective chatbox. negative values are permament disable (until next message)",
		"gameplayText" : "same as above",
		"gameplayFreezeDuration": "same as above",
		
		"activeElements" : "gameplay and chatTrimmer are frozen until all active elements are completed",
		"firstActiveElement" : "button/progressBar/none - which element is activated first",
		"progressBar" : {
			"barText": "text appearing on bar",
			"duration": "duration in ms of progress bar",
		},
		"buttonAvailable": "if set to true will make button visible and clickable once",
		
		"chainedMessage": "if this exists then after this msg is complete next message will fire instead of resuming gameplay",
		"chainedMessageDelay": "delay between finish of this msg and firing of the next - gameplay is still frozen, but chatTrimmer is not",
		
		"eventId": "id of an event that will fire as soon as this message appears"
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
		"loreText" : "So my plan at first was to touch every Orb at the same time. Technically Glove can only hold one element, but this way I connect to all elements at the same time. I tried it before. Complete failure, the interactions between elements caused all Orbs to empty themselves.",
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
		"loreText" : "But now they aren't really Orbs anymore. I removed all four Golems from their pedestals and put them in small circle.",
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
		"loreText" : "Blinding light. Vision. Old person running towards me. Loud shout, piercing every cell of my existence.",
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
		"loreText" : "I woke up slowly. I was still in attic of my old family house. At least the walls look similar. Every single movable piece in room disappeared. What happened? What happened?!",
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
		"loreText" : "Thank you for playing intro stage of my game. \\('_' ) <br><br> You can always refresh page to reset.",
		"loreFreezeDuration": -1,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "theEnd"
	},
	"intro0" : {
		"flush" : true,
		"loreText" : "欢迎来到 \"我还没有决定元素的名称\".<br><br>目前只有阶段一是可用的，它只是和一些比教程更大的东西和一些比增量将被称为“第一次复位\之路”\小的东西。<br><br>我很乐意听到你的任何反馈，无论是游戏的帖子、直接消息还是电子邮件中的评论。<br><br>如果你将游戏留在非活动窗口，它将积累时间，然后用以使用高达3倍的游戏速度。",
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
		"loreText" : "传说炼金术士拥有的知识来自于四种元素的结合。<br><br>我要学习元素操作。对大多数人来说，这只是一种爱好。大多数“元素主义者”，就像他们喜欢称呼自己的那样，只是坐在他们的小操场上，创造漂浮的灯或者其他装饰性的小玩意",
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
		"loreText" : "在图书馆读了几天之后，我开始了解它的基础知识。你所需要做的一切开始实验是一个基本的手套。",
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
		"loreText" : "我在玩具店找到了物美价廉的手套。人们对他们评价不高。我希望我能比大多数人更好地使用它。<br><br>手套本身是很有限的。",
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
		"loreText" : "所以我需要其他的分量。它们被称为单质球体。没有专用容器，元素就不能保存它们的表单。球体的另一个好处是它们的安全性。由于球体内部的小水晶，它可以将元素压缩成密度更大的形状，并将任何潜在的溢出重定向到虚空中。<br><br>幸运的是，我的祖母曾经玩过其中一套。所以我在我们旧房子的阁楼上找到了它们。",
		"loreFreezeDuration": -1,
		"gameplayText" : "把球体放在底座上，在周围留出一些空间。",
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
		"loreText" : "我该如何描述它呢?生锈的底座，破裂的管道，这是一个更大的混乱之上的混乱。至少压缩晶体似乎处于工作状态。这对于学习经验应该足够了。 <br><br>所以我的研究是从这个凌乱的房间开始的。很快我遇到了最大的障碍。元素手套一次只能处理一个元素。",
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
		"loreText" : "通常，当两个元素碰巧在一个容器中，它们会在小的闪光中干扰和消失。我应该先研究一下不同的可能性。也许如果我在更大的浓度下尝试它会有不同的表现?<br>是时候开始试验了。书本理论是一回事，现实世界是另一回事。我需要激活那些球。",
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
		"loreText" : "用地板上乱扔的垃圾，我应该能把一个球体填满土。让我们去。<br><br>在做任何事情之前还有一件事。<br><br>我决定让我与球体的所有互动缓慢而稳定。我不想因为点击太快而破坏它们。",
		"loreFreezeDuration": -1,
		"gameplayText" : "在所有球体下面是指示器。您只能在圆球完全绿色时单击它。",
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
		"loreText" : "I-I... I think I messed up. Nothing said that there was a capacity limit of Elemental Orb. It was supposed to condense Element and transfer excess to another plane of existence in case of overflow.<br><br>But something else happened. There was a big implosion inside Elemental Orb and soon after huge wave of unleashed Elements sent me flying across the room.",
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
		"loreText" : "Aftermath of the situation: My body has all it's pieces. At least I think so.<br>Every Element inside the Orbs disappeared. That's bad, I worked hard to collect so much of them.<br>Machines seem to be fine, but my crystals inside exploded, slightly damaging tanks. I guess I'll need to upgrade machine tanks again.",
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
		"loreText" : "Now, for the Crystals inside Orbs themselves. Hm... Strange. Crystal bases are left intact, but the compression crystals inside orb that caused implosion is vibrating at high rate. I need to repair my machinery and test this crystal out.",
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
		"loreText" : "Alright, whole setup is back in working order. Lets start filling Orbs again. Certainly there is more to them than I thought.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Start filling Orbs again.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent1"
	},
	"reset3" : {
		"flush" : true,
		"loreText" : "Another implosion. Surprised I walk back into the room and check on the Orbs again.<br><br>Vibrating crystal transformed. I never saw anything like that in books about Elemental manipulation. Orb still holds Element like before, but compression crystal expanded ten-fold. I wonder what will happen when I fill it again. I need to do few adjustments and I'll let machines run again.",
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
		"loreText" : "Expanded Crystal lighted up for a second, then started generating it's Element by itself. Did I just reverse overflow process!? Well, I still wonder what will happen if I fill it to the point of the implosion again...",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Try to fill Orb with expanded crystal.",
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
		"loreText" : "Few small adjustments and few big impact walls around Orbs made out of debris let me dissipate most of the implosion aftershock. Thanks to that repairs took me way less time.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Fill Orb with expanded crystal.",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true,
		
		"eventId": "golemEvent1"
	},
	"reset7" : {
		"flush" : true,
		"loreText" : "I thought I only began to scratch capacity of new Orb, but it seems expanding crystal had reverse effect on Orb's capacity threshold. This time overflow did not cause implosion, but compression crystal fully merged with Orb itself.<br>I need to test my newest accidental creation",
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
		"loreText" : "Are those... eyes? Orb started to have gradual changes in its shape. Now it looks more like a tear, and Element inside swirls in two small orbs.<br>I feel like they looking at me. I feel... strange about it. Anyway it seems that insides of Orb are fully connected to another plane and is able to channel insane amounts of Element both ways. Input pipes coming out of it instantly fill and containers I provide to it. Well, that's certainly helpful.",
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
		"loreText" : "Tests complete. I guess I should try to turn rest of the Orbs into this new entity. I decided to name it \"Golem\". Time to enable machines once again.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "Overflow one of the remaining Orbs",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"reset10" : {
		"flush" : true,
		"loreText" : "Another Orb transformed into Golem. I need to continue doing the same with remaining Orbs.",
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
		"loreText" : "Base of Earth Orb has been filled. Now I can truly start filling it with Earth.",
		"loreFreezeDuration": 1000,
		"gameplayText" : "Also first upgrade appeared at the bottom of the page.",
		"gameplayFreezeDuration": 1000,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"base1" : {
		"flush" : true,
		"loreText" : "Water Orb's base is complete. Finally I should be able to use full potential of Liquefier.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "Fully fill Liquefier reagent tank",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"base2" : {
		"flush" : true,
		"loreText" : "Air Orb's online.",
		"loreFreezeDuration": 2000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"base3" : {
		"flush" : true,
		"loreText" : "Fire Orb activated. With power of Fire all machines should be able to work automatically at long last.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"elementGathered0" : {
		"flush" : true,
		"loreText" : "With increasing supply of Earth I should start thinking about activating another Orb. <br><br>Under rusted sheets near Orbs I found Liquefier. It's slightly damaged, but should work nonetheless.",
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
		"loreText" : "Machine's ready.<br>I should open input valve and hopefully Earth should start flowing into it.",
		"loreFreezeDuration": 4000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine0"
	},
	"elementGathered2" : {
		"flush" : true,
		"loreText" : "With slow, but steady way of getting of Air few other upgrades became available.<br><br>I also found parts of another machine. While over half of it is missing, I think I should be able to find replacements for them.",
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
		"loreText" : "And another machine's ready. I found replacement parts that are good enough in workshop of my father.<br><br> With Combustor I should be able to produce Fire. Soon I'll have missing reagent for my machines.",
		"loreFreezeDuration": 8000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine2"
	},
	"elementGathered3" : {
		"flush" : true,
		"loreText" : "In the center of the room new piece activated - Reaction Catalyst. It seems that fire inside it increases efficiency of reactions in machines.",
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
		"loreText" : "While I was tinkering with reaction regulators I noticed two halves of another machine laying in the corner.I think with a bit of spare parts lying around I could assemble it myself.",
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
		"loreText" : "Boiler is ready. It will help me with creating Air. Sadly to automate reaction I'll need Fire, so for the time being only manual method will be available.",
		"loreFreezeDuration": 9000,
		"gameplayText" : "Fill Boiler with some Water.",
		"gameplayFreezeDuration": 16000,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockMachine2"
	},
	"upgradeBought13" : {
		"flush" : true,
		"loreText" : "For the longest time I thought it was a decoration. Small volcano made with brass alloys. Apparently it's machine.<br>If I upgrade Reaction Catalyst once more I should be able to make positive feedback loop to multiply my Earth supply.",
		"loreFreezeDuration": 5000,
		"gameplayText" : "I suggest pushing for next reaction catalyst upgrade before using volcano.",
		"gameplayFreezeDuration": 15000,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"upgradeBought24" : {
		"flush" : true,
		"loreText" : "After sub-space breakthrough my supply of elements will increase drastically. With sheer amount of Elements I can use I might try creating my own compression crystals. <br><br>It gave me interesting new idea...",
		"loreFreezeDuration": 25000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "button",
		"buttonAvailable": true
	},
	"machineThresholdAmount-0" : {
		"flush" : true,
		"loreText" : "I realized few things about Liquefier. Once Earth flowed into its internal tank, whole machine started rotating on track that goes around whole room.<br><br> While it's moving it can gather required Element from the pipes. Of course its valve need to be open too. And when it reached dock it stops there for a while. It seems that it reaction can only occur when docked.<br><br>Sadly it seems that without reagent it not going to do anything anyway.",
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
		"loreText" : "I think I came up with a way of manually forcing reaction using my glove without the use of reagent.<br><br>It's going to be inefficient, but I can turn 4 Earth inside Liquefier into some Water by clicking Water Orb.",
		"loreFreezeDuration": 16000,
		"gameplayText" : "Try to fill Water Orb after Liquefier fills up.",
		"gameplayFreezeDuration": 16000,
		
		"firstActiveElement" : "none",
		
		"eventId": "unlockElement1"
	},
	"machineThresholdAmount-1" : {
		"loreText" : "<br>Boiler requires Fire to run, but my manual method should still be viable. 4 Water in Boiler will turn into some Air.",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"machineThresholdAmount-2" : {
		"loreText" : "<br>It seems that the end of manual grind is near. 4 Air in Combustor will turn into some Fire.",
		"loreFreezeDuration": 10000,
		"gameplayText" : "",
		"gameplayFreezeDuration": -1,
		
		"firstActiveElement" : "none"
	},
	"machineActivated0" : {
		"loreText" : "<br>Yes! It works! Now I can accumulate Water with 100% machine's efficiency. 4 Earth and 1 Water => 4 Water means that overall I lose some quantity.<br>But with increased supply of Water I can start thinking about upgrading Liquefier and working towards next Orb",
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
