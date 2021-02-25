import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import channelReducer from './channel/channel.reducer';

const persistConfig= {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    channel: channelReducer
});

export default persistReducer(persistConfig, rootReducer);
