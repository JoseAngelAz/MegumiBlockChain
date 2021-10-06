

const Block = require('./block');

class BlockChain{
    constructor(){
        this.chain = [Block.genesis()];
    }

//conseguir ultimo bloque
    getLastBlock(){
        return this.chain[this.addBlock.chain.length -1]
    }    

//agregar bloque
    addBlock(data){
        const block = Block.mineBlock(this.getLastBlock, data);
        this.chain.push(block);
        return block;
    }
}

module.exports = BlockChain;