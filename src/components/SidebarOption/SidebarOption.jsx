import React, { useState } from "react";
import { connect } from "react-redux";
import { roomChannel } from "../../redux/channel/channel.actions";
import ChannelModal from "../ChannelModal/ChannelModal";
import {
	SidebarOptionChannel,
	SidebarOptionContainer,
} from "./sidebarOption.styles";

const SidebarOption = ({ Icon, title, addChannelOption, id, roomChannel }) => {
	const [open, setOpen] = useState(false);
    
	const handleClose = () => {
		setOpen(false);
	};
	const addChannel = () => {
		setOpen(true);
	};

	const selectChannel = () => {
		if (id) {
			roomChannel({ roomId: id });
		}
	};
	return (
		<>
			{addChannelOption && (
				<ChannelModal open={open} handleClose={handleClose} />
			)}
			<SidebarOptionContainer
				onClick={addChannelOption ? addChannel : selectChannel}
			>
				{Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
				{Icon ? (
					<h3>{title}</h3>
				) : (
					<SidebarOptionChannel>
						<span>#</span> {title}
					</SidebarOptionChannel>
				)}
			</SidebarOptionContainer>
		</>
	);
};
const mapDispatchToProps = (dispatch) => ({
	roomChannel: (room) => dispatch(roomChannel(room)),
});
export default connect(null, mapDispatchToProps)(SidebarOption);
