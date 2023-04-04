import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Layout=()=>{

    return (
        <>
        <Link to="/Todo">Todo App</Link>
        <Link to="/Data">Data</Link>

        <br/>Master Page
        <Outlet/>

        </>
    )
}
export default Layout;