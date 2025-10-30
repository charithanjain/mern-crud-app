import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/createuser', { name, email, age })
      .then(() => {
        alert('User created successfully!')
        navigate('/api/users')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add User</h2>
      <form onSubmit={Submit} className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium">Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateUser
