import Card from "../UI/Card/Card";
import styles from "./UserList.module.css";
const UserList = (props) => {
	return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((e, index) => {
					return (
						<li key={index}>
							Nome: {e.name} - {e.age} anos de idade
						</li>
					);
				})}
			</ul>
		</Card>
	);
};
export default UserList;
