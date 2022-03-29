# 우주의 아트 엔진
powered by the [HashLips art engine](https://github.com/HashLips/hashlips_art_engine).

## Installation 🛠️

```sh
git clone https://github.com/OojuTeam/art_engine_kr.git
npm install
```

## Usage ℹ️

When you are ready, run the following command and your outputted art will be in the `build/images` directory and the json in the `build/json` directory:

```sh
npm run build
```

The program will output all the images in the `build/images` directory along with the metadata files in the `build/json` directory. Each collection will have a `_metadata.json` file that consists of all the metadata in the collection inside the `build/json` directory. The `build/json` folder also will contain all the single json files that represent each image file. The single json file of a image will look something like this:

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

## Utils

### Updating baseUri for IPFS and description

You might possibly want to update the baseUri and description after you have ran your collection. To update the baseUri and description simply run:

```sh
npm run update_info
```

### Generate a preview collage image

Create a preview image collage of your collection:

```sh
npm run preview
```

### Generate a preview GIF image

Create a preview GIF of your collection:

```sh
npm run preview_gif
```

### Generate pixelated images from collection

In order to convert images into pixelated images you would need a list of images that you want to convert. So run the generator first.

Then simply run this command:

```sh
npm run pixelate
```

All your images will be outputted in the `/build/pixel_images` directory.
If you want to change the ratio of the pixelation then you can update the ratio property on the `pixelFormat` object in the `src/config.js` file. The lower the number on the left, the more pixelated the image will be.

```js
const pixelFormat = {
  ratio: 5 / 128,
};
```

### Generate GIF images from collection

In order to export gifs based on the layers created, you just need to set the export on the `gif` object in the `src/config.js` file to `true`. You can also play around with the `repeat`, `quality` and the `delay` of the exported gif.

Setting the `repeat: -1` will produce a one time render and `repeat: 0` will loop forever.

```js
const gif = {
  export: true,
  repeat: 0,
  quality: 100,
  delay: 500,
};
```

### Printing rarity data (Experimental feature)

To see the percentages of each attribute across your collection, run:

```sh
npm run rarity
```

The output will look something like this:

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

Hope you create some awesome artworks with this code 👄
