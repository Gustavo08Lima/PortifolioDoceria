import insta from "../assets/insta.svg"
import Casa from "../assets/Casa.png"
import { Link } from 'react-router-dom';
import './Css/header.css'


function Header() {
    return (
       <div className="footer">
        <div className="logo">
           <Link to="/"> 
            <span><img className="casa" src={Casa} alt="" /></span></Link>
        </div>
        
        <nav className="link">
            <Link to="/Produtos">Prudutos</Link>
            
            <Link to="/Sobre">Quem somos</Link>
           <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
    <span className="wpp">WhatsApp</span>
</a>
            <span><img src={insta} alt="" /></span>
        </nav>
        
       </div>
        
    )
}

export default Header
