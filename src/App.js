import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import LandingPages from './LandingPages';

function App() {
  return (
    <Router>
      <Navbar />
      <LandingPages />
    </Router>
  );
}

export default App;
