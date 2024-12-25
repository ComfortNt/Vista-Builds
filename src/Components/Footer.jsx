import { FaLinkedin, FaGithub } from "react-icons/fa6"
import '../Styles/Footer.css'




export const Footer=()=>{


    return(
        <div className="footer">

            <div className="footer-logo">

            <a href="https://github.com/ComfortNt/Vista-Builds" target="blank" > <FaGithub/> </a>  
            <a href="https://www.linkedin.com/in/comfort-ntiwane-516b73247/" target="blank" > <FaLinkedin/> </a>    
                
            </div>

        </div>
    )

}