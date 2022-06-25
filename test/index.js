const jimp = require('jimp');

let URL = 'http://textures.minecraft.net/texture/ac3de5b50fb6174da51032677ead046295486bf682b3ea73e0617a210c4b4f46';


async function main() {
    const headFile1 = await jimp.read(URL);
    const headFile2 = await jimp.read(URL);

    let head_crop = headFile1.crop(8, 8, 8, 8);
    let head_crop_2 = headFile2.crop(40, 8, 8, 8);

    head_crop.composite(head_crop_2, 0, 0).write('head.png')
}


main();