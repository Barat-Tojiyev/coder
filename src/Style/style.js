import styled,{css} from "styled-components";

const center=css`
 display: flex;
 justify-content: center;
 align-items: center;
`


export const Container=styled.div`   
   width: 90%;
   margin: 0 auto;
   ${center}
   
`

export const Primary =styled.button`
  padding: 5px 15px;
  background: #0D6EFD;
  color:#fff;
  border: none;
  border-radius: 5px;
  :hover{              
   background: #0D6EDD;
   cursor: pointer;
  }
  :active{
   transform: scale(0.95);
  }
`
export const Danger =styled.button`
  padding: 5px 15px;
  background: #DC3545;
  color:#fff;
  border: none;
  border-radius: 5px;
  :hover{              
   background: #CC3545;
   cursor: pointer;
  }
  :active{
   transform: scale(0.95);
  }
`
export const Card  =styled.div`
 width:${({w})=>w ?  w:'200px'} ;
 height:${({h})=> h ? h :'300px'} ;
 background: ${({bg})=>bg ? bg :"#ddd"};
 border: 1px solid #777;
 ${center}
`
export const Description=styled.p`
 font-size: ${({fs})=> fs&& fs};
 color: ${({color})=>color && color};
 background: ${({bg})=>bg && bg  };
 font-weight: 600;
 font-family: sans-serif;
 padding: 5px 0;
 text-align: center;
`