import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import indexRoutes from '../../constants/indexRoutes'

const App = () =>{
	return (
		<div className="App">
			<Router>
			  <Switch>
		    		{indexRoutes.map((el, key)=>(
			    		<Route key={key} path={el.path} component={el.component} exact />
		    		))}
 		  	  </Switch>
			</Router>
		</div>
	)
}

export default App
