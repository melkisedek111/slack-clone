import channelActionTypes from "./channel.types";

export const roomChannel = (room) => ({
	type: channelActionTypes.ENTER_ROOM,
	payload: room,
});
