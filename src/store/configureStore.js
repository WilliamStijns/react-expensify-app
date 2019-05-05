import {createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// const store = createStore(expensesReducer); EXPENSES NEED TO COMBINE WITH FILTER REDUCER

export default () => {
  const store = createStore (
    combineReducers ({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
