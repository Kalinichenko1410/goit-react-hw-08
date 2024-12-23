import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";


export default function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
         <Route path="*" element={<NotFound />} />
    </Routes>
  );
}