function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const weekDayDias = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const dias = dezDaysList[i];
    const dayList = document.createElement('li')
    dayList.innerHTML = dias;
    dayList.classList = 'day'
    weekDayDias.appendChild(dayList)
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      dayList.className = 'day holiday';
    } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      dayList.className = 'day friday';
    }
  }
} 
createDays();

function feri() {
  let locaButao = document.querySelector('.buttons-container');
  let butao = document.createElement('button');
  butao.className = 'btn-holiday'
  butao.innerHTML = 'Feriados'
  locaButao.appendChild(butao)
} feri();

let feriadosBu = document.querySelector('btn-holiday');
feriadosBu.addEventListener('click', evento);

function evento (){
  let corHoly = document.querySelector('.holiday');
  corHoly.innerHTML = 'oila';
}