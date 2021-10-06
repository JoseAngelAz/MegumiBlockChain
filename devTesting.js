const Block = require('./block');

const genesis = Block.genesis();
const fooBlock = Block.mineBlock(genesis, []);

console.log(genesis.toString());
console.log(fooBlock.toString());