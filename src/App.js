import React from 'react'
import{
  BrowserRouter as Route,Redirect,Switch } from 'react-router-dom';
  import Navbar from './Navbar';
  import Table from './Table';

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
