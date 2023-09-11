import ContextGlobal from './Components/utils/global.context';
import { useContext } from "react";

const Layout = ({children}) => {

const {theme} =useContext(ContextGlobal)
  return (
    <div style={{background:theme.background, color:theme.font}}>
        {children}
    </div>
  )
}

export default Layout