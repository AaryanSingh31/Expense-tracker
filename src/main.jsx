import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Transactions from './components/Transactions/Transactions.jsx'
import Budgets from './components/Budgets/Budgets.jsx'
import Profile from './components/Profile/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='transactions' element={<Transactions />} />
      <Route path='budgets' element={<Budgets />} />
      <Route path='profile' element={<Profile />} />
      {/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
