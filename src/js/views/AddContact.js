import React from 'react'
import { Router } from 'react-router-dom'
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from 'react-router-dom'
import ContactCard from '../component/ContactCard';
import { Context } from "../store/AppContext.js";


const AddContact = () => {
  return (
    <div>AddContact
     
      <Link to="/">
        <button className="btn btn-success"> Back to home</button>
      </Link>

    </div>
  )
}

export default AddContact