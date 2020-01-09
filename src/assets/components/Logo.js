import React, {Component} from 'react';
import logo from '../img/logo.png'
import './Logo.css'
import { Link } from "react-router-dom";


// se linkea a home
class Logo extends Component{
   
    
    render(){
        return <div className="logo-container">
        <button> <Link to="/"><img src={logo} alt="logo"/></Link></button>
        </div>
    }
        
}



export default Logo;