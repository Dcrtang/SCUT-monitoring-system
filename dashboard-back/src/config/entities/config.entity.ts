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

  report: {
    id: string;
    name: string;
    description: string;

    length: {
      id: string;
      name: string;
      lengthNum: string;
      factLeft: string;
      factMid: string;
      factRight: string;
      theoryLeft: string;
      theoryMid: string;
      theoryRight: string;
      errorLeft: string;
      errorMid: string;
      errorRight: string;
    }[];

    width: {
      id: string;
      name: string;
      widthNum: string;
      factLeft: string;
      factMid: string;
      factRight: string;
      theoryLeft: string;
      theoryMid: string;
      theoryRight: string;
      errorLeft: string;
      errorMid: string;
      errorRight: string;
    }[];

    lengthImg: string;
    widthImg: string;

    hengImg: string;
    zongImg: string;
  }[];

  monitingData: {
    id: string;
    name: string;
    data: {
      id: string;
      name: string;
      dataImg: string;
      modelImg: string;
    }[]
  }[];

  instructions: {
    id: string;
    img: string;
  }[];

  quality: {
    id: string;
    name: string;
    img1: string;
    img2: string;
  }[];
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

  report: [
    {
      id: '033c2d74-f4ed-a38b-eb24-9ad3791bcbf0',
      name: '占位文本',
      description: '占位文本',
      length: [
        {
          id: 'b0485343-1ecf-e4be-002b-8de70e13ed2b',
          name: '占位文本',
          lengthNum: '占位文本',
          factLeft: '占位文本',
          factMid: '占位文本',
          factRight: '占位文本',
          theoryLeft: '占位文本',
          theoryMid: '占位文本',
          theoryRight: '占位文本',
          errorLeft: '占位文本',
          errorMid: '占位文本',
          errorRight: '占位文本',
        },
      ],

      width: [
        {
          id: 'd3dfcca1-7f1d-7abd-7742-013f687ee63a',
          name: '占位文本',
          widthNum: '占位文本',
          factLeft: '占位文本',
          factMid: '占位文本',
          factRight: '占位文本',
          theoryLeft: '占位文本',
          theoryMid: '占位文本',
          theoryRight: '占位文本',
          errorLeft: '占位文本',
          errorMid: '占位文本',
          errorRight: '占位文本',
        },
      ],
      lengthImg: 'https://iph.href.lu/200x200?text=占位图片',
      widthImg: 'https://iph.href.lu/200x200?text=占位图片',
      hengImg: 'https://iph.href.lu/200x200?text=占位图片',
      zongImg: 'https://iph.href.lu/200x200?text=占位图片',
    },
  ],

  monitingData: [
    {
      id: '15a35aa2-e2fd-4c68-a24c-069e4622067b',
      name: '占位文本',
      data: [
        {
          id: '3b9786c0-f8a6-b6f2-ee88-6dc5f1347e21',
          name: '占位文本',
          dataImg: 'https://iph.href.lu/200x200?text=占位图片',
          modelImg: 'https://iph.href.lu/200x200?text=占位图片',
        }
      ]
    }
  ],

  instructions: [
    {
      id: '9826018f-69da-5cb6-bf4b-fc7b37b82a88',
      img: 'https://iph.href.lu/200x200?text=占位图片',
    },
  ],

  quality: [
    {
      id: '5459879e-dc9f-4aa3-8aba-b62871f9f853',
      name: '占位文本',
      img1: 'https://iph.href.lu/200x200?text=占位图片',
      img2: 'https://iph.href.lu/200x200?text=占位图片',
    },
  ],
};
