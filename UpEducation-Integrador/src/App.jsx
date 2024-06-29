import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Loggin from './components/pages/Loggin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Loggin" element={<Loggin />} />
      </Routes>
    </Router>
  );
}

export default App;
