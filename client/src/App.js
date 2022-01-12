import React from 'react';
import { Container, AppBar, Typography  } from "@material-ui/core";


import useStyles from './styles';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './components/Form/Form';
import Update from './components/Form/Update';
import Search from './components/Form/searchEmployee';
import View from './components/showEmployee/View';

import Home from './components/Home';

import {  Routes } from 'react-router-dom';
function App() {
  const classes = useStyles();
  return (

    
   <div>
     <Container maxwidth = "lg">
       <AppBar className = {classes.appBar} position="flex" color= "inherit>" height= "100%">
         <Typography className= {classes.heading} variant = "h2" align = "center> ">
         Employee Management Web Portal  
         </Typography>
         <Router>
           <NavBar />
           <br/>
           <Routes>
           <Route path = "/" element={<Home />} ></Route>
           <Route path = "/employee/" element={<View />}></Route>
           <Route path = "/employee/add" element={<Form />} ></Route>
           <Route path = '/employee/update/:id' element={<Update />}></Route>
           <Route path = "/employee/view/:id" element={<Search />}></Route>
           </Routes>
         </Router>
         
       </AppBar>
     </Container>
   </div>
  );
}

export default App;
