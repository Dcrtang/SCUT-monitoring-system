export interface Config {
  intro: {
    text: string;
    img: string;

    members: {
      name: string;
      cert: string;
      title: string;
    }[];

    unitData: {
      type: string;
      area: string;
      // 抗弯惯性矩
      moment: string;
    }[];
    bridgeImg: string;
  };

  progress: {
    text: string;
    img: string;
  }[];

  monitingData: {
    dataImg: string;
    modelImg: string;
  }[];

  instructionImg: string[];

  quality: {
    img1: string;
    img2: string;
  };
}

export const defaultConfig: Config = {
  intro: {
    text: '占位文本',
    img: 'https://iph.href.lu/200x200?text=占位图片',
    members: [
      {
        name: '占位文本',
        cert: '占位文本',
        title: '占位文本',
      },
    ],
    unitData: [
      {
        type: '占位文本',
        area: '占位文本',
        moment: '占位文本',
      },
    ],
    bridgeImg: 'https://iph.href.lu/200x200?text=占位图片',
  },
  progress: [
    {
      text: '占位文本',
      img: 'https://iph.href.lu/200x200?text=占位图片',
    },
  ],

  monitingData: [
    {
      dataImg: 'https://iph.href.lu/200x200?text=占位图片',
      modelImg: 'https://iph.href.lu/200x200?text=占位图片',
    },
  ],

  instructionImg: ['https://iph.href.lu/200x200?text=占位图片'],

  quality: {
    img1: 'https://iph.href.lu/200x200?text=占位图片',
    img2: 'https://iph.href.lu/200x200?text=占位图片',
  },
};
