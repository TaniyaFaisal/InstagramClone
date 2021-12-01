import logo from './logo.png';
import './App.css';
import LoginPage from './components/LoginPage/loginPage';
import HomePage from './components/HomePage/homePage';

function App() {
  return (
    <div className="App">
      {
        (localStorage.getItem("users") === undefined || localStorage.getItem("users") == null) ?
        <LoginPage/> : <HomePage/>
      }
    </div>
  );
}

export default App;
