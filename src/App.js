import React, { Component, Fragment } from "react";
import "./App.scss";
import { Route,  Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from "./pages/home/Home";
import Movie from "./components/Movie";


class App extends Component {
	render() {
		return (
			<Fragment>
			
			 <Navbar />
			
			 <Switch>

			 <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={Movie} />
			

          </Switch>
		<div className = "footer-comp">
		  <Footer />
		  </div>
		  
			</Fragment>
		);
	}
}

export default App;
