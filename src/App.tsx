import { BrowserRouter, Route } from "react-router";

import "./App.css";
import { Routes } from "react-router";
import { Home } from "./pages/Home.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
