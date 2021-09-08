var locale = {
	exchangeStringLoad: "从交换字符串加载是实验性功能。 提供不正确的字符串可能会破坏游戏。 出现问题时请在控制台使用 SavingSystem.hardReset() 进行存档重置。",
	exchangeStringInvalid: "粘贴的字符串不是正确的存档字符串。\n或者您只是不小心按下了 Ctrl+V。",
	exchangeStringCopyed: "存档字符串已复制到剪贴板。 您可以将其保存在其他地方，并在需要时粘贴回来。",
	exchangeStringPasted: "你粘贴了一个看起来像存档字符串的东西。你要加载它吗?",
	hardReset: "这会抹去你所有的进步。是否继续?",
	reset: "硬复位",
	efficiency: "效率",
	production: "生产",
	chart: "图表",
	inputs: "输入",
	outputs: "输出",
	recipes: "配方",
	save: "保存",
	autosave: "自动保存于",
	free: "赠品!",
	recipeType: "类型",
	recipeTypeScaling: "缩放",
	recipeTypeFixed: "固定",
	page: "页面",
	outOf: "超出",

	aTabNames: [
		"航点",
		"小地图",
		"面板控件",
		"知识",
		"教程",
		"图标图例",
		null,
		"Discord",
		null,
		"选项(s)",
		"更新日志",
		"捐赠",
	],
	oMachines:
	{
		machineEarth: "结晶器",
		machineWater: "水萃取器",
		machineAir: "压力室",
		machineFire: "焚化炉",
		golemInfuser: "魔像灌注器",
		golemMerger: "魔像合并",
		machineMud: "聚合器",
		machineIce: "极地涡旋",
		machineSteam: "蒸汽机",
		machineMagma: "火山",
		machineSand: "粉碎机",
		machineVoid: "虚空宝珠",
		machineNexus: "统一枢纽",

		machineKnowledge: "研究表",
		machineEssence: "物化器",
		machineSoil: "堆肥机",
		machineObsidian: "岩浆过热竞争的输家",
		machineLava: "岩浆过热比赛冠军",
		machineSpace: "距离测量器",
		machineSnow: "造雪机",
		machineCryogen: "无数错误报告后，名称已更改。",
		machineGlass: "玻璃吹制",
		machineGold: "炼金构造",
		machineForce: "不可阻挡的对象",
		machineOil: "抽水机",
		machineSolution: "混合器",
		machineDistill: "蒸馏室",
		machinePressure: "加压器",
		machineCompress: "压缩机",
		machineEssenceElements: "酒厂",
		machineSoilElements: "花园",
		machineSeedElements: "种子灌注器",
		machinePureEssenceElements: "隔离小瓶",
		machineUnPureSoilElements: "土壤强化剂",
		machinePlantEarth: "种植箱",
		machinePlantWater: "水下种植箱",
		machinePlantAir: "播种机浮箱",
		machinePlantFire: "种植箱 - 不包括灭火器",
		machineCoolant: "冷却器",
		machineGale: "北极风捕手",
		machineCryospire: "冰冻方尖碑",
		machineVortex: "完全静止龙卷风",
		machineBlaze: "熔炉",
		machineBlast: "活塞窑",
		machinePyro: "热动炉",
		machineCoal: "煤转炉",
		machineSulphur: "硫磺箱",
		machinePropane: "丙烷罐",
		machineHotWaste: "热垃圾桶",
		machineRefinery: "炼油厂",
		machineAdvancedRefinery: "高级炼油厂",
		machineProcessFuel: "发电机",
		machineProcessDiesel: "柴油发动机",
		machineProcessPetrol: "汽油发动机",
		machineProcessPropane: "丙烷排放",
		machineProcessPropene: "丙烯排放",
		machineEnergy: "电池",
		machinePower: "一个电源变速箱",
		machineSpatial: "体积测量器",
		machineTemporal: "时间线测量员",
		machineParallel: "维度测量仪",
		machineFoldedSpace: "反距离反测量器",
		machineFoldedSpatial: "反体积的反测量器",
		machineFoldedTemporal: "反时间线的反测量器",
		machineTime: "兔子洞",
		machineSilver: "炼金袋",
		machineBronze: "中级胸甲",
		machineCopper: "镀金胸甲",
		machineTin: "工业箱",
		machineAluminum: "工业存储",
		machineIron: "工业容器",
		machineSteel: "高炉",
		machineClay: "陶轮",
		machinePlastic: "印刷机",
		machineSilicon: "电弧炉",
		machineAcid: "玻璃摇床",
		machineMayo: "奶牛",
		machineAdvancedCompress: "压实机",
		machineStone: "石工",
		machineGemstone: "宝石簇",
		machineRandomGem: "宝石破碎机",
		machineQuartz: "石英巨石",
		machineEmerald: "一堆祖母绿",
		machineSapphire: "一堆蓝宝石",
		machineTopaz: "一堆黄玉",
		machineRuby: "一堆红宝石",
		machinePerfectedComponents: "实验室",
		machinePerfectedOrb: "汇编器",
		machinePureMixer: "元素提取器",
		machinePureEarth: "纯地宝珠",
		machinePureWater: "纯水宝珠",
		machinePureAir: "纯气宝珠",
		machinePureFire: "纯火宝珠",
		machinePureGolemEarth: "水晶巢",
		machinePureGolemWater: "湖上筑巢",
		machinePureGolemAir: "浮巢",
		machinePureGolemFire: "白焰之巢",
	},
	oRecipes:
	{
		earthStart1: "地之细流",
		earthStart2: "地之滑梯",
		earthStart3: "地之雪崩",
		earthRift1: "脆弱的地之裂痕",
		earthRift2: "纯地之裂痕",
		earthConversion1: "简单地转换",
		earthConversion2: "改良地之转换",
		earthRift3: "真地之裂痕",
		earthRift4: "地裂",
		earthCConversion1: "催化地之转化",
		earthCRift1: "稳定地C-裂痕",
		earthCRift2: "地C-隧道",

		waterStart1: "Water Forced Conversion",
		waterRift1: "Weak Water Rift",
		waterRift2: "Pure Rift of Water",
		waterConversion1: "Simple Water Conversion",
		waterConversion2: "Improved Water Conversion",
		waterRift3: "True Water Rift",
		waterRift4: "Water Breach",
		waterCConversion1: "Catalyzed Water Conversion",
		waterCRift1: "Stabilized Water C-Rift",
		waterCRift2: "Water C-Tunnel",

		airStart1: "Air Forced Conversion",
		airRift1: "Weak Air Rift",
		airRift2: "Pure Rift of Air",
		airConversion1: "Simple Air Conversion",
		airConversion2: "Improved Air Conversion",
		airRift3: "True Air Rift",
		airRift4: "Air Breach",
		airCConversion1: "Catalyzed Air Conversion",
		airCRift1: "Stabilized Air C-Rift",
		airCRift2: "Air C-Tunnel",

		fireStart1: "Fire Forced Conversion",
		fireRift1: "Weak Fire Rift",
		fireRift2: "Pure Rift of Fire",
		fireConversion1: "Simple Fire Conversion",
		fireConversion2: "Improved Fire Conversion",
		fireRift3: "True Fire Rift",
		fireRift4: "Fire Breach",
		fireCConversion1: "Catalyzed Fire Conversion",
		fireCRift1: "Stabilized Fire C-Rift",
		fireCRift2: "Fire C-Tunnel",

		golemEarth1: "Earth Orb Infusion",
		golemEarth2: "Earth Golem Infusion",
		golemEarth3: "Earth Golem Creation",
		golemWater1: "Water Orb Infusion",
		golemWater2: "Water Golem Infusion",
		golemWater3: "Water Golem Creation",
		golemAir1: "Air Orb Infusion",
		golemAir2: "Air Golem Infusion",
		golemAir3: "Air Golem Creation",
		golemFire1: "Fire Orb Infusion",
		golemFire2: "Fire Golem Infusion",
		golemFire3: "Fire Golem Creation",

		mergeMud1: "Merge : Traces of Mud",
		mergeMud2: "Simple Mud Extraction",
		mergeMud3: "Intermediate Mud Extraction",
		mergeIce1: "Merge : Traces of Ice",
		mergeIce2: "Simple Ice Extraction",
		mergeIce3: "Intermediate Ice Extraction",
		mergeSteam1: "Merge : Traces of Steam",
		mergeSteam2: "Simple Steam Extraction",
		mergeSteam3: "Intermediate Steam Extraction",
		mergeMagma1: "Merge : Traces of Magma",
		mergeMagma2: "Simple Magma Extraction",
		mergeMagma3: "Intermediate Magma Extraction",
		mergeSand1: "Merge : Traces of Sand",

		mudConversion1: "Forceful Mud Conversion",
		mudConversion2: "Gainfull Mud Conversion",
		mudConversion3: "Catalyzed Mud Conversion",
		mudAssimilation1: "Mud Assimilation",
		mudRift1: "Mud Rift",

		iceConversion1: "Forceful Ice Conversion",
		iceConversion2: "Lossless Ice Conversion",
		iceConversion3: "Catalyzed Ice Conversion",
		iceAssimilation1: "Ice Assimilation",
		iceRift1: "Ice Rift",

		steamConversion1: "Forceful Steam Conversion",
		steamConversion2: "Lossless Steam Conversion",
		steamConversion3: "Catalyzed Steam Conversion",
		steamAssimilation1: "Steam Assimilation",
		steamRift1: "Steam Rift",

		magmaConversion1: "Forceful Magma Conversion",
		magmaConversion2: "Lossless Magma Conversion",
		magmaConversion3: "Catalyzed Magma Conversion",
		magmaAssimilation1: "Magma Assimilation",
		magmaRift1: "Magma Rift",

		sandConversion1: "Forceful Sand Conversion",
		sandConversion2: "Lossful Sand Conversion",
		sandConversion3: "Catalyzed Sand Conversion",
		sandRift1: "Sand Rift",

		voidClash1: "Antitype Trace",
		voidClash2: "Antitype Merge",
		voidClash3: "Antitype Fusion",
		voidConversion3: "Catalyzed Void Conversion",

		alkahest1traces: "Universal Solution",
		alkahest1merge: "Universal Solvent",
		alkahest1mixer: "Alkahest Drip-Feeding",

		knowledgeProduction1: "研究启示",
		knowledgeProduction2: "了解启示",
		knowledgeProduction3: "揭开启示",
		revelationGain1: "钱包的力量",
		revelationGain2: "重载想象",

		essenceMerge1: "分层精华合并",

		soilMerge1: "分层土壤合并",
		soilMerge2: "流线型土壤合并",
		soilAdvMerge1: "土壤吸收合并",

		obsidianMerge1: "分层黑曜石合并",
		obsidianCooling1: "熔岩不热",

		lavaMerge1: "分层熔岩合并",

		spaceMerge1: "分层空间合并",

		snowMerge1: "分层雪合并",

		cryogenMerge1: "分层制冷剂合并",

		glassMerge1: "分层玻璃合并",

		goldMerge1: "分层黄金合并",
		goldMerge2: "基础金筛",
		goldMerge3: "更硬的金筛",
		goldMerge4: "更好的金筛",
		goldMerge5: "更快的金筛",
		goldMerge6: "更强的金筛",
		goldMerge7: "闪亮的金筛",
		goldMerge8: "黄金自动筛",

		forceMerge1: "分层强制合并",
		forceMerge2: "击中坚不可摧的墙",

		oilMerge1: "分层石油合并",
		oilPump1: "袖珍泵",
		oilAdvPump2: "工业泵",

		solutionMix1: "基础混合",
		solutionMix2: "改良混合",
		solutionMix3: "混合料",
		solutionMix4: "饱和混合",
		solutionMix5: "连续混合",
		solutionMix6: "低压混合",

		distillEarth1: "沉淀地",
		distillEarth2: "蒸馏地",
		distillEarth3: "凝固地",
		distillWater1: "沉淀水",
		distillWater2: "蒸馏水",
		distillWater3: "凝固水",
		distillAir1: "沉淀气",
		distillAir2: "蒸馏气",
		distillAir3: "凝固气",
		distillFire1: "沉淀火",
		distillFire2: "蒸馏火",
		distillFire3: "凝固火",

		pressureMerge1: "施压",

		compressEarth1: "地压缩",
		compressEarth2: "地空洞涂层压缩",
		compressWater1: "水压缩",
		compressWater2: "土空洞涂层压缩",
		compressAir1: "气压缩",
		compressAir2: "气空洞涂层压缩",
		compressFire1: "火压缩",
		compressFire2: "火空洞涂层压缩",

		essenceElementEarth: "地酿",
		essenceElementWater: "水酿",
		essenceElementAir: "气酿",
		essenceElementFire: "火酿",

		soilElementEarth: "地堆肥",
		soilElementWater: "水堆肥",
		soilElementAir: "气堆肥",
		soilElementFire: "火堆肥",

		seedEarth: "生活    (地)",
		seedWater: "呃      (水)",
		seedAir: "发现   (气)",
		seedFire: "离开 (火)",

		infuseSoilEarth: "地土壤富集",
		infuseSoilWater: "水土壤富集",
		infuseSoilAir: "气土壤富集",
		infuseSoilFire: "火土壤富集",

		growEarth: "自然增长",
		harvestEarth1: "树叶修剪器",
		uprootEarth2: "拔毛器",

		growWater: "积极增长",
		harvestWater1: "树叶修剪器",
		uprootWater2: "拔毛器",

		growAir: "被动增长",
		harvestAir1: "树叶修剪器",
		uprootAir2: "拔毛器",

		growFire: "凤凰增长",
		harvestFire1: "树叶修剪器",
		uprootFire2: "拔毛器",

		coolantMerge1: "天然制冷剂",
		coolantMerge2: "改进制冷剂",
		coolantProduction1: "超导制冷剂",

		galeSetup1: "冷却风扇",
		galeCool1: "大风冷却系统",
		galeMelt1: "大风熔毁",
		galeMelt2: "手动覆盖融化",

		cryospireSetup1: "Rise of Cryospires",
		cryospireCool1: "Cryospire Cooling Architecture",
		cryospireMelt1: "Cryospire Meltdown",
		cryospireMelt2: "Just melt it!",

		vortexSetup1: "Vortex Creation",
		vortexCool1: "Vortex Cooling Complex",
		vortexMelt1: "Vortex Meltdown",
		vortexMelt2: "Let it melt!",

		blazeIgnite1: "Blazing Ingnition",
		blazeDecay1: "Ashen Fade",
		blazeFuel1: "Coal Avalanche",

		blastIgnite1: "Blast Off",
		blastDecay1: "Pump-Inaction",
		blastFuel1: "Sulphur Trickle",

		pyroIgnite1: "From Zero to Hell-o",
		pyroDecay1: "Heat Death",
		pyroFuel1: "Propane Injection",

		coalProduction1: "煤炭之争",
		coalRecover1: "煤炭后处理",
		coalAdvProduction1: "健康摇滚杂烩",

		sulphurProduction1: "洗煤机",

		fuelRefine1: "简单的热精炼",

		oilRefine1: "复杂的油分离",

		fuelUsage1: "浪费能源",
		fuelUsage2: "高效能源",

		dieselDrain1: "垃圾箱",
		dieselDrain2: "工业垃圾桶",
		dieselUsage1: "反向减压",

		petrolDrain1: "秃头垃圾桶",
		petrolUsage1: "十四冲程循环",

		propaneDrain1: "垃圾桶",

		propeneDrain1: "垃圾桶",
		propeneDrain2: "工业垃圾桶",

		spatialCreation1: "压缩空间",
		spatialProduce1: "单Tick",

		temporalCreation1: "双重压缩空间",
		temporalProduce1: "单移",
		temporalShenigans1: "Tick超速",

		parallelCreation1: "三元压缩空间",
		parallelProduce1: "单星系",

		foldedSpaceCreation1: "四元压缩空间",

		foldedSpatialCreation1: "五元压缩空间",
		foldedSpatialProduce1: "单牺牲",

		foldedTemporalCreation1: "六元压缩空间",
		foldedTemporalProduce1: "单无限",
		foldedTemporalShenigans1: "时间膨胀",

		timeSlow1: "大幅放缓",
		timeFast1: "涡轮时间花费者",
		timeBend1: "实验涡轮时间弯曲",

		silverStart1: "艰难的方式",
		silverAlchemy1: "精致的方式",

		bronzeStart1: "强硬的方式",
		bronzeAlchemy1: "延展方式",

		copperStart1: "坚定的方式",
		copperAlchemy1: "敏感的方式",

		tinStart1: "刚性方式",
		tinAlchemy1: "灵活方式",

		aluminumStart1: "密集的方式",
		aluminumAlchemy1: "毛茸茸的方式",

		ironStart1: "激烈的方式",
		ironAlchemy1: "哎呀，又来了。",
		ironAlchemy2: "Da Wae",

		steelProduction1: "不屈的方式",

		clayProduction1: "纸浆方式",

		plasticProduction1: "弹性方式",
		plasticProduction2: "弯曲方式",
		plasticProduction3: "可塑方式",

		siliconProduction1: "柔滑的方式",

		acidProduction1: "舒适的方式",

		ashCompress1: "低效灰烬压缩",
		ashCompress2: "高效灰烬压缩",
		dustCompress1: "低效粉尘压缩",
		dustCompress2: "高效粉尘压缩",

		gravelProduction1: "拆解地",
		pebbleProduction1: "鹅卵石故障",
		pebbleProduction2: "冲蚀砾石",
		stoneProduction1: "粉碎Pebbles",

		gemGrow1: "G",
		gemGrow2: "E",
		gemGrow3: "M",
		gemGrow4: "S",
		gemGrow5: "T",
		gemGrow6: "O",
		gemGrow7: "N",
		gemGrow8: "E",
		gemGrow9: "P",
		gemGrow10: "R",
		gemGrow11: "E",
		gemGrow12: "C",
		gemGrow13: "I",
		gemGrow14: "P",
		gemGrow15: "I",
		gemGrow16: "N",
		gemGrow17: "A",
		gemGrow18: "T",
		gemGrow19: "O",
		gemGrow20: "R",

		gemBreak1: "打开宝石盒",
		gemRemove1: "激光表演必须继续",

		sterileGlassProduction1: "玻璃消毒",
		compressionCrystalProduction1: "折叠压缩水晶",

		perfectedOrbProduction1: "分子操作",

		pureEarthProduction1: "子空间地净化",
		pureWaterProduction1: "子空间水净化",
		pureAirProduction1: "子空间气净化",
		pureFireProduction1: "子空间火净化",

		pureGolemEarthStart1: "魔像化身",

		pureGolemWaterStart1: "魔像化身",

		pureGolemAirStart1: "魔像化身",

		pureGolemFireStart1: "魔像化身",
	},
	oElementsShorthand:
	{
		Earth: "地",
		Water: "水",
		Air: "气",
		Fire: "火",
		Mud: "泥",
		Ice: "冰",
		Steam: "蒸汽",
		Sand: "沙子",
		Magma: "岩浆",
		Void: "虚空",
		GolemEarth: "魔像地",
		GolemWater: "魔像水",
		GolemAir: "魔像气",
		GolemFire: "魔像火",
		Alkahest: "万能溶剂",
		Revelation: "启示",
		Knowledge: "知识",
		Essence: "精华",
		Soil: "土壤",
		Obsidian: "黑曜石",
		Lava: "岩浆",
		Oil: "石油",
		Force: "强制",
		Space: "空间",
		Glass: "玻璃",
		Gold: "黄金",
		Snow: "雪",
		Cryogen: "冷冻剂",
		Solution: "解决方案",
		DistilledEarth: "蒸馏地",
		DistilledWater: "蒸馏水",
		DistilledAir: "蒸馏气",
		DistilledFire: "蒸馏火",
		Pressure: "压力",
		CompressedEarth: "压缩地",
		CompressedWater: "压缩水",
		CompressedAir: "压缩气",
		CompressedFire: "压缩火",
		EssenceEarth: "地精华",
		EssenceWater: "水精华",
		EssenceAir: "气精华",
		EssenceFire: "火精华",
		SoilEarth: "土壤地",
		SoilWater: "土壤水",
		SoilAir: "土壤气",
		SoilFire: "土壤火",
		SeedEarth: "地种子",
		SeedWater: "水种子",
		SeedAir: "气种子",
		SeedFire: "火种子",
		PlantEarth: "种地",
		PlantWater: "种水",
		PlantAir: "种气",
		PlantFire: "种火",
		PureEssenceEarth: "纯地精华",
		PureEssenceWater: "纯水精华",
		PureEssenceAir: "纯气精华",
		PureEssenceFire: "纯火精华",
		Coolant: "冷却液",
		Gale: "大风",
		Cryospire: "冰锥",
		Vortex: "涡流",
		Blaze: "火焰",
		Blast: "爆破",
		Pyro: "焦酚",
		Coal: "煤",
		Sulphur: "硫",
		Propane: "丙烷",
		Ash: "灰烬",
		Dust: "灰尘",
		Carbon: "碳",
		Power: "功率",
		Energy: "能源",
		Fuel: "燃料",
		Diesel: "柴油机",
		Petrol: "汽油",
		Propene: "丙烯",
		Spatial: "空间",
		Temporal: "颞",
		Parallel: "平行",
		FoldedSpace: "折叠空间",
		FoldedSpatial: "折叠空间2",
		FoldedTemporal: "折叠时间",
		Time: "时间",
		NormalLimit: "正常限度",
		TurboLimit: "涡轮增压限制",
		Silver: "银",
		Bronze: "青铜",
		Copper: "铜",
		Tin: "锡",
		Aluminum: "铝",
		Iron: "铁",
		Steel: "钢",
		Clay: "黏土",
		Plastic: "塑料",
		Silicon: "硅",
		Acid: "酸",
		Mayo: "马由",
		CompressedDust: "粉尘.",
		CompressedAsh: "煤灰.",
		Gravel: "碎石",
		Pebbles: "鹅卵石",
		Stone: "石头",
		Gemstone: "宝石",
		Quartz: "石英",
		Emerald: "绿宝石",
		Sapphire: "蓝宝石",
		Topaz: "黄玉",
		Ruby: "红宝石",
		PureEarth: "纯地",
		PureWater: "纯水",
		PureAir: "纯气",
		PureFire: "纯火",
		SterileGlass: "无菌玻璃",
		CompressionCrystal: "复合晶体",
		PerfectedOrb: "完美宝珠",
		PureGolemEarth: "纯魔像地",
		PureGolemWater: "纯魔像水",
		PureGolemAir: "纯魔像气",
		PureGolemFire: "纯魔像火",
		Mystery: "奥秘",
	},
	waypoints:
	{
		center: "中心点",
		reach: "到达点",
		rarity: "物质点",
		cold: "凝固点",
		hot: "燃烧点",
		power: "电源点",
		life: "活力点",
		gem: "压力点",
		pure: "纯粹点",
	},
};

