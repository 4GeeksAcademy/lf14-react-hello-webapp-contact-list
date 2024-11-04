import React, { useContext } from "react";
import { Context } from "../store/AppContext.js";
import ContactInfo from "../component/ContactInfo.js";

export const Contacts = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <div>
        {store.contacts.length === 0 ? (
          <div className="text-center alert alert-info" role="alert">
            No hay contactos, crea uno
          </div>
        ) : null}
      </div>
      {store.contacts.map((contact) => {
        return (
          <div className="card mb-3" key={contact.id}>
            <ContactInfo
              name={contact.name}
              phone={contact.phone}
              address={contact.address}
              email={contact.email}
              id={contact.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;