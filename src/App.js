import React, { Component, Fragment } from "react";
import "./App.scss";
import { Route,  Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';



class App extends Component {
	render() {
		return (
			<Fragment>
			
			 {/* <Navbar /> */}
			
			 <Switch>
			
            {/* <Route exact path='/' component={AllProducts}/>
           
            <Route path='/:product_id' component={SingleProduct} /> */}
          </Switch>

		  <Footer />
		  
			</Fragment>
		);
	}
}

export default App;
