import React, { useContext } from "react";
import { Context } from "../store/AppContext.js";
import ContactCard from "../component/ContactCard.js";

const Contacts = () => {
  const { store } = useContext(Context);

  return (
    <div>
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
            <ContactCard
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