import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes";
import { GlobalStyles } from "./styles";
import { AuthProvider } from "./hooks/useAuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AllRoutes />
        <GlobalStyles />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

export default App;
