import React from 'react'
import ReactDom from 'react-dom/client'
import Card from './Card';
import './index.css'
import { Container } from './Style/style';


const root =ReactDom.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
<Container>
    <Card/>
</Container>
 </React.StrictMode>
  

)