import { Route, Routes } from "react-router-dom";
import Header from "./element/header";
import Home from "./pager/Home";
import Footer from "./pager/Footer";
import Delivery from "./pager/Delivery";
import Contacts from "./pager/Contants";
import Cake from "./pager/goods/Cake";
import Cakee from "./pager/goods/Cakee";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/Cake" element={<Cake />} />
          <Route path="/Cakee" element={<Cakee />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
