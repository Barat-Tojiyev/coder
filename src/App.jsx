import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      son:0,
      name:'This is name'
    }
  }
  render() {


    
    const onPlus=()=> {
     this.setState({son:this.state.son+1})
    } 
    const onMinus=()=> {
   this.setState({son:this.state.son-1})
    } 

    const onChange =(e)=>{
      const {value}=e.target
      this.setState({name:value})

    }
   


    return (
      <div className='app'>     
      
      <h1>{this.state.son}</h1>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
      <input type="text" placeholder='this is name' onChange={onChange}/>
      <h2>Name: {this.state.name}</h2>        
      </div>
    )
  }
  }
