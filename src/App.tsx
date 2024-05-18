import React from "react";
import Alert3 from "./components/Alert3";
import Button3 from "./components/Button3";

const App = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <h1>App</h1>
      {visible && (
        <div className="alert">
          <h2 className="text-primary">Visible</h2>
            <Alert3 mcc={()=> setVisible(false)}>
            </Alert3>
        </div>
      )}
      {!visible && (
        <div className="alert">
          <h2 className="text-danger">Invisible</h2>
        </div>
      )}
      <Button3 onClick={() => {console.log("clicked"); setVisible(!visible)}} />
    </div>
  );
};

export default App;
