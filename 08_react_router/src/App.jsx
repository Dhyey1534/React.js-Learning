import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Home from "./home/Home";
import Dashboard from "./Components/dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
}
