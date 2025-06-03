import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/:category' element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
