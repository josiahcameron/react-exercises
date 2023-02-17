import { useState } from "react";

function UserForm({ addUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, address, phoneNumber };
    addUser(newUser);

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
      <button type="submit">Save</button>
    </form>
  );
}

export default UserForm;
