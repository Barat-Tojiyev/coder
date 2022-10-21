import React, { Component } from 'react';
import { data } from './Counter/data';

class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            object:data,
            select:'id',
            addUser:''
        }
    }
    render() {

        const onSearch =(e)=>{
       const{value}=e.target
       const res =data.filter((item)=>item[this.state.select].toString().toLowerCase().includes(value.toLowerCase()))
       this.setState({object:res})
        }
        const onSelect=(e)=>{
         this.setState({select:e.target.value})
        }
        

        const onDelete=(id)=>{
const res =this.state.object.filter((value)=> value.id !== id)
this.setState({object:res})
        }

        const onInputAdd = (e)=>{
const {value}=e.target
this.setState({addUser:value})

}

const onAdd=()=>{
    const newUser={
        id:this.state.object.length+1,
        name:this.state.addUser
    }
    
    this.setState({object:[...this.state.object,newUser],
        addUser:''})
            }  
       
        return (
            <div className='Card'>
                <div className='Navbar'>
                <h1>Paxtachi IT Center</h1>
                <p>{this.state.object.length} posts, 0 like</p>
                </div>
                <div className='Search'>
                    <input type="text" onChange={onSearch} placeholder='Search...' />
                    <select onClick={onSelect}>
                        <option>id</option>
                        <option>name</option>
                    </select>

                </div>

                <div className='table'>
                    <table>
                        <tbody>
                            {
                                this.state.object.length ?
                            
(
                      
                        
                            this.state.object.map(({id,name})=>{
                                return(
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td><button>edit</button></td>
                                        <td><button onClick={()=>onDelete(id)}>delete</button></td>
                                    </tr>
                                )
                            })
                        ) : <h3>NO DATA...</h3>
                    }
                          </tbody>
                    </table>
                </div>
                <div className='Search'>
                    <input onChange={onInputAdd} type="text" placeholder='on ADD...' />
                    <button onClick={onAdd} className='add'>ADD</button>
                </div>
            </div>
        );
    }
}

export default Card;
