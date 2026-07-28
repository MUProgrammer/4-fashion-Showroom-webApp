import React from 'react'
import AuthLayout from './pages/auth/AuthLayout'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import RegisterPage from './pages/auth/RegisterPage'
const App = () => {
  return (
    <BrowserRouter>
    <AuthLayout>
      <Routes>
        <Route path="/" element={<RegisterPage/>}/>
      </Routes>
    </AuthLayout>
    </BrowserRouter>
  )
}

export default App
