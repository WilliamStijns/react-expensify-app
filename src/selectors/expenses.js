import moment from 'moment';
// get Visible expenses

export default (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter ((expense) => {
    const createAtMoment = moment(expense.createAt);
    console.log(createAtMoment,startDate);
   // console.log(startDate.isSameOrBefore(createAtMoment,'day'));
    const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment,'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment,'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text);

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createAt < b.createAt ? 1 : -1;
    } else if (sortBy = 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};