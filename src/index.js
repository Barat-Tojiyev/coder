import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import { Root } from './root';


const root =ReactDom.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <Root/>
 </React.StrictMode>
  

)