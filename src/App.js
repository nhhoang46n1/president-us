import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import President from "./pages/President";
import StateDetails from "./pages/StateDetails";
import States from "./pages/States";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/president" />} />
        <Route path="/president" element={<President />} />
        <Route path="/states" element={<States />} />
        <Route path="/state-details" element={<StateDetails />} />
      </Routes>
    </div>
  );
}

export default App;
