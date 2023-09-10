import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';

function App() {
  return (
      <div className="App">
          <Navbar/>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='favs' element={<Favs />} />
              <Route path='contacto' element={<Contact />} />
              <Route path='/detail/:id' element={<Detail />} />
            </Routes>
          </BrowserRouter>
          <Footer/>
      </div>
  );
}

export default App;
