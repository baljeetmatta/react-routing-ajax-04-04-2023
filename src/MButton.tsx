import React from 'react';
type ButtonProps={
    name:string;
    color?:string;
    handleClick?:()=>void;

}
function MButton(props:ButtonProps)
{
    //console.log(data);
    return (
        <button onClick={props.handleClick}>{props.name}</button>
    );
}
/*function handleClick()
{
    console.log("Clicked");

}*/

export default MButton;
