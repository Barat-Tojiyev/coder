import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../context'
import { Container, Description, Table } from './style'
import {AiFillPlusCircle,AiFillMinusCircle,AiFillDelete} from 'react-icons/ai'
import { useState } from 'react'

export const Korzinka = () => {
    const [state,dispatch]=useContext(ProductContext)
    const [total,setTotal]=useState(0)
  return (
    <Container>
        {state.basket.length ? (
        <Table>
         <tbody>
          {  
            state.basket.map((value)=>{
           
              return(
                
                <tr key={value.id}>
                   
                  <Table.TD><img src={value.img} height="50"  alt="#" /></Table.TD>
                  <Table.TD>
                    <Description fw='700' color='#333'>
                    {value.name}
                    </Description>
                    </Table.TD>
                  <Table.TD>
                    <Description fw='700'  color='#666'>
                    ${value.sale ?  (<span>{(value.price-((value.price/100)*value.sale)).toFixed()}</span> ) :value.price}
                    </Description>
                   </Table.TD>
                  <Table.TD>
                 
                    <Description onClick={()=>dispatch({type:'minus',payload:{id:value.id}})} 
                    d='inline' fs='20px' cursor='pointer' color='#46A358' mr='5px'>
                     <AiFillMinusCircle/>
                    </Description>
                    
                  {value.quantity}
                   <Description  onClick={()=>dispatch({type:'plus',payload:{id:value.id}})} 
                   d='inline' fs='20px'cursor='pointer' color='#46A358' ml='5px'>
                      <AiFillPlusCircle/>
                   </Description>
                   
                   </Table.TD>
                   <Table.TD>  ${value.sale ?  (<span>{((value.price-((value.price/100)*value.sale))*value.quantity).toFixed()}</span> ) :value.price*value.quantity}</Table.TD>
                   <Table.TD>
                    <Description onClick={()=>dispatch({type:'delete',payload:{id:value.id}})} color='#f00' cursor='pointer' fs='20px'>
                        <AiFillDelete/>
                    </Description>


                    </Table.TD>
                </tr>
              )
            })
          }
         </tbody>
        </Table>
      
        
        ) : <Container.H2>Hurmatli mijoz avval mahsulot xarid qiling!</Container.H2>}
  <Description text='right' color='green' fs='25px' fw='600'>All total: ${total}</Description>
    </Container>
  )
}
