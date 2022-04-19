# 우주의 아트 엔진
powered by the [HashLips art engine](https://github.com/HashLips/hashlips_art_engine).

## Installation 🛠️
[Eng]
1. Download the code [here](https://github.com/OojuTeam/art_engine_kr/archive/refs/heads/master.zip).
2. Set up NPM on your computer ([Windows](https://docs.google.com/document/d/1DaNbDBdz4x_NmwocYB3vM5VUrNogjNLYpM-9PCH3ohI/edit?usp=sharing), [Mac](https://docs.google.com/document/d/1oqBtrzHbR3X4fHzNdepf-njBKx0Uzc272FtF31L7n-8/edit?usp=sharing))
3. Navigate to your code with PowerShell ([Windows](https://docs.google.com/document/d/1qaMaYR166vuLvhlE1NIPxnZ7xdwPqzvaa2RxbjDz320/edit)) or Terminal ([Mac](https://docs.google.com/document/d/1BB9qRPauDQmI1FF1sg7g1D2GbkaurkZMxRNa6GBKMUU/edit))
4. `npm install`

[Kor]
1. 코드를 여기[여기](https://github.com/OojuTeam/art_engine_kr/archive/refs/heads/master.zip).서 다운받습니다. 
2. 컴퓨터에 NPM을 셋업 해주세요. ([Windows](https://docs.google.com/document/d/1DaNbDBdz4x_NmwocYB3vM5VUrNogjNLYpM-9PCH3ohI/edit?usp=sharing), [Mac](https://docs.google.com/document/d/1oqBtrzHbR3X4fHzNdepf-njBKx0Uzc272FtF31L7n-8/edit?usp=sharing))
3. PowerShell을 통해 코드를 살펴봅니다. ([Windows](https://docs.google.com/document/d/1qaMaYR166vuLvhlE1NIPxnZ7xdwPqzvaa2RxbjDz320/edit)) or Terminal ([Mac](https://docs.google.com/document/d/1BB9qRPauDQmI1FF1sg7g1D2GbkaurkZMxRNa6GBKMUU/edit))
4. 터미널에 'npm install' 을 입력하세요


## Usage ℹ️

When you are ready, run the following command and your outputted art will be in the `build/images` directory and the json in the `build/json` directory
준비가 되었다면, 아래의 명령을 실행하세요. 그럼 `build/images`폴더에 아트 결과물이 생성되어 있고 `build/json`에 메타데이터(json)이 생성되어 있을 것입니다 :

```sh
npm run build
```

The program will output all the images in the `build/images` directory along with the metadata files in the `build/json` directory. Each collection will have a `_metadata.json` file that consists of all the metadata in the collection inside the `build/json` directory. The `build/json` folder also will contain all the single json files that represent each image file. The single json file of a image will look something like this
이 프로그램은 모든 이미지 결과물을 `build/images`에 만들고 그 이미지에 따른 메타데이터 파일을 `build/json`여기에 만듭니다. 각 컬렉션은 `_metadata.json` 형식의 파일이 만들어지는데 이는 컬렉션의 모든 메타데이터로 구성되어 `build/json`에 저장됩니다. 이 `build/json`폴더에는 각각의 이미지를 대표하는 각각의 json 파일들도 만들어집니다. 하나의 json 파일의 형태는 아래와 같습니다.:

```json
{
  "name": "원룸 #1",
  "description": "원룸은 대한민국의 평범한 청춘이라면 모두 겪었을 하나의 공간이다. 이 안에서 펼쳐질 수많은 가능성을 이 컬렉션을 통해 만날 수 있다.",
  "image": "ipfs://INSERT_HERE/1.png",
  "dna": "53dc55f9f1080afa9101d1a5e412a366d696f197",
  "edition": 1,
  "date": 1648481709956,
  "artist": "Seyoung Han",
  "agency": "Ooju",
  "attributes": [
    {
      "trait_type": "벽과 바닥",
      "value": "light blue"
    },
    {
      "trait_type": "창문",
      "value": "station"
    },
    {
      "trait_type": "침대",
      "value": "bench press"
    },
    {
      "trait_type": "가구",
      "value": "iMac"
    },
    {
      "trait_type": "장식",
      "value": "plant"
    },
    {
      "trait_type": "애완동물",
      "value": "no pet"
    },
    {
      "trait_type": "보증금",
      "value": "50M"
    },
    {
      "trait_type": "월세",
      "value": "550K"
    }
  ]
}
```

You can also add extra metadata to each metadata file by adding your extra items, (key: value) pairs to the `extraMetadata` object variable in the `config.js` file.
당신은 또 추가 메타데이터를 모든 파일에 추가할 수 있습니다. 이는 추가 아이템을 넣음으로서 가능하며, (key: value)의 짝으로 구성하여 'config.js'파일의 'extraMetadata'개체 변수에 넣어서 할 수 있습니다. 

```js
const extraMetadata = {
  creator: "Seyoung Han",
};
```

If you don't need extra metadata, simply leave the object empty. It is empty by default.

```js
const extraMetadata = {};
```

That's it, you're done.
여기까지, 끝입니다.

## Utils

### Updating baseUri for IPFS and description | IPFS의 baseUri 또는 설명 부분 업데이트가 필요할 때

You might possibly want to update the baseUri and description after you have ran your collection. To update the baseUri and description simply run
아마 당신은 컬렉션을 모두 생성하고 난 이후에 baseUri 또는 설명 부분을 업데이트하고 싶어할 수 있습니다. 그럴 때는 baseUri 또는 설명 부분을 업데이트하고 아래의 명령을 터미널에서 실행해주세요:

```sh
npm run update_info
```

### Generate a preview collage image | 미리보기 콜라주 이미지를 만들기

Create a preview image collage of your collection
컬렉션의 미리보기 콜라주 이미지를 만들기 위해서는:

```sh
npm run preview
```

### Generate a preview GIF image | 미리보기 GIF 이미지 만들기

Create a preview GIF of your collection
컬렉션의 미리보기 GIF 이미지를 만들기 위해서는:

```sh
npm run preview_gif
```

### Generate pixelated images from collection | 컬렉션으로부터 픽셀화된 이미지를 만들기

In order to convert images into pixelated images you would need a list of images that you want to convert. So run the generator first.

Then simply run this command

이미지를 픽셀화된 이미지로 전환하기 위해서는 우선 그렇게 하고 싶은 이미지를 선정해야합니다. 그러기위해 먼저 제너레이팅을 하세요. 

그리고 아래 명령어를 터미널에 입력하세요.:

```sh
npm run pixelate
```

All your images will be outputted in the `/build/pixel_images` directory.
If you want to change the ratio of the pixelation then you can update the ratio property on the `pixelFormat` object in the `src/config.js` file. The lower the number on the left, the more pixelated the image will be.
이제 모든 당신의 이미지는 `/build/pixel_images`여기에 픽셀화되어 생성되어졌습니다. 
만약 당신이 픽셀화의 비율을 바꾸고 싶다면 `src/config.js`파일에 들어있는 'pixelFormat'개체의 비율을 수정하세요. 왼쪽 숫자가 작을수록 이미지는 더 픽셀로 쪼개집니다.

```js
const pixelFormat = {
  ratio: 5 / 128,
};
```

### Generate GIF images from collection | 컬렉션에서 GIF 이미지를 제너레이팅하기

In order to export gifs based on the layers created, you just need to set the export on the `gif` object in the `src/config.js` file to `true`. You can also play around with the `repeat`, `quality` and the `delay` of the exported gif.

Setting the `repeat: -1` will produce a one time render and `repeat: 0` will loop forever.

레이어들을 통해 GIF 이미지를 제너레이트하기 위해서는 `src/config.js`파일에 'gif' 개체의 값을 먼저 'true'로 바꿔주면 됩니다. 작품에 따라 'repeat', 'quality' 그리고 'delay' 값을 변경해보세요. 

'repeat: -1'으로 설정하는 것은 1번 렌더 되는 것을 생성할 것이고 'repeat: 0'는 영원히 루핑되는 것을 생성할 것입니다.


```js
const gif = {
  export: true,
  repeat: 0,
  quality: 100,
  delay: 500,
};
```

### Printing rarity data (Experimental feature) | 레어리티 데이터를 뽑아보기 (실험중인 기능)

To see the percentages of each attribute across your collection, run
컬렉션에 들어있는 각 트레이트의 구성 퍼센티지를 보려면 아래 명령을 실행하세요 :

```sh
npm run rarity
```

The output will look something like this
결과물은 이렇게 보일 것입니다.:

```sh
Trait type: Top lid
{
  trait: 'High',
  chance: '30',
  occurrence: '3 in 20 editions (15.00 %)'
}
{
  trait: 'Low',
  chance: '20',
  occurrence: '3 in 20 editions (15.00 %)'
}
{
  trait: 'Middle',
  chance: '50',
  occurrence: '14 in 20 editions (70.00 %)'
}
```

Hope you create some awesome artworks with this code 
당신이 이 코드로 멋진 아트웍을 만들어 내길 바랍니다. 👄
