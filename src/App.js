import React, { useState } from "react";
import Alerts from "./components/Alerts";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode enable", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enable", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Divine_spirit"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alerts alert={alert} />
        <div className="container">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <Text
                showAlert={showAlert}
                heading="Enter the text to analyse"
                mode={mode}
              />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* // </Router> */}
    </>
  );
}

export default App;
