import { useState } from "react";
import { form } from "bootstrap";
import { Button } from "react-bootstrap";

function UserForm({ addContact }) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = { firstName, lastName, address, phoneNumber };
		addContact(newUser);

		setFirstName("");
		setLastName("");
		setAddress("");
		setPhoneNumber("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="Name">First Name: </label>
			<input
				type="text"
				name="firstname"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<label htmlFor="Name">Last Name: </label>
			<input
				type="text"
				name="lastname"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			<label htmlFor="Address">Address: </label>
			<input
				type="text"
				name="address"
				value={address}
				onChange={(e) => setAddress(e.target.value)}
			/>
			<label htmlFor="Phone-Number">Phone Number: </label>
			<input
				type="tel"
				name="phone-number"
				value={phoneNumber}
				onChange={(e) => setPhoneNumber(e.target.value)}
			/>
			<Button type="submit">Save</Button>
		</form>
	);
}

export default UserForm;
