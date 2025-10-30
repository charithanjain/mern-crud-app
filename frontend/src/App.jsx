import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

function App() {

  return (
    <><div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path='/api/users' element={<Users />}></Route>
          <Route path='/api/createuser' element={<CreateUser />}></Route>
          <Route path='/api/updateuser/:id' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>


    </>
  )
}

export default App
