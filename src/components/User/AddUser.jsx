import {useState} from "react";
import SendButton from "../UI/Button/SendButton";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/Errors/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const submit = (event) => {
		event.preventDefault();
		if (userName.trim().length === 0 || age.trim().length === 0) {
			setError({
				message: "Please enter a name and an age for the user",
				title: "error",
			});
			return;
		}

		if (+age <= 0) {
			setError({
				message: "Age must be greater than zero",
				title: "error",
			});
			return;
		}

		props.onAddUser(userName, age);
		setUserName("");
		setAge("");
	};

	const [userName, setUserName] = useState("");
	const userNameChanged = (event) => {
		setUserName(event.target.value);
	};

	const [age, setAge] = useState("");
	const ageChanged = (event) => {
		setAge(event.target.value);
	};

	const [error, setError] = useState("");
	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					function={errorHandler}
				></ErrorModal>
			)}
			<Card className={styles.input}>
				<form onSubmit={submit}>
					<label htmlFor="userName">Username</label>
					<input
						id="userName"
						type="text"
						value={userName}
						onChange={userNameChanged}
					/>

					<label htmlFor="age">Age</label>
					<input id="age" type="number" value={age} onChange={ageChanged} />

					<SendButton
						props={{
							type: "submit",
							name: "Add User",
							style: {
								marginTop: 2,
							},
						}}
					></SendButton>
				</form>
			</Card>
		</>
	);
};
export default AddUser;
