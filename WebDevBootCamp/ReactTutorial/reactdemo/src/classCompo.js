import React, { Component } from 'react'

class ClassCompo extends Component {

  constructor(){
    super();
    this.state={
      name:"Karttekay"
    }
  }
  
  render() {
    
    return (
      <div>classComponent

        <p>{this.state.name}</p>
        <p>{this.props.name}</p>
        <button onClick={()=>{this.setState({name:"CHanged"})}}>Change state</button>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default ClassCompo
