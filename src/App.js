import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./root/navbar/Navbar";
import Home from "./root/home/Home";
import FreeEvents from "./events/FreeEvents";
import ProEvents from "./events/ProEvents";
import Upload from "./events/Upload";
import Register from "./user/Register";
import Login from "./user/Login";
import Alert from "./root/util/Alert";
import * as userAction from '../src/redux/user/user.actions'
import * as userUtil from '../src/util/userUtil'
import {useDispatch} from "react-redux";
import PrivateRoute from "./util/PrivateRoute";


 let App = () => {

    let dispatch = useDispatch();
     useEffect(() => {
         if (userUtil.getToken()){
             dispatch(userAction.getUserInfo())
         }
     },[])
     return (
         <React.Fragment>
             <Router>
                 <Navbar/>
                 <Alert/>
                 <Routes>
                     <Route exact path="/" element={<Home/>}/>
                     <Route exact path="/events/free" element={<FreeEvents/>}/>
                     <Route  path="/events/pro"
                            element={ <PrivateRoute>
                                         <ProEvents/>
                                        </PrivateRoute>}/>
                     <Route  path="/events/upload" element={<PrivateRoute>
                                                            <Upload/>
                                                            </PrivateRoute>}/>
                     <Route exact path="/user/register" element={<Register/>}/>
                     <Route exact path="/user/login" element={<Login/>}/>
                 </Routes>


             </Router>




         </ React.Fragment>
     );



 }
export default App;
