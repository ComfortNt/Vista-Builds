import { Link } from 'react-router-dom';
import '../Styles/Header.css'
import Image from '../assets/logo.jpg'
import { useRef } from 'react';
import {FaTimes, FaBars} from 'react-icons/fa'

function Header(){



    const styleRef = useRef();


    const navbar =()=>{
        styleRef.current.classList.toggle("responsive-nav");
    }


    return(
        
        <div className="navbar">

                <div className="navbar_logo">  
                    <img src={Image} alt="Pizza-Image" />
                </div>

                <nav ref={styleRef}>
                    <Link to='/' onClick={ ()=> navbar()}>Home</Link> 
                    <Link to='/Apartments' onClick={ ()=> navbar()}>Store</Link>
                    <Link to='/About'  onClick={ ()=> navbar()}>About</Link>
                    <Link to='/Contact' onClick={ ()=> navbar()}>Contact</Link>
                    <button className='nav-btn' onClick={ ()=> navbar()}><FaTimes/></button>
                </nav>

                <button className='nav-btn nav-close-btn' onClick={ ()=> navbar()}><FaBars/></button>
            
        </div>
    )
};

export default Header;