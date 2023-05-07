import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

	const [usersList, setUsersList] = useState([]);

	// addUserHandler executes in the child component returns the new user name and age 
	const addUserHandler = (uName, uAge) => {

		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		}); 

	};

	return (
		<Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</Fragment>
	);
}

export default App;
