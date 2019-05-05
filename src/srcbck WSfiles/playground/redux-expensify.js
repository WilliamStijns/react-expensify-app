import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

console.log('redux-expensify');

// Expense Reducer
    // ADD_EXPENSE - return the Expense object including a 'type' property!!!!!

const addExpense = ({
    description = '', 
    note = '', 
    amount = 0, 
    createAt = 0
  }) =>
({
    type : 'ADD_EXPENSE',
    expense: {
      id : uuid(),
      description,
      note,
      amount,
      createAt
    }
});
    // REMOVE_EXPENSE

const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id 
});

    // EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})

// Filter Reducer
    // SET_TEXT_FILTER

const setTextFilter = (text = "") =>({
  type : "SET_TEXT_FILTER",
  text
});

    // SET_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

    // SET_BY_AMOUNT

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

    // SET_START_DATE
const setStartDate = (start = undefined) =>({
  type : 'SET_START_DATE',
  start
})

    // SET_END_DATE

const setEndDate = (end = undefined) =>({
  type : 'SET_END_DATE',
  end
})
    
// Expenses Reducer

const  expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState,action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];  
    case 'REMOVE_EXPENSE':
      return state.filter( ({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map ((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      })    
    default:
      return state
  }
};

// Filter Reducer

const filtersReducerDefaultState = {
    text : '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state=filtersReducerDefaultState,action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
          ...state,
          text : action.text
        }
    case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy : 'date'
        }
    case 'SORT_BY_AMOUNT':
    return {
      ...state,
      sortBy : 'amount'
    }    
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.start      
      }
      case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.end      
      }
    default: 
      return state
  }
}

// const store = createStore(expensesReducer); NEED TO COMBINE WITH FILTER REDUCER

const store = createStore (
  combineReducers ({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const demoState = {
  expense :[{
    id: 'abcdefghij',
    description: 'January rent',
    note: 'This was the final payment',
    amount: 54500,
    createAt: 0
  }],
  filter : {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter ((expense) => {
    const startDateMatch = typeof startDate !== 'number'|| expense.createAt >= startDate;
    const endDateMatch = typeof endDate !== 'number'|| expense.createAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes (text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createAt < b.createAt ? 1 : -1;
    } else if (sortBy = 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

store.subscribe (() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses, state.filters);
});

const expenseOne = store.dispatch(addExpense({description: "Rant", amount : 300, createAt: -13000}));
const expenseTwo = store.dispatch(addExpense({description: "Coffee rent", amount : 2100,  createAt: -1000}));

// console.log(expenseOne.expense.id);

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// console.log(expenseTwo.expense.id);
// store.dispatch(editExpense(expenseTwo.expense.id, { amount : 800}));

 // store.dispatch(setTextFilter('ant'));
// store.dispatch(setTextFilter(''));

 store.dispatch(sortByAmount()); // sortBy property should be set equal to 'amount'
// store.dispatch(sortByDate()); // sortBy property should be set equal to 'date'

//store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1999));

// const user = {
//   name : "Pal",
//   age: 24
// };
// const newuser = {
//   school : "Newschool",
//   job: "Baker",
//   location : "Amsterdam"
// }

// console.log({...user, location: "kortenhoef",age:28,...newuser});