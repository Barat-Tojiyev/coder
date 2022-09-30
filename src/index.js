import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App';
import Navbar from './Navbar';



const root =ReactDom.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
<App/>
<Navbar/>
 </React.StrictMode>
  

)