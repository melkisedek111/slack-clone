import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React, { useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ChatInput from "../../components/ChatInput/ChatInput";
import { selectRoomChannelId } from "../../redux/channel/channel.selector";
import {
	ChatContainer,
	Header,
	HeaderLeft,
	HeaderRight,
	ChatMessages,
	ChatBottom,
	Loading,
} from "./chat.styles";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Message from "../../components/Message/Message";
import { useEffect } from "react";
const Chat = ({ roomId }) => {
	const chatRef = useRef(null);

	const [roomDetails] = useDocument(
		roomId && db.collection("rooms").doc(roomId)
	);
	const [roomMessages, loadingMessages] = useCollection(
		roomId &&
			db
				.collection("rooms")
				.doc(roomId)
				.collection("messages")
				.orderBy("timestamp", "asc")
	);

	useEffect(() => {
		chatRef?.current.scrollIntoView({ behavior: "smooth" });
	}, [roomId, loadingMessages]);

	return (
		<ChatContainer>
			<>
				<Header>
					<HeaderLeft>
						<h4>
							<strong># {roomDetails?.data().name}</strong>
						</h4>
						<StarBorderOutlined />
					</HeaderLeft>
					<HeaderRight>
						<p>
							<InfoOutlined /> Details
						</p>
					</HeaderRight>
				</Header>
				<ChatMessages>
					{
                        roomMessages ? (
						roomMessages?.docs.map((doc) => {
							const { message, timestamp, user, userImage } = doc.data();
							return (
								<Message
									key={doc.id}
									message={message}
									timestamp={timestamp}
									user={user}
									userImage={userImage}
								/>
							);
						})
					) : (
						<Loading />
					)}
					<ChatBottom ref={chatRef} />
				</ChatMessages>

				<ChatInput
					chatRef={chatRef}
					channelName={roomDetails?.data().name}
					roomId={roomId}
				/>
			</>
		</ChatContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	roomId: selectRoomChannelId,
});

export default connect(mapStateToProps)(Chat);
