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
            
            <Link to=""><span className="wpp">WhatsApp</span></Link>
            <span><img src={insta} alt="" /></span>
        </nav>
        
       </div>
        
    )
}

export default Header
