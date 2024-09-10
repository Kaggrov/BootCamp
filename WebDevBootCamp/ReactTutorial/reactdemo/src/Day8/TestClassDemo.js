import React, { Component } from 'react'

 class TestClassDemo extends Component {

    constructor(){
        super();
        this.state={
            number: 8
        }
    }

    add(x,y){
        return x+y
    }

    componentDidMount(){
        console.log("Hello");
    }
  render() {
    return (
      <div>testClassDemo
        <input type='text' value="hello" id='name' name='myName'/>
      </div>
    )
  }
}

export default TestClassDemo

