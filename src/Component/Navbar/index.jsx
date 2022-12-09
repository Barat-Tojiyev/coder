import React from 'react'
import {   Logo, NavbarBox,Button,Count,Bascet } from './style'
import Logotip from './icon/logo.svg'
import basketIcon from './icon/basketIcon.svg'
import { useContext } from 'react'
import { ProductContext } from '../../context'

export const Navbar = () => {
  const [state,dispatch]=useContext(ProductContext)
  return (  
 <NavbarBox>
  <Logo><img src={Logotip} alt="#" /> Greenshop</Logo>
  <NavbarBox.UL>
    <NavbarBox.LI>Home</NavbarBox.LI>
    <NavbarBox.LI>Shop</NavbarBox.LI>
  </NavbarBox.UL>
  <Bascet>
    <Bascet onClick={()=>dispatch({type:'basket'})}>
       <img src={basketIcon} alt="" />
       <Count>{state.basket.length}</Count>
    </Bascet>
   
    <Button>login</Button>
  </Bascet>
 </NavbarBox>
   
  )
}
