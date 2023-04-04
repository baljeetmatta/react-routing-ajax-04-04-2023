import React from 'react';
type DataPropsType={
    list:DataType[];
}
type DataType={
    name:string,
    age:number;
}
function Data(props:DataPropsType)
{
    return (
        <ul>
            {
                props.list.map((data)=>(
                        <li>{data.name}</li>
                ))
            }
        </ul>
    
    )
}
export default Data;