import "./App.css";

import Home from "./Home/Home";
import SideBar from "./SideBar/SideBar";

function App() {
  return (
    <div className="grid-container">
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
