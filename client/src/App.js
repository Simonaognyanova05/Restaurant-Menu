import './static/css/style.css';
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu/Menu";
import Login from './components/Login';
import Create from './components/Create';
import Logout from './components/Logout';
import Delete from './components/Delete';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/:category' element={<Menu />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/create' element={<Create />} />
        <Route path='/admin/logout' element={<Logout />} />
        <Route path='/delete/:dishId' element={<Delete />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
