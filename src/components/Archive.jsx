import React, { useState,useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';


export default function Archive(props) {
	const location = useLocation();
	const id = location.state.id;
	const is_archived = location.state.arch;
	console.log("iiid",id);
	console.log("is_archiv", is_archived);
	const url =`https://aircall-job.herokuapp.com/activities/${id}`;
	if(is_archived){
    	axios.post(url, {
			is_archived: false
			})
			.then(res => {
					alert("call unarchived");
					console.log("hi",res);
			})
	}
	else
	{
			axios.post(url, {
				is_archived: true
			})
			.then(res => {
				alert("call archived");
				console.log("hi",res);
			})
	}

	return(
		<div>
			
		</div>
	)
}