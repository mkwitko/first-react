import {Button} from "@mui/material";

const SendButton = ({props}) => {
	return (
		<Button
			type={props.type || "button"}
			onClick={props.func ?? props.func}
			sx={props.style ?? props.style}
			variant="contained"
		>
			{props.name ? props.name : "Enviar"}
		</Button>
	);
};
export default SendButton;
