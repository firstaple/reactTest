import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Memo from "./page/Memo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/memo" element={<Memo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
