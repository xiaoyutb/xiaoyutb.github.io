const weekData = [
  {
    key: 2158798,
    name: "小鱼小鱼吃虾米",
    role: 0,
    rid: 2158798,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=2158798",
    programIncome: "80W",
    state: 0,
    remark: "【达成目标】：10公里 + 上岛过夜2天",
    img: "/images/teams/xiaoyu.png",
  },
  {
    key: 3572310,
    name: "筷筷Azy",
    role: 1,
    rid: 3572310,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=3572310",
    programIncome: "10W",
    state: 0,
    remark: "【达成目标】：劈砖🧱 X 10（不抬手）",
    img: "/images/teams/kuaizi.png",
  },
  {
    key: 241123,
    name: "火力堂主",
    role: 2,
    rid: 241123,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=241123",
    programIncome: "19W",
    state: 0,
    remark: "【达成目标】：跑步7公里 X 2 + 上岛过夜2天",
    img: "/images/teams/huolitangzhu.jpg",
  },
  {
    key: 188,
    name: "我就是Lola啊",
    role: 2,
    rid: 188,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=2454442",
    programIncome: "4W",
    state: 0,
    remark: "跑步10公里，奖励：1k",
  },
  {
    key: 7183329,
    name: "余想的room",
    role: 2,
    rid: 7183329,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=7183329",
    programIncome: "2.6W",
    state: 0,
    remark: "戒烟三天（戒烟期间被发现一次延长一天），奖励：6个月钻粉",
  },
  {
    key: 10504857,
    name: "西西Yolo丶",
    role: 2,
    rid: 10504857,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=10504857",
    programIncome: "4W",
    state: 0,
    remark: "放逐之岛3天，奖励：飞机 X 6",
  },
  {
    key: 10504894,
    name: "林北北吖y",
    role: 2,
    rid: 10504894,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=10504894",
    programIncome: "0.7W",
    state: 1,
    remark: "波比跳200个，奖励：年钻（命运哥奖励火箭）",
  },
  {
    key: 591657,
    name: "添财慧",
    role: 2,
    rid: 591657,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=591657",
    programIncome: "2.6W",
    state: 0,
    remark: "放逐之岛2天，奖励：2k",
  },
  {
    key: 10617838,
    name: "招财小阿钙",
    role: 2,
    rid: 10617838,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=10617838",
    programIncome: "--",
    state: 0,
    remark: "--",
  },
  {
    key: 11831274,
    name: "宋悦薇",
    role: 2,
    rid: 11831274,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=11831274",
    programIncome: "1.5W",
    state: 0,
    remark: "跑步10公里 + 1500开合跳，奖励：年钻",
  },
  {
    key: 10854436,
    name: "星舒婉",
    role: 2,
    rid: 10854436,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=10854436",
    programIncome: "--",
    state: 0,
    remark: "--",
  },
  {
    key: 2455089,
    name: "炫雨丶安安",
    role: 2,
    rid: 2455089,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=2455089",
    programIncome: "1.5W",
    state: 0,
    remark: "放逐之岛2天，奖励：年钻",
  },
  {
    key: 11452785,
    name: "虞清酒r",
    role: 2,
    rid: 11452785,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=11452785",
    programIncome: "4W",
    state: 0,
    remark: "3000开合跳，奖励：年钻",
  },
  {
    key: 9612115,
    name: "Mia赵米娅",
    role: 2,
    rid: 9612115,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=9612115",
    programIncome: "3.5W",
    state: 0,
    remark: "放逐之岛1天 + 3000开合跳，奖励：6个月钻粉",
  },
  {
    key: 12065672,
    name: "米妮m",
    role: 2,
    rid: 12065672,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=12065672",
    programIncome: "--",
    state: 0,
    remark: "--",
  },
  {
    key: 7888746,
    name: "怡可心呀",
    rid: 7888746,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=7888746",
    programIncome: "3W",
    state: 0,
    remark: "3000开合跳，奖励：6个月钻粉",
  },
  {
    key: 9046690,
    name: "电饭宝OoO",
    role: 2,
    rid: 9046690,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=9046690",
    programIncome: "3W",
    state: 0,
    remark:
      "放逐之岛1天 + 2天不说脏话（如说脏话，罚戒烟3天，如3天内抽烟，罚和筷子标间一天），奖励：超火",
  },
  {
    key: 12055170,
    name: "朵米熊",
    role: 2,
    rid: 12055170,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=12055170",
    programIncome: "--",
    state: 0,
    remark: "--",
  },
  {
    key: 11968334,
    name: "蜡笔小莎",
    role: 2,
    rid: 11968334,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=11968334",
    programIncome: "--",
    state: 0,
    remark: "--",
  },
  {
    key: 2555629,
    name: "水心兔",
    role: 2,
    rid: 2555629,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=2555629",
    programIncome: "--",
    state: 0,
    remark: "--",
  },
  {
    key: 11489512,
    name: "礼礼椰",
    role: 2,
    rid: 11489512,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=11489512",
    programIncome: "--",
    state: 0,
    remark: "--",
  },
  {
    key: 11954776,
    name: "可一er",
    role: 2,
    rid: 11954776,
    dyRoom: "https://www.douyu.com/topic/XYCXMTB?rid=11954776",
    programIncome: "--",
    state: 0,
    remark: "--",
  },
];
export default weekData;
