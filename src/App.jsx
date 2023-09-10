import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Layout from "./Layout";
import NoPage from "./NoPage"

function App() {
  return (
      <div className="App">
          
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="contact" element={<Contact />} />
                <Route path="detail" element={<Detail/>} />
                <Route path="favs" element={<Favs/>} />
                <Route path="*" element={<NoPage/>}/>
              </Route>
            </Routes>
          </BrowserRouter>           
      </div>
  );
}

export default App;
