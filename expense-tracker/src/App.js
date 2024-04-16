import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
