import './Footer.css';
import git from './git.png';
import insta from './insta.png'
import link from './link.png'
import whatsapp from './whats.png'

export default function Footer() {
  return (

    <section class="social">  

          
          <div classname="footer" id="social2">                     
            <div id="link">
                <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-gomes-244b7592/" target="_blank"><img src={link}/></a>
            </div>              
            <div id="whatsapp">
                <a href="https://api.whatsapp.com/send?phone=5511992217513" target="_blank"><img src={whatsapp}/></a>
            </div>
            <div id="insta">
                <a href="https://www.instagram.com/geladox/" target="_blank"><img src={insta}/></a>
            </div>
            <div id="github">
                <a href="https://github.com/joaogomes95" target="_blank"><img src={git}/></a>
            </div>                          
          </div>  
                   
      </section> 
      
   
  )
}