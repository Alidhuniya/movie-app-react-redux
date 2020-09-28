import React, { Component, Fragment } from "react";
import "./App.scss";
import { Route,  Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './pages/home/Home';
import { Movie } from './components/Movie';


class App extends Component {
	render() {
		return (
			<Fragment>
			
			 <Navbar />
			
			 <Switch>
			
			 <Route exact path="/">
			 <Home />
			 </Route>

            <Route exact path="/movie/:id">
			<Movie />
			</Route>

          </Switch>

		  <Footer />
		  
			</Fragment>
		);
	}
}

export default App;
