/* 
^In this app; props, useState, onClick, onClose, bootstrap classes, and conditional rendering are used.
Here, we have a parent component App that contains two child components Button2 and Alert2.
The Button2 component is used to show the Alert2 component when clicked.
The Alert2 component is used to show an alert message when the button is clicked.
The Alert2 component has two props: onClose and onClickCase.
The onClose prop is used to close the alert message.
The onClickCase prop is used to return the result of the button click.
The Button2 component has two props: onClick and result.
The onClick prop is used to show the alert message when the button is clicked.
The result prop is used to return the result of the button click.
The Alert2 component is used to change the color of the text based on the result of the button click.
-----
The App component contains two state variables: visible and result.
The visible state variable is used to show or hide the alert message.
The result state variable is used to return the result of the button click.

*/ 

import React from "react";
import Button2 from "./components/Button2";
import Alert2 from "./components/Alert2";
import "./App.css";

const App = () => {
  const [visible, setVisible] = React.useState(false);
  const [result, setResult] = React.useState(false);

  const handleAlertClose = () => {
    setVisible(false);
    setResult(false);
  };

  const handleAlertClickCase = () => {
    return result;
  };

  return (
    <div>
      <h1>App</h1>
      {visible && (
        <>
          <h2 className="text-primary">Visible</h2>
          <Alert2 onClose={handleAlertClose} onClickCase={handleAlertClickCase}  result={result}/>
        </>
      )}
      {!visible && (
        <>
          <h2 className="text-danger">Invisible </h2>
        </>
      )}

      <Button2
        onClick={() => {
          setVisible(true);
          setResult(true);
          alert("button is clicked...");
        }}
        result={result}
      />
    </div>
  );
};

export default App;
