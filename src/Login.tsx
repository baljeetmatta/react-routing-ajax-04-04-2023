import React, { useState } from 'react'
type LoginType={
    name:string,
    email:string
}
const  Login=()=>
{

    const [login,setLogin]=useState(false);
const [loginDetails,setLoginDetails]=useState<LoginType|null>(null);

   const loginHandle=():void=>
    {
        setLogin(true);
        setLoginDetails({name:"Code",email:"a@gmail.com"});



    }
    const logoutHandle=():void=>{

        setLogin(false);
        setLoginDetails(null);
    }

    return (
        <>
        <button onClick={loginHandle}>Log in</button>
        <button onClick={logoutHandle}>Logout</button>
        <p> {(login?'User Logged':'Logged out')}</p>
        <p>{loginDetails?.email} -{loginDetails?.name}</p>
        </>
    )
}
export default Login;