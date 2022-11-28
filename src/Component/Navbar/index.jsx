import React from 'react'
import {   Logo, NavbarBox,Button,Count,Bascet } from './style'
import Logotip from './icon/logo.svg'
import basketIcon from './icon/basketIcon.svg'

export const Navbar = () => {
  return (  
 <NavbarBox>
  <Logo><img src={Logotip} alt="#" /> Greenshop</Logo>
  <NavbarBox.UL>
    <NavbarBox.LI>Home</NavbarBox.LI>
    <NavbarBox.LI>Shop</NavbarBox.LI>
  </NavbarBox.UL>
  <Bascet>
    <Bascet>
       <img src={basketIcon} alt="" />
       <Count>0</Count>
    </Bascet>
   
    <Button>login</Button>
  </Bascet>
 </NavbarBox>
   
  )
}
