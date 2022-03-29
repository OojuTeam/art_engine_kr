const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata (update all 3 values below with 'npm run update_info')
const namePrefix = "원룸"; //원룸#1, 원룸#2 같이 번호와 함께 이름지어질 이름을 적습니다.
const description = "원룸은 대한민국의 평범한 청춘이라면 모두 겪었을 하나의 공간이다. 이 안에서 펼쳐질 수많은 가능성을 이 컬렉션을 통해 만날 수 있다."; //모든 아트에 동일하게 들어가게될 설명글
const baseUri = "ipfs://INSERT_HERE"; // copy/paste Pinata > CID here!

const layerConfigurations = [
  {
    growEditionSizeTo: 300, // 제너레이트 할 작품 갯수
    layersOrder: [
      {
        name: "1. wall and floor", // 폴더명이자 properties
        options: {
          displayName: '벽과 바닥'
        }
      },
      {
        name: "2. window",
        options: {
          displayName: '창문'
        }
      },
      {
        name: "3. bed",
        options: {
          displayName: '침대'
        }
      },
      {
        name: "4. table",
        options: {
          displayName: '가구'
        }
      },
      {
        name: "5. decoration",
        options: {
          displayName: '장식'
        }
      },
      {
        name: "6. pet",
        options: {
          displayName: '애완동물'
        }
      },
      {
        name: "7. deposit",
        options: {
          displayName: '보증금'
        }
      },
      {
        name: "8. monthly rent",
        options: {
          displayName: '월세'
        }
      },
    ],
  }
];

const shuffleLayerConfigurations = false; // IF true, groups will be mixed in final NFT mint (Hangul was 'true')

const debugLogs = false;

const format = {
  width: 4000,
  height: 4000,
  smoothing: false,
};

const gif = {
  export: false,//true 는 내가 만약 gif 제너레이티브 아트를 만든다면
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  artist: 'Seyoung Han',//작가명 적기
  agency: 'Ooju'
};

const rarityDelimiter = "#"; // note: image file names CANNOT have '-' dashes!

const uniqueDnaTorrance = 300; // was 10,000, set to collection size 이 숫자 밑으로는 동일한 것이 생성되지 않는다. 따라서 컬렉션 수 이상으로 기입할 것.

const preview = {
  thumbPerRow: 25,//가로에 있는 작품 수
  thumbWidth: 50,//작품 하나당 픽셀 크기
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 15,
  order: "MIXED", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};


module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
