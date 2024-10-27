import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './pages/App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx"

// import {Provider} from "@reduxjs/toolkit";
// import { store } from './store/index.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "product/:id",
        element: <ProductPage/>
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}

    <RouterProvider router={router}/>
    {/* </Provider> */}
  </StrictMode>,
)
