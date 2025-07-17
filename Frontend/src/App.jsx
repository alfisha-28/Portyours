import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage'
import CreatePortfolio from './Pages/CreatePortfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/CreatePortFolio" element={<CreatePortfolio/>}/>
      </Routes>
    </Router>
  );
}

export default App
 