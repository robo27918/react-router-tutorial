import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*This is known as the root rout
     since the rest of our routes
     will render inside of it */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
