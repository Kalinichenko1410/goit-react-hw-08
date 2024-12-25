import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Contacts from "../pages/Contacts/Contacts";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refresh } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { store } from "../redux/store";


export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch])

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
         <Route path="contacts" element={<Contacts />} />
         <Route path="login" element={<Login />} />
         <Route path="register" element={<Register />} />
      </Route>
         <Route path="*" element={<NotFound />} />
    </Routes>
  );
}