const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode, 
  techList, 
  hydrate
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
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });

  it('verifica se numero é divisivel por 3', () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });

  it('verifica se numero é divisivel por 5', () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });

  it('verifica se numero não é divisivel por 3 e 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('verifica se não é um numero', () => {
    expect(typeof myFizzBuzz('não é um numero')).not.toBe('number');
  });
});

describe ('testas as funções encode e decode', () => {
  it('Testa se encode e decode são funções', () => {
    expect(typeof encode && typeof decode).toEqual('function');
  });

  it('verifica se a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });

  it('verifica se 1, 2, 3, 4 e 5 são convertidas em a, e, i, o, u', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  it('verifica se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('f, g, h, j, l')).not.toBe('1, 2, 3, 4, 5');
    expect(decode('6, 8, 9, 0, 7')).not.toBe('a, e, i, o, u');
  });

  it('Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('52565').length).toEqual(5);
    expect(encode('esa5s').length).toEqual(5);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

