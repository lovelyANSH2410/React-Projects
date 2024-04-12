import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ContextProvider } from "./components/Store/Context";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </ContextProvider>
  );
}

export default App;
