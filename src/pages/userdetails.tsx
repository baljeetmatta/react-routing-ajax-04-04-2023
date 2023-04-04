import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useParams} from 'react-router-dom'
type userType={
    id:number;
    first_name:string;
    last_name:string;
    email:string;
}
type paramstype={
    id:number;
}
const UserDetails=()=>{

   const {id}= useParams<paramstype|any>();

    const [list,setList]=useState<userType>();



useEffect(()=>{

    console.log("Called");
    let url:string=`https:/reqres.in/api/users/${id}`;
    fetch(url)
    .then(response=>response.json())
    .then(res=>setList(res.data));


},[]);


    return (

        <>

        <table className="table table-bordered">
            <thead>

            </thead>
            
                {
                    <tbody>
                        <tr>
                            <td>First Name</td>
                             <td>{list?.first_name}</td>

                        </tr>
                        <tr>
                        <td>Last Name</td>
                            <td>{list?.last_name}</td>

                    </tr>

                    <tr>
                        <td>Email</td>
                            <td>{list?.email}</td>

                    </tr>

                    </tbody> 
                
                }

           
        </table>
        
        </>
    )
}
export default UserDetails;