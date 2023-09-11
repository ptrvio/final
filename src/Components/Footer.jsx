import React from 'react'

const Footer = () => {
  return (
    <footer>       
      <p>Powered by</p>
      <img src="images/DH.png" alt='DH-logo' />
      <div>
          <ul className="caja2">
             <li>
                <a href="https://www.facebook.com/">
                <img src="/images/ico-facebook.png" alt='facebook' /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                <img src="/images/ico-instagram.png" alt='instagram' /></a>
              </li>
              <li>
                <a href="https://tiktok.com">
                <img src="/images/ico-tiktok.png" alt='tiktok' /></a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/?lang=es_LA">
                <img src="/images/ico-whatsapp.png" alt='whastapp' /></a>
              </li> 
          </ul>
      </div>
        
    </footer>
  )
}

export default Footer
