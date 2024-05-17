import React from "react";
import Button2 from "./components/Button2";
import Alert2 from "./components/Alert2";

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
