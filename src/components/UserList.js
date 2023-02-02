function UserList({ users }) {
  const contactListHTML = users.map((user, index) => (
    <li key={index}>
      <p>
        Name: {user.firstName}
        {user.lastName}
        Address: {user.address}
        Phone Number: {user.phoneNumber}
      </p>
    </li>
  ));
}

export default UserList;
