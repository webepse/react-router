import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <Link to="cars">Voiture</Link><br />
        <Link to="cars/alfa">Voiture Alfa</Link>
      </nav>
    </>
  );
}

export default App;
