import React from "react"
import { Link, RouterProvider } from "react-router-dom"

function App() {

  return (
    <>
      <Link to={'/post'}>post</Link>
      <Link to={'/table'}>table</Link>
      <Link to={'/test'}>test</Link>
    </>
  )
}

export default App
