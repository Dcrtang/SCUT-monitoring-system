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