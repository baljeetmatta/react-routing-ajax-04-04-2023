import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './Data';
import GreetClass from './GreetClass';
import Counter from './Functional';
import Login from './Login';
import UI from './UI';
import Todo from './Todo';
import {Routes,Route,Link} from 'react-router-dom'
import Layout from './Layout';
import DefaultLayout from './pages/defaultlayout';
import Aboutus from './pages/aboutus';
import Contactus from './pages/contactus';
import Home from './pages/home';
import Users from './pages/users';
import UserDetails from './pages/userdetails';
/*import MButton from './MButton';
function test()
{
  console.log("User clicked");

}*/
const personList=[{
  name:"test",
  age:20
},{
  name:"test1",
  age:21
},{
  name:"test2",
  age:22
}]
function App() {
  return (
    <>
     
  

    {/* <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index path="Todo" element={<Todo/>}></Route>
      <Route path="Data" element={<Data list={personList}/>}></Route>
      <Route path="Counter/:id" element={ <Counter/>}></Route>
      <Route path="Greet" element={<GreetClass name="Code"/>}></Route>
      <Route path="Login" element={<Login/>}></Route>
      <Route path="UI" element={<UI/>}></Route>
      <Route path="*" element={<UI/>}></Route>



      </Route>
      
    </Routes> */}

    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
          <Route path="aboutus" element={<Aboutus/>}></Route>
          <Route path="contactus" element={<Contactus/>}></Route>
          <Route path="home" element={<Home/>}></Route>
          <Route path="users" element={<Users/>}></Route>
          <Route path="userdetails/:id" element={<UserDetails/>}></Route>

      </Route>
    </Routes>


    
  

  

 

 


  </>
  );
}

export default App;
