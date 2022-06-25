const skin2D = require('./skin2D.js');
const nodeFetch = require('node-fetch');
let URL = 'http://textures.minecraft.net/texture/ac3de5b50fb6174da51032677ead046295486bf682b3ea73e0617a210c4b4f46';


async function main() {
    let buffer = await Skin();
    let skin = new skin2D(buffer);

    console.log(await skin.getSkin());

}

main();



async function Skin() {
    let buffer = await nodeFetch(URL).then(res => res.buffer());
    return buffer;
}