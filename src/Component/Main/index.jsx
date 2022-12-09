import React from 'react'
import { Button, Card, Sale, Top, Wrapper } from './style'
import { useContext } from 'react'
import { ProductContext } from '../../context'
import { Korzinka } from '../Korzinka'
import { Description } from '../Korzinka/style'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { Like } from '../Like'
export const Main = () => {
  const[state,dispatch]=useContext(ProductContext)

  return (
    <div>
      {
        state.korzinka ?  <Korzinka/>:
        (
          <Wrapper>
          {
            state.product.map((value)=>{
              return(
        <Card key={value.id}>
          <Top>
          {value.sale ? (<Sale>{value.sale}% sale</Sale>):(<Description bg='green' p='2px 3px' color='#fff' >No sale</Description >)}
           <Description cursor='pointer' color='red' fs='20px'>
            {value.like ?  
            <AiFillHeart onClick={()=>dispatch({type:'like',payload:{id:value.id}})}/> 
            : 
            <AiOutlineHeart onClick={()=>dispatch({type:'like',payload:{id:value.id}})} />  }
           

            
           </Description>
          </Top>
          
            
            <div><Card.Img src={value.img} alt="#" /></div>
            <Card.P>{value.name}</Card.P>
            <Card.H4>${value.sale ?  (<span>{(value.price-((value.price/100)*value.sale)).toFixed()} $<del>{value.price}</del></span> ) :value.price} </Card.H4>
            {
              value.addtocard ? (<Button onClick={()=>dispatch({type:'delete',payload:{id:value.id}})}>Cansel</Button>) :(
               <Button onClick={()=>dispatch({type:'buy',payload:{id:value.id}})}>Buy</Button>
              )

            }
            
          </Card>
              )
            })
          
          }
          </Wrapper> 
        )
      }
     
     <Like/>
          <Description p='70px' fs='30px' fw='700' text='center' color='#46A358'>
            GreenShoop 2022
          </Description>
      </div>
  )
}
