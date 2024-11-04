import React, { useContext } from "react";
import { Context } from "../store/AppContext.js";

const DeleteModal = ({ modalTriggered, id, closeModal }) => {
  const { actions } = useContext(Context);

  async function handleToConfirmationToDelete() {
    await actions.deleteContact(id);
    closeModal();
  }

  return (
    <div
      className="modal"
      style={{ display: modalTriggered ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you sure?</h5>
            <button
              onClick={closeModal}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>The contact will be deleted</p>
          </div>
          <div className="modal-footer">
            <button
              onClick={closeModal}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              onClick={handleToConfirmationToDelete}
              type="button"
              className="btn btn-primary"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;