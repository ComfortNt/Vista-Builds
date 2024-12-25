import react, { useState } from "react";
import '../Styles/Header.css';
import { Link } from "react-router-dom";
import { links } from "../Lists/Links";


export const Header=()=>{


    return(

        <div className="nav">

            <div className="logo">
            </div>
            
            <div  className="links">  
                {links.map((url,index)=>(

                    <Link className="url" to={`${url.to}`} key={index} 
                    onClick={()=>toggleNavbar}>
                        {url.name}
                    </Link>))}
            </div>

        </div>
    );


};