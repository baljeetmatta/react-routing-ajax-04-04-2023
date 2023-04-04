import React, { ChangeEvent, useState } from 'react';
type TodoType={
    title:string;
    status:string;
}
const Todo=()=>{

    const [tasks,setTask]=useState<TodoType[]>([]);

const [data,setData]=useState("");

const changeHandler=(event:ChangeEvent)=>{

    setData((event.target as HTMLInputElement).value);
}
const clickHandler=()=>{

    let mytask=[...tasks];
    let newTask:TodoType={
        title:data,
        status:'Pending'
    }
    mytask.push(newTask);
    setTask(mytask);
    console.log(tasks);
    setData("");


}
    return (

        <>
        <input value={data} onChange={changeHandler} type="text"/>
        <button onClick={clickHandler}>Add</button>
        <ul>
        {
            tasks.map((task)=>(
                <li>{task.title}</li>
            ))
        }
        </ul>
        </>
    )

}
export default Todo;