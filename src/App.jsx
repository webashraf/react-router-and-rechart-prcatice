import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="bg-danger px-2 py-3">
        <Header></Header>
      </div>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
