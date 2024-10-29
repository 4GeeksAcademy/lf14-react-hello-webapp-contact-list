import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const Editcontact = () => {
  return (
    <div>Edit Contact
        <Link to="/">
<button className="btn btn-success"> Back to home</button>
</Link>
    </div>
  )
}

export default Editcontact