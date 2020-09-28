import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';


const footer = {
    backgroundColor: "#24272b",
    padding: "0.7rem 0rem 0.7rem 0rem"
}

const footerElement = {
    textAlign: "center",
    color: "#fff"
}

const  Footer = () => {
  return (
    <Fragment>
    
   <footer style = {footer}>
       <h3 style = {footerElement}>Developed by <Link style = {{color: "#7f7fee"}} to = "https://twitter.com/DhuniyaAli">Ali Dhuniya</Link> with React and Redux</h3>
   </footer>
      </Fragment>
  );
}

export default Footer;
