import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Discover from './Pages/Discover';
import ReadingLIst from './Pages/ReadingLIst';
import FinishedBooks from './Pages/FinishedBooks';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/reading" element={<ReadingLIst />} />
          <Route path="/finish" element={<FinishedBooks />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
