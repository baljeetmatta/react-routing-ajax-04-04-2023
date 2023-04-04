import React, { ChangeEvent, useState } from 'react';
const UI = () => {

    const [textValue,setValue]=useState("");
  let textData: string;
    const changeHandler = (event: ChangeEvent) => {
        //textData = (event.target as HTMLInputElement).value;
        //console.log(textData);
        setValue( (event.target as HTMLInputElement).value);

    }
const clickHandler=()=>{
    //alert(textData);
}
const copyTextHandler=(event:ChangeEvent)=>{
    textData=(event.target as HTMLInputElement).value;

}
const copyHandler=()=>{
    setValue(textData);
    
}
    return (
        <>
            <input type="text" value={textValue} onChange={changeHandler} />
            <button onClick={clickHandler}>Display</button>

            <input type="text" onChange={copyTextHandler}/>
            <button onClick={copyHandler}>Copy</button>
        </>
    )

}
export default UI;