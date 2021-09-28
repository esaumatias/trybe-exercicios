const sum = require('./sum.js');
const myRemove = require('./myRemove.js');

describe('testa a função sum', () => {
  it('Verifica se a soma de 4 + 5 é 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  
  it('verifica se a soma de 0 + 0 é 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  
  it('verifica se 4 e 5 geram erro com string', () => {
    expect(() => sum(4, '5')).toThrowError();
  });
  
  it('verifica mensagem de erro', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});
