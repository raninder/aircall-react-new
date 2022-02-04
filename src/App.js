import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import ActivityFeed from './components/ActivityFeed.jsx';
import ArchiveDetail from './components/ArchiveDetail.jsx';
import ActivityDetail from './components/ActivityDetail.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";

import Header from './Header.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
      <Router>
     
      <Link to="/ActivityFeed">All calls</Link>&emsp;&emsp;
      <Link to="/ArchiveDetail" >Archives</Link>
      {/* <ActivityFeed/> */}
      <Switch>
        <Route path="/ActivityFeed">< ActivityFeed/></Route>
        <Route path="/ArchiveDetail">< ArchiveDetail/></Route>
        <Route path="/ActivityDetail"><ActivityDetail/></Route>
        </Switch>
        </Router>
      </div>
    </div>

  );
};

//  ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
