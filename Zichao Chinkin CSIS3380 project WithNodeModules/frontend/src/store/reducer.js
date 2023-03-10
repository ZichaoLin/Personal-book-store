import { combineReducers } from "redux";
import { reducer as registerReducer } from "../components/register/store";
import { reducer as loginReducer } from '../components/login/store';
export default combineReducers({
    register: registerReducer,
    login: loginReducer
});