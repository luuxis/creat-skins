const skin2D = require('./skin2D.js');
const nodeFetch = require('node-fetch');
const fs = require('fs');

let URL = 'http://textures.minecraft.net/texture/ac3de5b50fb6174da51032677ead046295486bf682b3ea73e0617a210c4b4f46';


async function main() {
    let buffer = await Skin();
    let skin = new skin2D(buffer);
    let skin_data = (await skin.getSkin()).body;

    console.log(skin_data);

}
main();



async function Skin() {
    let buffer = await nodeFetch(URL).then(res => res.buffer());
    return buffer;
}

function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}