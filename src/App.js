import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CarComparison from './components/CarComparison';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<CarComparison />} />
    </Routes>
  </Router>
  );
}

export default App;
