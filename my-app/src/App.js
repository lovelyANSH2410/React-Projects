import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ContextProvider } from "./components/Store/Context";

function App() {
  return (
    <ContextProvider>

      <Header />
      <Body />
      <Footer />
    </ContextProvider>
  );
}

export default App;
