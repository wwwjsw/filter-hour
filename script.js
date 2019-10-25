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
  var horarioAgora = new Date()
  var horarioInicio = new Date(operator.inicio);
  var horarioFinal = new Date(operator.fim);
  
  horarioAgora = horarioAgora.getUTCHours();
  horarioInicio = horarioInicio.getUTCHours();
  horarioFinal = horarioFinal.getUTCHours();

  // var inicio = new Date(operator.inicio);
  // var fim = new Date(operator.fim);
  console.log(horarioAgora);
  console.log("------------")
  console.log(horarioInicio);
  console.warn(horarioFinal);
  // console.warn(new Date(operator.inicio))
  // return operator.tsCriacao == operator.tsCriacao
}


// console.log(filteredDates);
// console.log(JSON.stringify(filteredDates))