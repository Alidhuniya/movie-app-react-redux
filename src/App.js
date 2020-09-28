import React, { Component, Fragment } from "react";
import "./App.scss";
import { Route,  Switch } from 'react-router-dom';
import Navbar from './components/Navbar';



class App extends Component {
	render() {
		return (
			<Fragment>
			 <Switch>
			 <div className = "navbar">
			 <Navbar />
			 </div>
            {/* <Route exact path='/' component={AllProducts}/>
           
            <Route path='/:product_id' component={SingleProduct} /> */}
          </Switch>
		  
			</Fragment>
		);
	}
}

export default App;
