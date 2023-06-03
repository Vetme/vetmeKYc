import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <GlobalStyles />
    </div>
  );
}

export default App;
