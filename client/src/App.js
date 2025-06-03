import './static/css/style.css';
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu/Menu";
import Login from './components/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/:category' element={<Menu />} />
        <Route path='/admin/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
