import { Route, Routes } from "react-router-dom";

import Home from "./pager/Home";
import Delivery from "./pager/Delivery";
import Contacts from "./pager/Contants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Delivery" element={<Delivery />} />
      <Route path="/Contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
