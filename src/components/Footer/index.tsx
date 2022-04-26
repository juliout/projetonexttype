import { DivFooter } from "./footerStyled"
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'


const Footer: React.FC = () => {
    return (
        <DivFooter>
            <div className="divMidiasFooter">
                <a href="">
                    <BsFacebook size='30px'/>
                </a>
                <a href="">
                    <BsLinkedin size='30px'/>
                </a>
                <a href="">
                    <BsGithub size='30px'/>
                </a>
            </div>

            <div className="divNameFooter"> 
                <h1>
                    criado por JulioCesar
                </h1>
            </div>
        
        </DivFooter>
    )
  }
  
  export default Footer;