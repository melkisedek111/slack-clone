import { createSelector } from "reselect";

const selectChannel = (state) => state.channel;

export const selectRoomChannelId = createSelector(
	[selectChannel],
	(channel) => channel.roomId
);
