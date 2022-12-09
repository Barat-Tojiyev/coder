import styled from "styled-components";

export const Wrapper =styled.div`
width: 70%;
margin: 50px auto;
display: grid;
grid-template-columns:repeat( 3,1fr);
gap: 10px;
`

export  const Card =styled.div`
width: 250px;
background:#fff;
border-radius: 10px;
overflow:hidden;
position: relative;
:hover{
    box-shadow:0 0 10px #46A358;
}



`
Card.Img=styled.img`
width:100%;
height:200px;`

Card.P=styled.p`
color: #333;
font-size: 20px;
margin-left:20px;`

Card.H4=styled.h4`
color: #46A358;
font-size: 20px;
margin-left:20px;
font-weight:700;
`
export const Button=styled.button`
width: 80%;
display: block;
margin: 5px auto;
border-radius: 5px;
background:#46A358;
color: #fff;
border:none;
font-size: 17px;
padding : 10px 0;
transition: 0.5s;
cursor: pointer;
:hover{
    transform:scale(1.05)
}
`
export const Sale=styled.h5`
color: #fff;
display: inline-block;
background: red;
/* position: absolute; */
padding: 5px 10px;
margin-top: 15px;
transform: rotate(-25deg);
`
export const Top=styled.div`
display: flex;
justify-content:space-between;
align-items: center;
padding-right: 20px;
padding-top: 10px;
`
