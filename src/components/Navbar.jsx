import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import "../sass/3-layout/_navbar.scss";

const  Navbar = () => {
  return (
    <Fragment>
    <div className ="navbar">
      <nav className="nav">

        <header className = "header" >
       <div className="header__h1">
            <Link className="" to="/">
              <h1 className = "header__h1-ele">Search Movies </h1>  
            </Link>
             
            </div> 

            <div className = "header__react-logo">
            <i style = {{color : "#00d8ff"}} className="fab fa-react fa-5x" id="react-logo" />
            </div>

            </header>       
         
            <div className="nav__imdb-logo">
              <i style = {{color : "#f5de50"}} className="fab fa-imdb fa-5x" id="imdb-logo" />
            </div>
           
          
      </nav>

      </div>
   
      </Fragment>
  );
}

export default Navbar;
