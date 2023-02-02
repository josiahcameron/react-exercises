import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

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
  return (
    <div>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default User;
