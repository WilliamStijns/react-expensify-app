// HOC : a component that renders other components
// Advantages
  // to reuse code
  // render hijacking
  // Prop maniupulation
  // Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

// standard component
const Info = (props) => (
  <div>
    <h1> This is my Info</h1>
    <p>What is it? {props.info}</p>
  </div>
);

// HOC
// create a regular functions: with AdminWarning with a component as the props

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Please note that this is private info. Do not distribute </p> }
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
          <WrappedComponent {...props}/>
        ) : (
          <p> Please login to get access. </p> 
        )
      }
    </div>
  )
}

// create the HOCs by running the regular functions with the initial standard component as props
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// render the HOC: with it's own props and props of the standard component

// ReactDOM.render(<AdminInfo isAdmin= {true} info="It is a house full of cats"/>, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="The module supports your time management"/>, document.getElementById('app'));

