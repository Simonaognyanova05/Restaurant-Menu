import './static/css/style.css';
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu/Menu";
import Login from './components/Login';
import Create from './components/Create';
import Logout from './components/Logout';
import Delete from './components/Delete';
import Edit from './components/Edit';
import Home from './components/Home';
import Register from './components/Register';
import ForgottenPass from './components/ForgottenPass';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category' element={<Menu />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/register' element={<Register />} />
        <Route path='/admin/forgotten' element={<ForgottenPass />} />
        <Route path='/admin/create' element={<Create />} />
        <Route path='/admin/logout' element={<Logout />} />
        <Route path='/delete/:dishId' element={<Delete />} />
        <Route path='/edit/:dishId' element={<Edit />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
