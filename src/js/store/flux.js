const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contactList: [],
			idDelete: "",
			contactToEdit: {}
		},
		actions: {
			getData: str => {
				fetch("https://playground.4geeks.com/contact/agendas/lf14")
					.then(res => res.json())
					.then(data => setStore({ contactList: data }))
					.catch(error => console.log(error));
			},
			addContact: user => {
				fetch("https://playground.4geeks.com/contact/agendas/lf14/contacts", {
					method: "POST", // or 'POST'
					body: JSON.stringify(user), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => console.log("Success:", response))
					.catch(error => console.error("Error:", error));
			},
		
			editContact: (id, contact) => {
				fetch("https://playground.4geeks.com/contact/agendas/lf14/contacts/" + id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(res => res.json())
					.then(results => console.log(setStore({ contact: results })))
					.catch(error => console.log("Error", error));
			},
			getContact: contact => {
				setStore({ contactToEdit: contact });
			}
		}
	};
};

export default getState;