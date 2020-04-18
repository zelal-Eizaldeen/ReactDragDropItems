import {combineReducers} from 'redux';
import directoryReducer from './directory/directory.reducer';
import projectReducer from './project/project.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
    directory: directoryReducer,
    project: projectReducer
});