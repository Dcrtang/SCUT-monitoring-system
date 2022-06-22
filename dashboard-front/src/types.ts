export interface Config {
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
    text: string;
    img: string;
  }[];

  monitingData: {
    id: string;
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
