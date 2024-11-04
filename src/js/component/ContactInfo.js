import React, { useState, useContext } from "react";
import { Context } from "../store/AppContext.js";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteModal from "./DeleteModal.js";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import rigoImage from "../../img/rigo-baby.jpg";

const ContactInfo = ({ name, email, address, phone, id }) => {
  const { actions } = useContext(Context);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

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
      <ConfirmationToDelete
        modalTriggered={openModal}
        id={id}
        closeModal={handleDeleteModal}
      />
    </>
  );
};

export default ContactInfo;