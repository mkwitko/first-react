import React, {useState} from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		console.log(usersList);
		setUsersList((prevUsers) => {
			return [...prevUsers, {name: uName, age: uAge}];
		});
	};
	return (
		<div>
			<AddUser onAddUser={addUserHandler}></AddUser>
			{usersList.length > 0 && <UserList users={usersList}></UserList>}
		</div>
	);
}

export default App;
