import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Cadastro from './pages/Cadastro.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Login from './pages/Login.jsx'
import Logado from './pages/Logado.jsx'
import ConteudoPrincipal from './components/ConteudoPrincipal.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: <ConteudoPrincipal/>},
      { path: "/cadastro", element: <Cadastro/>},
      { path: "/login", element: <Login/>},
      { path: "/login/id:", element: <Logado/>},
      { path: "*", element: <PageNotFound/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
