import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";
import Board from "../pages/Board";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Question from "../pages/Questions";
import Process from "../pages/Process";
import Verify from "../pages/Verify";
import Index from "../pages/Dashboard/Index";
import Companies from "../pages/Dashboard/Companies";
import TransferKYC from "../pages/Dashboard/TransferKYC";
import Settings from "../pages/Dashboard/Settings";
import SearchResult from "../pages/Dashboard/SearchResult";
import { SidebarContextProvider } from "../contexts/SidebarContext";
import Notifications from "../pages/Dashboard/Notifications";
import AdminRoute from "../components/guards/Admin";
import MemberRoute from "../components/guards/Member";

function AllRoutes() {
  return (
    <BrowserRouter>
      <SidebarContextProvider>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/questions" element={<Question />} />
          <Route
            path="/process"
            element={
              <MemberRoute>
                <Process />
              </MemberRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Index />
              </AdminRoute>
            }
          />
          <Route path="/dashboard/companies" element={<Companies />} />
          <Route
            path="/dashboard/companies/search"
            element={<SearchResult />}
          />
          <Route path="/dashboard/transfer-kyc" element={<TransferKYC />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </SidebarContextProvider>
    </BrowserRouter>
  );
}

export default AllRoutes;
