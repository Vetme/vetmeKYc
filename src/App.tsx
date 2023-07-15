import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes";
import { GlobalStyles } from "./styles";
import { AuthProvider } from "./hooks/useAuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <GoogleOAuthProvider clientId="965918499205-d1qbcmlaebs8r062vli1t6j2sshsu6ls.apps.googleusercontent.com">
          <AllRoutes />
          <GlobalStyles />
          <ToastContainer />
        </GoogleOAuthProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
