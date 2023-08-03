import { Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
