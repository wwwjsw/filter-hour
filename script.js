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

var present_date = new Date(); 

var filteredDates = dates.filter(chatIsOnline)

function chatIsOnline(operator) {
  return operator.tsCriacao == operator.tsCriacao
}



console.log(JSON.stringify(filteredDates))