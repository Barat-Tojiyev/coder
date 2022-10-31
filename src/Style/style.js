import styled,{keyframes} from "styled-components";



const Animatsiya=keyframes`
from{
    background: green;    
    box-shadow: 0 0 20px black;
    transform: scale(1.1);
}
to{
    background: blue;   
    box-shadow: 0 0 20px orange;
}
`
export const Container=styled.div`
width: 90%;
margin: 20px auto;
`

const getType=(type)=>{
    switch(type){
        case 'primary':
            return{
                background: "#0D6EFD",
                color: '#fff'     }
        case 'success':
            return{
                background: "#198754",
                color: '#fff'     }
        case 'danger':
            return{
                background: "#DC3545",
                color: '#fff'     }

        default:
            return {
                background:'#fff',
                color:'#000'
                }
    }
}

export const Button=styled.button`
padding: 10px 30px;
border:none;
border-radius:5px;

${({type})=>getType(type)}
:active{
    transform: scale(0.99);
}
:hover{
    cursor: pointer;    
}
`
export const Description=styled.p`
font-size: 40px;
color: red;
font-weight: 600;

@media (max-width:991px){
  color:green;
  font-size: 30px;
}
@media (max-width:800px){
  color:blue;
  font-size: 20px;
}
@media (max-width:700px){
  display: none;
}
`
export const Card=styled.div`
height: 100px;
width: 150px;
border-radius: 10px;

background: #DC3545;
animation-name: ${Animatsiya};
animation-duration:1s; 
animation-iteration-count: infinite;

`