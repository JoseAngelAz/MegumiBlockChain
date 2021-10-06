const Block = require('./block');


//comprobar datos de entrada y comprobacion de hashes
describe('block',()=>{
    let data, lastBlock, block;
    beforeEach(()=>{
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });
//test 1: meter datos en el bloque para comparar el input
    it('Set the data in block to match the input', ()=>{
        expect(block.data).toEqual(data);
    });
//test 2: meter el ultimo hash en el block para comparar el hash de el ultimo bloque
    it('Set the lastHash in block to match the hash of the last Block', ()=>{
        expect(block.lastHash).toEqual(lastBlock.hash);
    });
});