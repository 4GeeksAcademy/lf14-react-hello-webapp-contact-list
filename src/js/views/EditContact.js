import React, { useContext } from "react";
import { Context } from "../store/AppContext.js";
import ContactCard from "../component/ContactCard.js";

const EditContact = () => {
  const { store } = useContext(Context);
  // const { contactToEdit } = store;
  return (
    <div className="d-grid">
      <div>
        <h1 className="d-flex justify-content-center mt-5 mb-5">
          Update a new contact
        </h1>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <ContactCard
          btnName={"Update"}
          name={store.contactToEdit.name}
          phone={store.contactToEdit.phone}
          email={store.contactToEdit.email}
          address={store.contactToEdit.address}
          id={store.contactToEdit.id}
        />
      </div>
    </div>
  );
};

export default EditContact;