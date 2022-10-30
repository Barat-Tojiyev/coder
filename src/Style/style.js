import styled,{css} from "styled-components";
import bg from '../assets/bg.png'

const center =css`
display:flex;
justify-content:center;
align-items:center;`


export const MainBox=styled.div`
  width: 100%;
  height: 100vh;
  background:linear-gradient(rgba(255,0,0,0.5),rgba(255,0,0,0.5)) , url(${bg});
  display: flex;
  justify-content: space-between;
`
export const Box1 =styled.div`
width:50%;
height: 100%;
${center}
`
Box1.Card=styled.div`
width: 70%;
margin-left: 10%;
`
export const Box2 =styled.div`
width:50%;
height: 100%;
${center}
`
export const Description =styled.p`
margin: ${({m})=> m ? m:'0'};
margin-left: ${({ml})=> ml &&ml};
margin-right: ${({mr})=> mr &&mr};
margin-top: ${({mt})=> mt &&mt};
margin-bottom: ${({mb})=> mb &&mb};
padding: ${({p})=> p ? p:'0'};
padding-left: ${({pl})=> pl &&pl};
padding-right: ${({pr})=> pr &&pr};
padding-top: ${({pt})=> pt &&pt};
padding-bottom: ${({pb})=> pb &&pb};
font-size: ${({fs})=>fs &&fs};
color: ${({color})=>color && color};
font-weight: ${({fw})=>fw &&fw};
width: ${({w})=>w&&w};

`

export const Button =styled.button`
margin: ${({m})=> m && m};
margin-left: ${({ml})=> ml &&ml};
margin-right: ${({mr})=> mr &&mr};
margin-top: ${({mt})=> mt &&mt};
margin-bottom: ${({mb})=> mb &&mb};
padding: ${({p})=> p && p};
padding-left: ${({pl})=> pl &&pl};
padding-right: ${({pr})=> pr &&pr};
padding-top: ${({pt})=> pt &&pt};
padding-bottom: ${({pb})=> pb &&pb};
font-size: ${({fs})=>fs &&fs};
color: ${({color})=>color && color};
background: ${({bg})=>bg&& bg};
font-weight: ${({fw})=>fw &&fw};
width: ${({w})=>w&&w};
height: ${({h})=>h&&h};
border:${({b})=>b ? b:"none"};
display:block;
border-radius: ${({round})=>round&&round};
`
export const FormCard=styled.div`
width: 450px;
height: 450px;
background: #fff;
border-radius: 10px;
margin-top: 20px;
padding: 20px 0;
`

export const FormInput =styled.input`
width: 80%;
height: 40px;
display: block;
margin: 0 auto;
outline:none;
border-radius: 5px;
border:2px solid #777;
padding: 0 10px;
font-size: 16px;
`