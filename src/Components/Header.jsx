import react, { useState } from "react";
import '../Styles/Header.css';
import '../index.css'
import { Link } from "react-router-dom";



export const Header=()=>{

    return(

        <div className="nav">

            <div className="logo">
            </div>
            
            <div  className="links">  
                    <Link className="url" to={'/'}>Home</Link>
                    <Link className="url" to={'/flats'}>Flats</Link>
                    <Link className="url" to={'/about'}>About</Link>
                    <Link className="url" to={'/contact'}>Contact</Link>

                    <button>X</button>
            </div>

            <button>X</button>

        </div>
    );


};