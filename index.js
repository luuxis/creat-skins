let divSkin = document.querySelector('.skin');
let canvas = document.createElement("canvas");

function loadSkin(url) {
    let img = new Image();
    img.src = url;
    return img;
}


function creatHead(x, y, width, height) {
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");
    let img = loadSkin('http://textures.minecraft.net/texture/ac3de5b50fb6174da51032677ead046295486bf682b3ea73e0617a210c4b4f46');
    img.onload = () => {
        ctx.drawImage(img, x, y, width, height, 0, 0, width, height);
    }
    divSkin.appendChild(canvas);
}

creatHead(8, 8, 8, 8);