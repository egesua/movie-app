import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/auth" element={<h1>Auth</h1>} />
        <Route path="/rated" element={<h1>Rated Page</h1>} />
      </Routes>
    </Router>
  </div>;
}

export default App;
