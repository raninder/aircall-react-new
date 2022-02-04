import React from "react";
import { BsTelephoneInboundFill } from "react-icons/bs";

import {
  BrowserRouter as Router, 
  Link
} from "react-router-dom";


export default function Activity(props) {

  const { id,created_at,from, call_type} = props;

		let data= new Date(created_at);
		const time = data.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
		console.log("time",time);
		const date = data.toDateString().slice(4);
		console.log("date",date);

  return (
	
   <div > 
		 <center>{date} </center>
	
		<div className="card">
				<div className="card-body">
						<p className="card-text">
						
							{call_type === "missed" &&
							<BsTelephoneInboundFill/> }
					
					<Router>
							<span>
							<Link 
								to={{ 
									pathname: "/ActivityDetail",
									state: { id }
								}} 
								>	{from} </Link>
							</span>
	
						</Router>
				
						<span className="right">{time} </span>
						 </p>
						 
				</div>		
			</div> 
		</div>
	
  );
}
