import "./App.css";
import { ContextProvider } from "./components/Context";
import Header from "./components/Header";

function App() {
  return (
    <ContextProvider>
      <Header />
    </ContextProvider>
  );
}

export default App;
