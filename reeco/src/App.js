import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Orders from './Components/Orders/Orders';
import 'bootstrap/dist/css/bootstrap.min.css';


// After completion of my assignment i have time so i integrated with backend.
// I create database on postgresql on my local system 
// I thought that it whould be greate if i done this assignment end to end (Frontend and Backend)

function App() {
  return (
    <div>
      <Navbar/>
      <Orders/>
    </div>
  );
}

export default App;
