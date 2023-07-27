const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(data) {
        this.hash = null;
        this.height = 0;
        this.body = Buffer.from(JSON.stringify(data).toString('hex'));
        this.time = 0;
        this.previousBlockHash = '';
    }

    validate() {
        const self = this;
        return new Promise((resolve, reject) => {
            let currentHash = self.hash;

            self.hash = SHA256(JSON.stringify ({ ...self, hash: null})).toString();
        });
    }
}

module.exports = Block;