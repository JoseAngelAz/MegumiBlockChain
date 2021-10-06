const Block = require('./block');


//comprobar datos de entrada y comprobacion de hashes
describe('block',()=>{
    let data, lastBlock, block;
    beforeEach(()=>{
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('Set the data in block to match the input', ()=>{
        expect(block.data).toEqueal(data);
    });
    it('Set the lastHash in block to match the hash of the last Block', ()=>{
        expect(block.lastHash).toEqueal(lastBlock.hash);
    });
});