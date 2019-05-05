import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format ('Do MMM, YYYY'));

export default class ExpenseForm extends React.Component {
  constructor(props) {
      super(props)
    
    this.state = {
      description : props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount/100).toString() : '',
      createAt : props.expense ? moment(props.expense.createAt) : moment(),
      calendarFocused : false,
      error : ""
    }
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=>({description}))
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(()=>({amount}))
    }
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(()=>({note}))
  };

  onDateChange = (createAt) => {
    if (createAt) {
      this.setState(() => ({createAt})); 
    }
  };

  onFocusChange = ({focused}) => {
    this.setState(() => ({calendarFocused:focused}));   
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(()=>({error:"Please provide a decription and an amount."}));
      console.log("Please provide a decription and an amount.");
    } else {
      this.setState(()=>({error:""}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount,10)*100, // amount is a string, need to covert , *100 the save as integer.
        createAt: this.state.createAt.valueOf(), // valueof()from moment format to number in milliseconds
        note: this.state.note      
      });
    }
  }

  render () {
    return (
      <div>
        {this.state.error && <h3>{this.state.error}</h3>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder = "Description"
            autoFocus
            value = {this.state.description}
            onChange = {this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder = "Amount"
            value= {this.state.amount}
            onChange = {this.onAmountChange}
          />
          <SingleDatePicker
            date = {this.state.createAt}
            id = "expenseFormSDP"
            onDateChange = {this.onDateChange}
            focused = {this.state.calendarFocused}
            onFocusChange = {this.onFocusChange}
            numberOfMonths= {1}
            isOutsideRange= {()=> false}
            displayFormat="Do MMM 'YY"
          />
          <textarea
            placeholder = "Add a note for your expenses (optional)"
            value = {this.state.note}
            onChange = {this.onNoteChange}
          >
          </textarea>
          <button type="submit">Add Expense</button>
        </form>


      </div>
    )
  }
};
