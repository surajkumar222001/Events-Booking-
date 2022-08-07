import {combineReducers} from "redux";
import * as alertReducer from "./alert/alert.reducer";
import * as userReducer from './user/user.reducer'
import * as eventReducer from '../redux/events/events.reducer'
const rootReducer = combineReducers({
    [alertReducer.alertFeatureKey] : alertReducer.reducer,
    [userReducer.userReducerFeatureKey]: userReducer.reducer,
    [eventReducer.eventReducerFeatureKey] : eventReducer.eventReducer
});
export {rootReducer}