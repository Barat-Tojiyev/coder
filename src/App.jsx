import React,{Component} from "react";
class App extends Component{
   constructor (props){
      super(props)
      this.state={
         count:0,
         name:'There is a name here'
      }}
   render(){  
    const onPlus=()=>{
      if(this.state.count<10){
         this.setState({count:this.state.count+1})
      }}  
    const onMinus=()=>{
      if(this.state.count>0){
         this.setState({count:this.state.count-1})
      }}
    const onChange=(e)=>{
   const{value}=e.target
   this.setState({name:value})
    }
    return( 
 <>
<div className="box">
      <h1>{this.state.count}</h1>
    <button onClick={onMinus}>-</button>
    <button onClick={onPlus}>+</button>
</div>
    <input type="password" onChange={onChange}/>
    <h1>Name:<span>{this.state.name}</span></h1>
 </>    
   )}}
export default App