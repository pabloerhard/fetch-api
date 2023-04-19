import { useState,useEffect } from 'react'
import './App.css'
import {useFetch} from "./useFetch.js"
function App() {

  const {data,loading,error,handleCancelRequest} = useFetch("http://jsonplaceholder.typicode.com/users")
  return (
    <div className="App">
      <h1>Fetching Practice</h1>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <div className="card">
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data?.map(user => (
            <li key={user.id}>{user.name}</li>
        ))}

        </ul>
      </div>

    </div>
  )
}

export default App
