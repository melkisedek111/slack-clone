import channelActionTypes from './channel.types';

const INITIAL_STATE = {
    roomId: null
}

const channelReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case channelActionTypes.ENTER_ROOM:
            return {
                ...state,
                roomId: action.payload.roomId
            }
        default: 
            return state;
    }
}

export default channelReducer;