import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import Classes from "./components/Classes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const [mode, setmode] = useState("light");

  const bgclassremove = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-dark");
  };
  const togglemode = (cls) => {
    console.log("primary");
    bgclassremove();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Navbar"
          mode={mode}
          togglemode={togglemode}
          contTx="Home"
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/about"
              element={<About key="about" title="About Us" mode={mode} />}
            />
            {/* // <About   title="About Us" mode = {mode} /> */}
            <Route
              path="/form"
              element={
                <Textform
                  key="welcome us"
                  txt="welcome"
                  mode={mode}
                  showalert={showalert}
                  togglemode={togglemode}
                />
              }
            />
          </Routes>
        </div>
        {/* <About title = "About Us"/> */}

        <Classes />
      </Router>
    </>
  );
}
export default App;
