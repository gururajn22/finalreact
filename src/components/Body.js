import React from 'react'
import Login from './Login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const Body = () => {
  
    const loginRouting=createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        }
    ])

  return (
    <div>
    <RouterProvider router={loginRouting}/>
    </div>
  )
}

export default Body