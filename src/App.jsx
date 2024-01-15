import { useState } from "react";

import Navbar from "./component/Navbar";
import Facts from "./component/Facts";

import "./style.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Facts darkMode={darkMode} />
    </div>
  );
}
