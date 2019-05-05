// Filter actions

// SET_TEXT_FILTER
export const setTextFilter = (text = "") =>({
  type : "SET_TEXT_FILTER",
  text
});

// SET_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
    
// SET_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
    
// SET_START_DATE
export const setStartDate = (start = undefined) =>({
  type : 'SET_START_DATE',
  start
})
    
// SET_END_DATE
export const setEndDate = (end = undefined) =>({
  type : 'SET_END_DATE',
  end
})