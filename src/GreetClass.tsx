import React, { Component } from 'react'
type GProps={
    name:string
}
type GState={
    count:number
}
class GreetClass extends Component<GProps,GState>
{
    
    state={count:0};

    test=()=>
    {
       // console.log("Button clicked");
      // console.log(this.state.count);
     // this.state.count=this.state.count+1;
     this.setState((prevState) =>({count:prevState.count+1}));
     this.setState((prevState) =>({count:prevState.count+1}));
     this.setState((prevState) =>({count:prevState.count+1}));

      console.log(this.state.count);

    }
    render()
        {
            return (
            <>
            <p>Hello to {this.props.name} -{this.state.count}</p>
            <button onClick={this.test}>Click me</button>
            </>
            )

        }
}
export default GreetClass;

