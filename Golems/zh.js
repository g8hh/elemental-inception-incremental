//汉化杂项
var cnItems = {
    'Main': '主界面',
    'Achievements': '成就',
    'Options': '选项',
    'Lore': '传说',
    'Open Water Rift': '开放水域裂缝',
    'Earth': '土地',
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
    'Air': '空气',
    'Open Air Rift': '打开空气裂缝',
    'Open Fire Rift': '打开火焰裂缝',
    'Increase rotation speed of crystals with rifts.': '增加有裂缝的晶体的旋转速度。',
    'Widen space available for rifts.': '扩大裂缝可用空间。',
    "Open rift to elemental plane inside Water's tank.": '打开裂口到水箱内的元素面。',
    'Rift will produce elements a bit faster.': '裂缝会更快地产生元素。',
    'Rift will produce 2x more elements.': '裂缝会产生2x更多的元素。',
    'Rift will constantly produce respective element.': '裂缝会不断产生各自的元素。',
    "Open rift to elemental plane inside Air's tank.": '打开裂口到空气槽内的元素面。',
    "Open rift to elemental plane inside Fire's tank.": '打开裂口到火焰槽内的元素面。',
    'All rifts opened': '所有裂缝已打开',
    'All rifts constantly produce respective element.': '所有裂缝都不断产生各自的元素。',
    'Install Reaction Catalyst into the central spot.': '安装反应催化剂到中央位置。',
    "I tried to copy main component of my grandma's setup.": '我试图复制奶奶设置的主要部分。',
    'With Catalyst I should be able to initiate positive conversion loop. I also devised a way to use Air with it.': '有了催化剂，我应该能够启动正转换循环。我还设计了一种利用空气的方法。',
    'All Rifts Open': '所有裂缝已打开',
    'Install Catalyst': '安装催化剂',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

};

function cnItem(text) {
    //数组里面有的，返回中文
    for (var i in cnItems) {
        if (text == i) {
            return cnItems[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cnItems) {
        if (text != i) {
            console.log("需汉化的英文Item：" + text);
            return text;
        }
    }
}



//汉化标题
var cntit = {
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    

};

function cntitle(text) {
    //数组里面有的，返回中文
    for (var i in cntit) {
        if (text == i) {
            return cntit[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cntit) {
        if (text != i) {
            console.log("需汉化的英文标题：" + text);
            return text;
        }
    }
}

