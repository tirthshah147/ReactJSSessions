import React from 'react'
import { useState,useEffect } from 'react/cjs/react.development'

export default function UserHooks() {
  const [users,setUsers] = useState(null);
  const [error,setError] = useState(null);
  const [isLoading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      setLoading(false);
      setUsers(users);
    })
    .catch((error) => {
      setLoading(false);
      setError(error);
    })
  },[])
  
  if (error) return <div>Error found!</div>
  if (!users) return isLoading ? <div>Loading...</div> : <div>No Users Found!</div>
  return (
    <div>
      <ul>
        {users.map((u,i) => <li key={i}>{u.name}</li>
        )}
      </ul>
    </div>
  )
}
