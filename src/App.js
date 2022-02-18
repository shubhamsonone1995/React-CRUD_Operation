
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar';
import NotFoundPage from './Components/Pages/NotFoundPage';
import AddUser from './Components/users/AddUser';
import EditUser from './Components/users/EditUser';
import User from './Components/users/User';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/about" element={<About/>}/> 
    <Route path="/contact" element={ <Contact/>}/>
    <Route path="/users/add" element={<AddUser/>}/>
    <Route path="/users/edit/:id"element={<EditUser/>}/>
    <Route path="/users/:id"element={<User/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
    </Routes> 
    </div>
  );
}

export default App;
