import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import Main from './Main.jsx';


const root =ReactDom.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>    
<Main/>
 </React.StrictMode>
  

)