// var strangename = "";
// for (var i = 0; i < machines.list.length; i++)
// {
// 	var mach = machines.list[i];
// 	for (var j = 0; j < mach.recipes.length; j++)
// 	{
// 		var rec = mach.recipes[j];
// 		while (rec)
// 		{
// 			strangename += rec.id + ": \"" + rec.id + "\",\n";
// 			rec = mach.hiddenRecipes[rec.upgradeTo];
// 		}
// 	}
// 	strangename += "\n";
// }
function fullunlock()
{
	for (var i = 0; i < machines.list.length; i++)
	{
		var mach = machines.list[i];
		for (var j = 0; j < mach.recipes.length; j++)
		{
			var rec = mach.recipes[j];
			if (!rec.unlocked || !(!rec.upgradeTo))
			{
				rec.region.paymentSuccess();
			}
		}
	}
}

function softReset()
{
	for (var i = 0; i < data.aElements.length; i++)
	{
		switch (data.aElements[i].type)
		{
			case "Revelation":
				//data.aElements[i].amount = 0.1;
				break;
			case "NormalLimit":
			case "TurboLimit":
				data.aElements[i].amount = 1;
				break;
			case "Time":
				//data.aElements[i].amount = 1e10;
				break;
			default:
				data.aElements[i].amount = 0;
		}
	}
	savingSystem.saveData();
	location.reload();
}

