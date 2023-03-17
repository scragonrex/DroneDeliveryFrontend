import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componenets/Navbar';
import LoginAsUser from './pages/LoginAsUser';
import User from './pages/User'
import Register from './pages/Register'
import Admin from './pages/Admin'
import LoginAsAdmin from './pages/LoginAsAdmin';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/loginAsUser' element={<LoginAsUser/>}/>
      <Route path='/loginAsAdmin' element={<LoginAsAdmin/>}/>
      <Route path='/user' element={<User/> }/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
