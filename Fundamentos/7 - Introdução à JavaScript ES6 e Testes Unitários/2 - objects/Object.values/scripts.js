const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const habilidades = (estudantes) => {
  const lista = Object.keys(estudantes);
  const values = Object.values(estudantes);
  for (let index = 0; index < lista.length; index += 1) {
    console.log(`${lista[index]}: ${values[index]}`)
  }
}
console.log('ESTUDANTE 1:');
habilidades(student1);
console.log('ESTUDANTE 2:');
habilidades(student2);