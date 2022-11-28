import styled,{css} from "styled-components";


const center=css`
display: flex;
justify-content:center ;
align-items: center;
`

export const NavbarBox=styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px 20px;
background: #E5E5E5;
`

NavbarBox.UL=styled.ul`
display: flex;
`
NavbarBox.LI=styled.li`
list-style-type: none;
margin-left: 10px;
color: #333;
`
export const Logo =styled.p`

color: #46A358;
font-size: 22px;
font-weight: 700;
${center}
`
export const Button=styled.button`
padding:5px 10px;
background:#46A358;
border: none;
border-radius:4px;
color: #fff;
margin-left:10px;
cursor: pointer;
:active{
    transform: scale(0.97);
} `

export const Count=styled.p`
background:#46A358; 
color: #fff;
width: 15px;
height: 15px;
border:2px solid #E5E5E5;
border-radius: 50%;
position: absolute;
font-size: 9px;
margin-top: -10px;
margin-left: 17px;
${center}
`
export const Bascet=styled.div`
${center}

`
