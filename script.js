var dates = [
  {
    "inicio": "2019-10-15T09:00:00Z",
    "fim": "2019-10-15T18:00:00Z",
    "operadora":"unimed",
  },{
    "inicio": "2019-10-15T07:00:00Z",
    "fim": "2019-10-15T17:50:00Z",
    "sistema":"unimed federação",
  }
]


var filteredDates = dates.filter(chatIsOnline)

function chatIsOnline(operator) {
  var horarioAgora = new Date(Date.now())
  var horarioInicio = new Date(operator.inicio);
  var horarioFinal = new Date(operator.fim);
  
  horarioAgora = horarioAgora.getHours();
  horarioInicio = horarioInicio.getUTCHours();
  horarioFinal = horarioFinal.getUTCHours();

  if (horarioAgora >= horarioInicio && horarioAgora <= horarioFinal) {
    console.log('dentro do horario de funcionamento')
  } else {
    console.error('fora do horario de funcionamento')
  }
  return operator
}

console.log(filteredDates);
// console.log(JSON.stringify(filteredDates))