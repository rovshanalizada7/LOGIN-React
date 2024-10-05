import './App.css'
import Login from './assets/Components/Login/Login'
import SignUp from './assets/Components/SignUp/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './assets/Components/Welcome/Welcome'

function App() {
 
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>} />
      <Route path="/welcome/:id" element={<Welcome/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
