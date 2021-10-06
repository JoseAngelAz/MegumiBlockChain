/**
 * Pruebas unitarias.
 * Comprobar que se cree bien el bloque genesis.
 * Comprobar que el siguiente bloque se cree bien.
 */

const BlockChain = require('./blockchain');
const Block = require('./block');

describe('blockchain', ()=>{
    let bc;
    beforeEach(()=>{
        bc = new BlockChain();
    });
//prueba 1:
    it('Start the genesis block', ()=>{
        expect(bc.chain[0]).toEqual(Block.genesis());
    });
//prueba 2:
    it('add the new block', ()=>{
        const data = "Megumi Abigail Azucena Luna";
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length -1].data).toEqual(data);
    });  
});