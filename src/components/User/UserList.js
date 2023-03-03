import { useState } from "react";
import UserForm from "./UserForm";

const INITIAL_DATA = [
	{
		firstName: "Sally",
		lastName: "Walters",
		address: "123 Holly Street, Easley, SC",
		phoneNumber: "(555)555-5555",
	},
	{
		firstName: "Peter",
		lastName: "Walters",
		address: "123 Holly Street, Easley, SC",
		phoneNumber: "(555)555-5555",
	},
	{
		firstName: "Jack",
		lastName: "Walters",
		address: "123 Holly Street, Easley, SC",
		phoneNumber: "(555)555-5555",
	},
];

function ContactList() {
	const [contacts, setContacts] = useState(INITIAL_DATA);

	const addContact = (contact) => {
		setContacts([...contacts, contact]);
	};

	const contactsHTML = contacts.map((contact, index) => (
		<div key={index}>
			<p>
				{contact.lastName}, {contact.firstName}
			</p>
			<p>{contact.address}</p>
			<a href={`Phone Number: ${contact.phoneNumber}`}>
				{contact.phoneNumber}
			</a>
		</div>
	));

	return (
		<div>
			<UserForm addContact={addContact} />
			{contactsHTML}
		</div>
	);
}

export default ContactList;
