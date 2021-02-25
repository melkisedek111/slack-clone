import { Button } from "@material-ui/core";
import React, { useRef } from "react";
import { auth, db } from "../../firebase";
import { ChatInputContainer } from "./chatinput.styles";
import firebase from "firebase";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, roomId, chatRef }) => {
	const [input, setInput] = useState("");
    const [user] = useAuthState(auth);
	const sendMessage = (e) => {
		e.preventDefault();

		if (!roomId) return;
		db.collection("rooms").doc(roomId).collection("messages").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: user?.displayName,
			userImage: user?.photoURL,
		});
		chatRef.current.scrollIntoView({
			behavior: "smooth",
		});
		setInput("");
	};
	return (
		<ChatInputContainer>
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="text"
					placeholder={
						channelName ? `Message #${channelName}` : "Please select channel"
					}
				/>
				<Button hidden type="submit" onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	);
};

export default ChatInput;
