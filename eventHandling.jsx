import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:


// don't change the Component name "App"
export default function App() {
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    function deleteHandler (){
        setIsDeleting(true);
    }
    
    function proceedHandler() {
        setIsDeleting(false);
    }
    
    let warning;
        
    if (isDeleting) {
        warning = (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick = {proceedHandler}>Proceed</button>
        </div>
        );
    }
    
    if (!isDeleting) {
        warning = (
        <button onClick={deleteHandler}>Delete</button>
        );
    }
    
    return (
      <div>
        {warning}
      </div>    
    );
}