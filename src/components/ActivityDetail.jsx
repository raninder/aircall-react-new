import React, {useEffect,useState } from "react";
import axios from "axios";
import Archive from "./Archive.jsx";
import { useLocation } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";


export default function ActivityDetail(props) {
	 const [acts,setActs] = useState({});
	 const location = useLocation();
	 
		let id = location.state.id;
		console.log("ididid",id);

	 const url = `https://aircall-job.herokuapp.com/activities/${id}`;
	 useEffect(() => {
			axios.get(url)
    .then(response => {
			console.log("data1", response.data);
					setActs(response.data)
		})
    .catch(error => {
      console.log('Error: ' + error);
      })
		}, []);
		console.log("acts",acts.created_at);
		let data= new Date(acts.created_at);
		const time = data.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
		console.log("time",data);
		const date = data.toDateString().slice(4);
		console.log("date",date);	 
		let arch = acts.is_archived;
return(
	<div>
		<div className="text">
		 {acts.direction === 'inbound' ? 
		 <span><b><center>{acts.from} </center></b></span>
		 : 
		 <span><b><center>{acts.to}</center></b></span> 
		 }

		 <div className= "card">
			 <b>
			 <div><center>{date}</center></div>
			<span>{time}  {'   '}
			{(acts.direction === 'inbound') ? "Incoming Call" : "Outgoing Call" } </span>
			</b>
			{acts.call_type === 'missed' && <span>{acts.call_type} </span> }
			<span>{acts.duration} seconds</span>
			<span>via {acts.via}</span>
			</div>
				 
			</div>
			<Router>
			{	arch === false ? 
			
				<Link
  				to={{
   				 	pathname: "/Archive",
    				state: { arch,id }
  				}}
					>Archive
				</Link>
					:
				<Link
  				to={{
   				 	pathname: "/Archive",
    				state: { arch,id }
  				}}

					>Unarchive
				</Link>
			}
		<Switch>
		<Route path="/Archive"><Archive/></Route>
		</Switch>
		</Router> 
		
	</div>

); 

}