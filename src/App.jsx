import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContextGlobal,{themes} from './Components/utils/global.context';
import { useState } from 'react';
import Layout from './Layout';

function App() {

  const [theme, setTheme] =useState(themes.light);
  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (

      <div className="App">     
            <ContextGlobal.Provider value={{theme, handleChangeTheme}}>
              <Layout>
              <Navbar />
                  <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="contact" element={<Contact />}></Route>
                        <Route path="/dentist/:id" element={<Detail />}></Route>
                        <Route path="favs" element={<Favs />}></Route>
                        <Route path="/*" element={<Navigate to ='/'/>}></Route>
                  </Routes>          
              <Footer />
              </Layout>
            </ContextGlobal.Provider>  

      </div>
  );
}

export default App;
