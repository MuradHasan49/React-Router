import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import OutletComponet from './Components/Outlet/OutletComponet.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contect.jsx'
import RecipeDetails from './assets/ReUseComponets/RecipeDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: OutletComponet,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "contect",
        Component: Contact
      },
      {
        path: "recipe/:id",
        Component: RecipeDetails
      },
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
