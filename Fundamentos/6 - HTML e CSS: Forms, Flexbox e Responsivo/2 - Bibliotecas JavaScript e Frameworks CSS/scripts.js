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


window.addEventListener('DOMContentLoaded', function()
{
    var $min = document.querySelector('.real [name="realDPX-min"]'),
        $max = document.querySelector('.real [name="realDPX-max"]');

    $min.DatePickerX.init({
        mondayFirst: true,
        minDate    : new Date(2021, 5, 9),
        maxDate    : $max
    });

    $max.DatePickerX.init({
        mondayFirst: true,
        minDate    : $min,
        maxDate    : function()
        {
            var date = new Date();
            return new Date().setDate(date.getDate() + 10);
        },
        clearButton: false
    });

});