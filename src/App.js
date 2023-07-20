import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from 'react';
import Login from "./components/login/login"
import Logingd from "./components/logingd/logingd"
import Registerst from "./components/registerst/registerst"
import Homest from "./components/homest/homest"
import Homegd from "./components/homegd/homegd"
import Students from "./components/students/students"
import Approval from './components/viewapproval/approval'
import Attendance from "./components/viewatt/viewatt"
import Scholarship from "./components/viewschl/viewschl"
import { createContext } from "react";
export const AppContext = createContext();

function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken"));
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
// put this after login is successfull get data from backend and assign 
  const [useryear, setUseryear] = useState(localStorage.getItem("useryear"));
  const [userprog, setUserprog] = useState(localStorage.getItem("userprog"));
  return (
    <div className="App">
      <AppContext.Provider value={{ userToken, setUserToken, userType, setUserType,useryear, setUseryear,userprog, setUserprog }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login/>}/>
            <Route path ="/Logingd" element = {<Logingd/>}/>
            <Route path ="/Registerst" element = {<Registerst/>}/>
            <Route path ="/Homest" element = {<Homest/>}/>
            <Route path ="/Homegd" element = {<Homegd/>}/>
            <Route path ="/Approval" element = {<Approval/>}/>
            <Route path ="/Attendance" element = {<Attendance/>}/>
            <Route path ="/Scholarship" element = {<Scholarship/>}/>
            <Route path ="/Students" element = {<Students/>}/>
        </Routes>
      </BrowserRouter> 
      </AppContext.Provider>
    </div>
  );
}

export default App;
