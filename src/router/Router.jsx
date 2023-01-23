import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultsList from "../pages/SearchResultsList";
import ToursDetails from "../pages/ToursDetails";
import Tours from "../pages/Tours";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<ToursDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tours/search" element={<SearchResultsList />} />
    </Routes>
  );
};

export default Router;
