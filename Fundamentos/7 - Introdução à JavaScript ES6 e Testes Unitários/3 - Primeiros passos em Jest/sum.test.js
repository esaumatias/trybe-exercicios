const {
  sum,
  myRemove,
  myFizzBuzz
} = require('./sum.js');


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


describe('testa função myRemove', () => {
  it('verifica se retorna array ([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(([1, 2, 4]));
  });

  it('verifica se não retorna array ([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual(([1, 2, 3, 4]));
  });

  it('verifica se retorna array ([1, 2, 3, 4], 5)', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual(([1, 2, 3, 4]));
  });
});

describe('testa a função myFizzBuzz', () => {
  it('verifica se numero é divisivel por 3 e 5', () => {
    expect(myFizzBuzz(15).toBe("Fizz"));
  });
});