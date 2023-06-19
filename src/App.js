import { Route, Routes } from "react-router-dom";
import Header from "./element/header";
import Home from "./pager/Home";
import Delivery from "./pager/Delivery";
import Contacts from "./pager/Contants";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
