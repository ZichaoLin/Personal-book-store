import axios from "../../../utils/request";
export const registerAc = data => {
    return dispatch => {
        return axios.post('/api/register', data);
    };



};