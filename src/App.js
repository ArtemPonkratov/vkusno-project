import { Route, Routes } from "react-router-dom";
import Header from "./element/header";
import Home from "./pager/Home";
import Delivery from "./pager/Delivery";
import Contacts from "./pager/Contants";
import Cake from "./pager/goods/Cake";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cake" element={<Cake />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
