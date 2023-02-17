import { useState } from "react";
import UserForm from "./UserForm";

const INITIAL_USER = [
  {
    firstName: "Olgilvie",
    lastName: "Hedgehog",
    address: "250 East Olive Avenue, Suite 200",
    phoneNumber: "(213)282-8594",
  },
];

function User() {
  const [users, setUser] = useState(INITIAL_USER);

  const addUser = (user) => {
    setUser([...users, user]);
  };

  const contactListHTML = users.map((user, index) => {
    <div key={index}>
      <p>
        Name: {user.firstName},{user.lastName}
      </p>
      <p>Address: {user.address}</p>
      <a href={`tel:+1${user.phoneNumber}`}>{user.phoneNumber}</a>
    </div>;
  });
  return (
    <div>
      <UserForm addUser={addUser} />
      {contactListHTML}
    </div>
  );
}

export default User;
