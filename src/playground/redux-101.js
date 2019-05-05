import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1 }={}) => ({
  type : 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1 } = {}) => ({
  type : 'DECREMENT',
  decrementBy
});

const setCount = ({count = 100} = {}) => ({
  type : "SET",
  count
});

const resetCount = ({count = 0} = {}) => ({
  type : "RESET",
  count
});

const store = createStore ((state ={count:0}, action) => {
  switch (action.type) {
    case 'INCREMENT' : 
        return {
          count: state.count+action.incrementBy
        }
    case 'DECREMENT' : 
        return {
          count: state.count-action.decrementBy
      }    
      case 'SET' : 
      return {
        count: action.count
    }
      case 'RESET' : 
      return {
        count: 0
    }      
     default:
      return state;
    }; 
});

const unsubscribe = store.subscribe (()=> {
  console.log(store.getState().count)
});


store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(decrementCount());

store.dispatch(setCount({count:101}));

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:99}));

unsubscribe();

