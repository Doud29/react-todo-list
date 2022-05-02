import "./App.scss";
import Header from "./composant/Header";
import Footer from "./composant/Footer";
import Main from "./composant/Main";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [switch1, setcswitch1] = useState(false);

  return (
    <div className="App">
      <Header title="To Do List" />
      <Main
        task={task}
        setTask={setTask}
        switch1={switch1}
        setcswitch1={setcswitch1}
      />
      <Footer title="Made with React by Doud " />
    </div>
  );
}

export default App;
