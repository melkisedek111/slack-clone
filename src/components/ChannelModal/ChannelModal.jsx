import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, TextField } from "@material-ui/core";
import { db } from "../../firebase";
const ChannelModal = ({ open, handleClose, handleChannelName }) => {
	const [channelName, setChannelName] = useState("");
	const handleChange = (e) => {
		const { value } = e.target;
		setChannelName(value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (channelName) {
			db.collection("rooms").add({
				name: channelName,
			});
			setChannelName('');
            handleClose();
		}
	};
	const useStyles = makeStyles((theme) => ({
		modal: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		paper: {
			position: "absolute",
			width: 400,
			backgroundColor: theme.palette.background.paper,
			border: "2px solid #000",
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
	}));
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render

	const body = (
		<div className={classes.paper}>
			<form onSubmit={handleSubmit}>
				<h4>Add new channel</h4>
				<div style={{ marginBottom: 20 }}>
					<TextField
						fullWidth
						id="standard-error"
						label="Channel Name"
						name="channelName"
						onChange={handleChange}
						value={channelName}
						required
					/>
				</div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<Button
						type="button"
						variant="contained"
						color="secondary"
						onClick={handleClose}
					>
						Close
					</Button>
					<Button type="submit" variant="contained" color="primary">
						Add
					</Button>
				</div>
			</form>
		</div>
	);
	return (
		<div>
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		</div>
	);
};

export default ChannelModal;
