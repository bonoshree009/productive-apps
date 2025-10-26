import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Root from './Root.jsx';
import Home from './component/Home.jsx';
import ErrorPage from './component/ErrorPage.jsx';
import Apps from './component/Pages.jsx/Apps.jsx';
import CardDetails from './component/CardDetails.jsx';
import Installation from './component/Pages.jsx/Installation.jsx';


const router = createBrowserRouter([
    {
    path : '/',
    Component : Root ,
    errorElement: ErrorPage ,
     children :[
        { index :true , Component : Home},
        {path : 'apps' , Component: Apps },
        {path : 'details/:id', Component : CardDetails },
       {path : 'install' , Component : Installation },
        
   
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
