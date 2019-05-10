import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();


store.subscribe (()=> {
  const state = store.getState();
  // console.log(state);
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  // console.log("Visible:",visibleExpenses, state.filters);
});


// store.dispatch(addExpense({description: "Water bill", amount : 4500}));
// store.dispatch(addExpense({description: "Gas bill", createAt: 1000}));
// store.dispatch(addExpense({description: "Rent", amount : 109500, createAt: 100}));

// store.dispatch(setTextFilter('gas'));

// setTimeout (() =>
//   store.dispatch(setTextFilter('bill')),
//   3000
// );

const jsx = (
    <Provider store = {store}>
      <AppRouter />
    </Provider>
);


ReactDOM.render(jsx,document.getElementById('app'));
