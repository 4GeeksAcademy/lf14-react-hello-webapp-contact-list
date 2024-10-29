import React from 'react'
import { Router } from 'react-router'
import { Link } from 'react-router-dom'

const AddContact = () => {
  return (
    <div>AddContact
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Name</span>
  <span className="input-group-text" id="basic-addon1">Adress</span>
  <span className="input-group-text" id="basic-addon1">Phone</span>
  <span className="input-group-text" id="basic-addon1">Email</span>
 
</div>
<Link to="/">
<button className="btn btn-success"> Back to home</button>
</Link>

    </div>
  )
}

export default AddContact