import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import PublicNotices from "../pages/PublicNotices";
import Login from "../pages/Login/Login";
import Account from "../pages/Account";
import AdminDetails from "../pages/AdminDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/perfil" element={<Account />} />
        <Route path="/edital/id" element={<PublicNotices />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<AdminDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
