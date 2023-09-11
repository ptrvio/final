import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (

      <>
              <Navbar></Navbar>
              <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="contact" element={<Contact></Contact>}></Route>
                    <Route path="/dentist/:id" element={<Detail></Detail>}></Route>
                    <Route path="favs" element={<Favs></Favs>}></Route>
                    <Route path="/*" element={<Navigate to ='/'/>}></Route>
              </Routes>
              <Footer></Footer>                
      </>
  );
}

export default App;
