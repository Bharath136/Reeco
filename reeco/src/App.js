import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Orders from './Components/Orders/Orders';
import 'bootstrap/dist/css/bootstrap.min.css';


// After completion of my assignment i have time so i integrated with backend.
// I create database on postgresql on my local system 
// I thought that it whould be greate if i done this assignment end to end (Frontend and Backend)


// Note.
// to start the application you must use commands 
// 1) npm install --force
// 2) npm start     this is for frontend
// 3) npm run dev   this is for backend

function App() {
  return (
    <div>
      <Navbar/>
      <Orders/>
    </div>
  );
}

export default App;
