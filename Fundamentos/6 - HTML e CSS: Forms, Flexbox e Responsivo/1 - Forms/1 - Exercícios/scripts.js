let states = [
  'Acre' ,
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná' ,
  'Pernambuco',
  'Piauí' ,
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
]

const estadosLoc = document.querySelector('#estados');
let adcOption = document.createElement('option');


function criaestados() {
  for (let index = 0; index < states.length; index += 1){
    let adcOption = document.createElement('option');
    adcOption.innerHTML = states[index];
    estadosLoc.appendChild(adcOption)
  }
} criaestados()

let locData = document.querySelector('#data');
let valorData = locData.value;

function verificaData() {
  for (let lista of valorData) {
    if (lista[2] !== '/' && lista[5] !== "/")
    alert('errado');
  }
} verificaData()