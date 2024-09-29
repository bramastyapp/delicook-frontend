import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
import SearchDetails from "./pages/SearchDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<SearchDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
