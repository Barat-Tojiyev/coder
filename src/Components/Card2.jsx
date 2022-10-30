import React, { Component } from 'react'
import { Button, Description,Box2, FormCard, FormInput } from '../Style/style'

export default class Card2 extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            lastname:''
        }
    }
  render() {

const onChange=(e)=>{
    const{value,name}=e.target
    this.setState({[name]:value})
}
    return (
      
        <Box2>
            <div>
            <Button
        bg='#5D54A3'
        color='#fff'
        w='450px'
        h='50px'
        round='5px'>
            <b>Lorem ipsum, dolor sit </b>
            amet consectetur adipisicing elit.
        </Button> 
        <FormCard>
            <FormInput type='text' name='name' onChange={onChange} placeholder='Name'/>
            <Description w='90%'
            m='10px auto'
            fs='20px'>Name:{this.state.name}</Description>
            <FormInput type='text'name='email' onChange={onChange} placeholder='Email'/>
            <Description w='90%'
            m='10px auto'
            fs='20px'>Email:{this.state.email}</Description>
            <FormInput type='text'name='lastname' onChange={onChange} placeholder='lastname'/>
            <Description w='90%'
            m='10px auto'
            fs='20px'>lastname:{this.state.lastname}</Description>
            <Button
            bg='#37CC8A'
            color='#fff'
            m='10px auto'
            mt='100px'
            w='90%'
            h='50px'
            round='5px'>Lorem ipsum dolor sit.</Button>
        </FormCard>
            </div>
        

            </Box2>
        
     
    )
  }
}
