import styled from "styled-components";

export const Container=styled.div`
width:90%;
margin:20px auto;`

Container.H2=styled.h2`
color: red;`


export const Table=styled.table`
 
 width: 70%;
 margin: 20px auto;
 display: block;
`
Table.TD=styled.td`
padding:10px 30px;`

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
font-weight: ${({fw})=>fw &&fw};
color: ${({color})=>color&& color};
display: ${({d})=>d&&d};
text-align: ${({text})=>text&&text};
background: ${({bg})=>bg&&bg};
cursor: ${({cursor})=>cursor&&cursor}

`