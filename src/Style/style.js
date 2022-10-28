import styled ,{css} from "styled-components";
import BgImage  from '../Image/bg.svg'
import MusicImg from '../Image/music.svg'

const center =css`
display: flex;
justify-content: center;
align-items: center;
`


export const Container =styled.div`
width: 100%;
height: 100vh;
background-image: url(${BgImage});
background-repeat: no-repeat;
background-size: cover;
${center}
`

export const CardBox =styled.div`
width:${({w})=> w ? w:'200px'};
height:${({h})=>h? h:'300px'};
background-color: ${({bg})=> bg && bg};
border-radius: 10px;
box-shadow: 0 5px 20px #999;
overflow: hidden;
`
export const CardImage=styled.div`
width:100%;
height: 130px;
background-image: url(${MusicImg});
background-repeat: no-repeat;
background-size: cover;
`
export const Description =styled.p`
 color: ${({color})=>color &&color};
 background: ${({bg})=> bg&&bg};
 font-weight:${({fw})=>fw&&fw};
 text-align:${({text})=>text&&text};
 margin-top: ${({mt})=>mt&&mt};
 margin-bottom: ${({mb})=>mb&&mb};
 margin-left: ${({ml})=>ml&&ml};
 margin-right: ${({mr})=>mr&&mr};
 padding: ${({p})=> p&&p};
 font-size: ${({fs})=>fs&&fs};
 width:${({w})=>w&&w};
`
export const CardMain=styled.div`
margin-top: 15px;
display: flex;
justify-content: space-around;
align-items: center;
`
export const CardInput =styled.input`

width:80%;
height:30px;
border-radius:4px;
display:block;
margin:10px auto;
outline:none;
border: 2px solid #777;
padding: 0 10px;`