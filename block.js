const SHA256 = require('crypto-js/sha256');

class Block {

    constructor(timestamp,lastHash,ownHash,data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.ownHash = ownHash;
        this.data = data;
    }

    //devolver info del block
    toString(){
        return `Block -
                Time Stamps: ${this.timestamp}
                Last Hash: ${this.lastHash}
                Own Hash: ${this.ownHash}
                Data: ${this.data}`;
    }

    //Creacion de bloque
    static genesis(){
        return new this('Genesis Time',"0".repeat(64),"0".repeat(64),[]);
    }

    //Minar bloque
    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = this.hash(timestamp,lastHash,data);
        return new this(timestamp, lastHash, hash, data);
    }

    // crear SHA256
    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash},${data}`).toString();
    }
}

module.exports = Block;