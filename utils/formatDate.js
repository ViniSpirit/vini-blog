const formatDate = (date) => {
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const data = new Date(date);
  const day = data.getDate() <= 9 ? `0${data.getDate()}` : data.getDate();
  let dataFormatada =
    day + "/ " + meses[data.getMonth()] + "/ " + data.getFullYear();
  return dataFormatada;
};

export default formatDate;
