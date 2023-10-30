import React from 'react'



const divStyle = {
    marginLeft: '10px',
   
  };
class StateChange extends React.Component{
 constructor(){
        super();
        this.state={
            count:0
        }
    }
   
     Increment=() =>{
        this.setState({count:this.state.count+1})
    }
    Decrement=() =>{
        this.setState({count:this.state.count-1})
    }

    render() {
        return (
          <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increment}>Increment </button>
        <button  style={divStyle}  onClick={this.Decrement}>Decrement</button>
          </div>
        );
      }

}


export default StateChange