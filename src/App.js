import React from 'react'
import{
  BrowserRouter as Route,Redirect,Switch } from 'react-router-dom';
  import Navbar from './Navbar';
  import Table from './Table';
  // import Dashbord from './Dashbord';
  import Home from './pages/Home';
  import Settings from './pages/Settings';
  import Somathin from './pages/Somathin';


const  App =()=>  {

return(
<>
  <Navbar/>
 <Table/>
 {/* <Dashbord/> */}
  </>
)

}

export default App;
