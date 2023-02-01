import { useState } from "react";

const INITIAL_USER = [
  {
    firstName: "Olgilvie",
    lastName: "Hedgehog",
    address: "250 East Olive Avenue, Suite 200",
    phoneNumber: "(213)282-8594",
  },
];

function User({}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [users, setUser] = useState(INITIAL_USER);
  const addUser = (user) => {
    setUser([...users, user]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, address, phoneNumber };
    addUser(newUser);

    console.log(users);
    // setTitle("");
    // setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name">First Name</label>
      <input
        type="text"
        name="firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="Name">Last Name</label>
      <input
        type="text"
        name="lastname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="Address">Address</label>
      <input
        type="text"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        name="phonenumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default User;
