console.log("加载汉化模块");

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    'Main': '主界面',
    'Achievements': '成就',
    'Options': '选项',
    'Lore': '传说',
    'Open Water Rift': '开放水域裂缝',
    'Earth': '地',
    'Water': '水',
    'Rift Power I': '裂谷动力 I',
    'Rift Power II': '裂谷动力 II',
    'Rift Power III': '裂谷动力 III',
    'Rift Power IV': '裂谷动力 IV',
    'Rift Power V': '裂谷动力 V',
    'Rift Speed I': '裂谷速度 I',
    'Rift Speed II': '裂谷速度 II',
    'Rift Speed III': '裂谷速度 III',
    'Rift Speed IV': '裂谷速度 IV',
    'Rift Speed V': '裂谷速度 V',
    'Liquefier': '液化装置',
    'Boiler': '锅炉',
    'Combustor': '燃烧器',
    'Volcano': '火山',
    'Fire': '火',
    'Air': '气',
    'Open Air Rift': '打开气裂缝',
    'Open Fire Rift': '打开火焰裂缝',
    'Increase rotation speed of crystals with rifts.': '增加有裂缝的晶体的旋转速度。',
    'Widen space available for rifts.': '扩大裂缝可用空间。',
    "Open rift to elemental plane inside Water's tank.": '打开裂口到水箱内的元素面。',
    'Rift will produce elements a bit faster.': '裂缝会更快地产生元素。',
    'Rift will produce 2x more elements.': '裂缝会产生2x更多的元素。',
    'Rift will constantly produce respective element.': '裂缝会不断产生各自的元素。',
    "Open rift to elemental plane inside Air's tank.": '打开裂口到气槽内的元素面。',
    "Open rift to elemental plane inside Fire's tank.": '打开裂口到火焰槽内的元素面。',
    'All rifts opened': '所有裂缝已打开',
    'All rifts constantly produce respective element.': '所有裂缝都不断产生各自的元素。',
    'Install Reaction Catalyst into the central spot.': '安装反应催化剂到中央位置。',
    "I tried to copy main component of my grandma's setup.": '我试图复制奶奶设置的主要部分。',
    'With Catalyst I should be able to initiate positive conversion loop. I also devised a way to use Air with it.': '有了催化剂，我应该能够启动正转换循环。我还设计了一种利用气的方法。',
    'All Rifts Open': '所有裂缝已打开',
    'Install Catalyst': '安装催化剂',
    'Second input pipes upgrade.': '二级输入管升级。',
    'Rift Power Max': '最大裂谷动力',
    'Rift Speed Max': '最大裂谷速度',
    'Modify Catalyst': '改造催化剂',
    'Pipes I': '管道 I',
    'Pipes II': '管道 II',
    'Flow System': '流动系统',
    'Catalyst': '催化剂',
    'Curse tried to stop me again.': '诅咒试图再次阻止我。',
    'I need to change how Catalyst is constructed to stop this from happening again.': '我需要改变催化剂的结构来防止这种情况再次发生。',
    'Conversion machine reverse flow system.': '转换机器逆流系统。',
    'Ratio is based on amount needed in conversion formula.': '比例是基于转换公式的需求量。',
    'Reverses flow of element with amount ratio over 3 times higher than the other.': '反向流动的元素的数量比另一个高出3倍。',
    'Increases number of input pipes leading into the system.': '增加进入系统的输入管道的数量。',
    'Elements will be able to get out of Tanks faster. (Current rate is: 0.3%/tick)': '元素将能够更快地离开水箱。(当前比率为:0.3% /轮)',
    "Changing Catalyst into rotating ring will make it weaker, but it's my only option to proceed.": '把催化剂换成旋转环会使它变弱，但这是我唯一的选择。',
    'Catalyst Ring': '催化剂环',
    'Rotates around conversion machines to give them more efficiency. Fill it with Air and Fire to improve it.': '旋转转换机器，以提高效率。用气和火来改善它。',
    'Build Orb Infuser': '建造球体注入器',
    'Reaction Catalyst ring': '反应催化剂环',
    'Catalyst online': '催化剂在线',
    'Install Orb Infuser': '安装球体注入器',
    "Filling it's tank to brim will create enough density of elements to convert Orbs I gathered into Golems.": '填满它的油箱，就能产生足够的密度让我把它变成高尔夫球。',
    'I designed machine that will help with creation of golems I discovered in attic.': '我设计的机器能帮助我在阁楼找到的高尔夫球。  ',
    'Catalyst ring boosts production of conversion machines.': '催化剂环促进了转化器的生产。',
    'Open Earth Rift': '打开地之裂痕',
    'Curse clears Elements used in upgrades, including respective tanks and machines.': '诅咒清除升级中使用的元素，包括相应的罐子和机器。',
    "Open a rift to an elemental plane inside Earth's tank.": "打开通往地之罐内元素位面的裂缝。",
    "Open a rift to an elemental plane inside Water's tank.": "打开通往水之罐内元素位面的裂缝。",
    "Rift will produce 2x more Element.": "裂痕将产生 2 倍以上的元素。",
    "Open a rift to an elemental plane inside Air's tank.": "在 气之罐 中打开一个通往元素位面的裂缝。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    'Settings': '设置',

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^\s*$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for(let prefix in cnPrefix){
        if (text.substr(0,prefix.length) === prefix){
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for(let postfix in cnPostfix){
        if (text.substr(-postfix.length) === postfix){
            text_postfix = cnPostfix[postfix];
            text = text.substr(0,text.length-postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for(let reg of cnExcludePostfix){
        let result = text.match(reg);
        if (result){
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length-text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for(let reg of cnExcludeWhole){
        if (reg.test(text)){
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg?text:arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500){
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

document.createElement = function(name,opt){
	if(name=='canvas'){
		let canvasElement = document.__proto__.createElement.bind(this)(name,opt);
		canvasElement.getContext('2d').fillText = function(text,x,y,max){
			return this.__proto__.fillText.bind(this)(cnItem(text),x,y,max);
		}
		canvasElement.getContext('2d').strokeText = function(text,x,y,max){
			return this.__proto__.strokeText.bind(this)(cnItem(text),x,y,max);
		}
		canvasElement.getContext('2d').measureText = function(text){
			return this.__proto__.measureText.bind(this)(cnItem(text));
		}
		return canvasElement;
	}
	else
		return document.__proto__.createElement.bind(this)(name,opt);
}