function fullenable()
{
	for (var i = 0; i < machines.list.length; i++)
	{
		var mach = machines.list[i];
		for (var j = 0; j < mach.recipes.length; j++)
		{
			var rec = mach.recipes[j];
			if (!rec.enabled)
			{
				rec.enabled = true;
			}
		}
	}
}

function fullsliderino()
{
	for (var i = 0; i < machines.list.length; i++)
	{
		var mach = machines.list[i];
		for (var j = 0; j < mach.recipes.length; j++)
		{
			var rec = mach.recipes[j];

			for (var k = 0; k < rec.inputs.length; k++)
			{
				if (rec.inputs[k].upgrades)
					if (rec.inputs[k].upped < rec.inputs[k].upgrades.length)
					{
						rec.inputs[k].sliderRegion.paymentSuccess();
					}
			}
			for (var k = 0; k < rec.outputs.length; k++)
			{
				if (rec.outputs[k].upgrades)
					if (rec.outputs[k].upped < rec.outputs[k].upgrades.length)
					{
						rec.outputs[k].sliderRegion.paymentSuccess();
					}
			}
		}
	}
}

function research()
{
	var output = "";
	var elemArray;
	var elemCategories = [
		initialData.betaElements,
		midCircle.elements,
		lifeCircle.elements,
		coldCircle.elements,
		hotCircle.elements,
		powerCircle.elements,
		reachCircle.elements,
		rarityCircle.elements,
		pureCircle.elements,
	];
	for (var j = 0; j < elemCategories.length; j++)
	{
		elemArray = elemCategories[j];
		output += "\"" + j + "Circle\" : \{";
		for (var i = 0; i < elemArray.length; i++)
		{
			output += `\"${elemArray[i]}\" : \{lock:[\"${elemArray[i]}\",-1e-10],text:\"\",\},`;
		}
		output += "\},";
	}

	return output;
}
