import React from 'react'
import Second from './Second'
import { Link } from 'react-router'

function First() {


  return (
    <div>
      <h1>First page</h1>
      <Link to={`/second`}>Move to second page</Link>
    </div>
  )
}

export default First
