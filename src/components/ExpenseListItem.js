import React from 'react';
import {Link} from 'react-router-dom';


const ExpenseListItem = ( {id, description, amount, createAt}) => (
   <div>     
    <Link to={`/edit/${id}`}>
        <h1>{description}</h1>
    </Link>
    <p> {amount} and {createAt} </p>
    
  </div>
);

export default ExpenseListItem;