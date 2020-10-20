import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"

import SendBid from "./screens/sendBid"
import ViewBids from "./screens/viewBids"


const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={SendBid} />
				<Route path="/view-bids" component={ViewBids} />
				<Redirect
					to={{
						pathname: '/',
					}}
				/>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;