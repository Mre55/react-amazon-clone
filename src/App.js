import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={ <Checkout /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
