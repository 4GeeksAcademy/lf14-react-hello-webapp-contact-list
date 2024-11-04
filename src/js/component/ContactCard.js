import React, { useState, useContext } from "react";
import { Context } from "../store/AppContext.js";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import rigoImage from "../../img/rigo-baby.jpg";
import DeleteModal from "./DeleteModal.js";

const ContactCard = ({ btnName, name = "", phone = "", address = "", email = "", id }) => {
  const { actions } = useContext(Context);
  const [contact, setContact] = useState({ name, phone, email, address });
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (id) {
      await actions.updateContact(id, contact);
      navigate("/contacts");
    } else {
      await actions.createContact(contact);
      navigate("/contacts");
      actions.getContacts(contact);
    }
  }

  function handleToEdit(contact) {
    actions.updateContactToEdit(contact);
    navigate("/updateContact");
  }

  function handleToOpenModal() {
    setOpenModal(true);
  }

  function handleDeleteModal() {
    setOpenModal(false);
  }

  return (
    <>
      <form className="col-8 mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Full Name</label>
          <input
            name="name"
            onChange={(e) => handleChange(e)}
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={contact.name}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={contact.email}
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            name="phone"
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Phone"
            value={contact.phone}
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            name="address"
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Address"
            value={contact.address}
          />
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button type="submit" className="btn btn-primary col-8 text-center">
            {btnName}
          </button>
        </div>
      </form>

      <div className="row">
        <div className="col-md-4">
          <img
            src={rigoImage}
            className="d-flex mx-auto img-fluid rounded-circle mt-3 mb-3"
            alt="people"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-inline">
            <h5 className="card-title mb-3">{name}</h5>
            <div className="ms-5">
              <div className="col-md-10 d-flex justify-content-end mx-auto">
                <div className="pe-5">
                  <span
                    onClick={() =>
                      handleToEdit({ name, phone, email, address, id })
                    }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                </div>
                <div className="pe-5">
                  <span onClick={handleToOpenModal}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <p className="card-text pe-5 mb-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                </p>
              </div>
              <div>{address}</div>
            </div>
            <div className="d-flex">
              <div>
                <p className="card-text pe-5 mb-2">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </p>
              </div>
              <div>
                <div>{phone}</div>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <p className="card-text pe-5 mb-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                </p>
              </div>
              <div>{email}</div>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal
        modalTriggered={openModal}
        id={id}
        closeModal={handleDeleteModal}
      />
    </>
  );
};

export default ContactCard;