const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toUTCString();
};

export default formatDate;
