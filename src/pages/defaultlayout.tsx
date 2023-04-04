import React from 'react';
import { Outlet,Link } from 'react-router-dom';
const DefaultLayout=()=>{


    return (

        <>
<Link to="/home">Home </Link> | <Link to="/aboutus">Aboutus </Link> | <Link to="/contactus">Contact us</Link>
| <Link to="/users">Users</Link>
        {/* <a href="/home"> Home </a> |  <a href="/aboutus"> About us </a> |  <a href="/contactus"> Contact us </a> */}

    <Outlet/>
    </>


    )
}
export default DefaultLayout;