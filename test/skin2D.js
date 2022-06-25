const jimp = require('jimp');

class skin2D {
    constructor(buffer) {
        this.buffer = buffer;
    }

    async getSkin() {
        return {
            head: await this.getHead(),
            // body: await this.getBody(),
            original: await this.getOriginal()
        };
    }

    async getHead() {
        let head_inner_crop = (await jimp.read(this.buffer)).crop(8, 8, 8, 8);
        let head_outer_crop = (await jimp.read(this.buffer)).crop(40, 8, 8, 8);

        let head = head_inner_crop.composite(head_outer_crop, 0, 0);

        return head.getBase64Async(jimp.MIME_PNG);
    }

    // async getBody() {}

    async getOriginal() {
        return await (await jimp.read(this.buffer)).getBase64Async(jimp.MIME_PNG);
    }
}

module.exports = skin2D;