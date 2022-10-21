import React, { Component } from 'react'
import { data } from './Counter/data'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            object:data,
            selected:{},
            name:''
        }
    }
  render() {
        
    const onEdit=(value)=>{
        this.setState({selected:value})
    }
   const onSave=()=>{
    this.setState({
        selected:{}
    })
   }
   const onChange=(e)=>{
    const{value,name}=e
    this.setState({[name]:value})
   }
   console.log(this.state.name);
    
    return (
      <div>
<table border={1}>
    <tbody>
        {
            this.state.object.map((value)=>{
                return(
                    <tr key={value.id}>
                        <th>{value.id}</th>
                        <th>{this.state.selected.id ===value.id ? <input type='text'onChange={onChange} name='name' value={value.name}/> :value.name}</th>
                        <th>{this.state.selected.id ===value.id ?  <button onClick={onSave}>save</button>:<button onClick={()=>onEdit(value)}>edit</button> }</th>
                    </tr>
                )
            })
        }
    </tbody>
</table>

      </div>
    )
  }
}
