const Blockchain = require("./src/blockchain");
const Block = require("./src/block");

async function run() {
    const blockchain = await new Blockchain();
    const block1 = new Block({ data: "Block #01" });
    await blockchain.addBlock(block1);
    const block2 = new Block({ data: "Block #02" });
    await blockchain.addBlock(block2);
    const block3 = new Block({ data: "Block #03" });
    await blockchain.addBlock(block3);

    blockchain.print();
}

run();