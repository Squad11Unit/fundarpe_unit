import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import PublicNotices from "../Pages/PublicNotices";
import Login from "../Pages/Login";
import Account from "../Pages/Account";
import AdminDetails from "../Pages/AdminDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={< Login />} />
        <Route path="/cadastro" element={< Register />} />
        <Route path="/perfil" element={<Account />} />
        <Route path="/edital/id" element={< PublicNotices />} />
        <Route path="*" element={< NotFound />} />
        <Route path="/admin" element={< AdminDetails />} />
        <Route path="/principal_admin" element={< AdminDetails />} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;