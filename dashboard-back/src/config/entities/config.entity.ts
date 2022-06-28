export interface Config {
  title: string;

  intro: {
    text: string;
    img: string;

    members: {
      id: string;
      name: string;
      cert: string;
      title: string;
    }[];

    unitData: {
      id: string;
      type: string;
      area: string;
      // 抗弯惯性矩
      moment: string;
    }[];
    bridgeImg: string;
  };

  progress: {
    id: string;
    name: string;
    text: string;
    img: string;
  }[];

  monitingData: {
    id: string;
    name: string;
    dataImg: string;
    modelImg: string;
  }[];

  instructions: {
    id: string;
    img: string;
  }[];

  quality: {
    img1: string;
    img2: string;
  };
}

export const defaultConfig: Config = {
  title: '华南理工大学施工监测系统',
  intro: {
    text: '占位文本',
    img: 'https://iph.href.lu/200x200?text=占位图片',
    members: [
      {
        id: '63be0292-7e27-ed7f-a364-1d0982bcdd8a',
        name: '占位文本',
        cert: '占位文本',
        title: '占位文本',
      },
    ],
    unitData: [
      {
        id: '57360c0b-f7b4-d6d1-cd7d-3cdeece83090',
        type: '占位文本',
        area: '占位文本',
        moment: '占位文本',
      },
    ],
    bridgeImg: 'https://iph.href.lu/200x200?text=占位图片',
  },
  progress: [
    {
      id: 'ea6b30a1-550c-bb3a-6275-0d70b898d7f9',
      name: '占位文本',
      text: '占位文本',
      img: 'https://iph.href.lu/200x200?text=占位图片',
    },
  ],

  monitingData: [
    {
      id: '3b9786c0-f8a6-b6f2-ee88-6dc5f1347e21',
      name: '占位文本',
      dataImg: 'https://iph.href.lu/200x200?text=占位图片',
      modelImg: 'https://iph.href.lu/200x200?text=占位图片',
    },
  ],

  instructions: [
    {
      id: '9826018f-69da-5cb6-bf4b-fc7b37b82a88',
      img: 'https://iph.href.lu/200x200?text=占位图片',
    },
  ],

  quality: {
    img1: 'https://iph.href.lu/200x200?text=占位图片',
    img2: 'https://iph.href.lu/200x200?text=占位图片',
  },
};
