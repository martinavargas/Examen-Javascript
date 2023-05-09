const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
const weekDays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

let thirdCup = new Date("2022,12,18");
let today = new Date(Date.now());

function humanizeDate() {
  return `${weekDays[thirdCup.getDay()]}, ${thirdCup.getDate()} de ${
    months[thirdCup.getMonth()]
  } de ${thirdCup.getFullYear()}.`;
}

function timeFromTheThird() {
  let diference = today.getTime() - thirdCup.getTime();

  let mins = 1000 * 60;
  let hours = mins * 60;
  let days = hours * 24;

  let daysBetweenDates = Math.floor(diference / days);
  diference -= daysBetweenDates * days;

  let hoursBetweenDates = Math.floor(diference / hours);
  diference -= hoursBetweenDates * hours;

  let minutesBetweenDates = Math.floor(diference / mins);
  diference -= minutesBetweenDates * mins;

  console.log(
    `Pasaron ${daysBetweenDates} días, ${hoursBetweenDates} horas y ${minutesBetweenDates} minutos desde el ${humanizeDate()}`
  );
}
timeFromTheThird();
