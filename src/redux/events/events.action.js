import axios from "axios";
import * as alertAction from '../alert/alert.action'
import {setAuthToken} from "../../util/tokenUtil";
import {getToken} from "../../util/userUtil";


export const EVENT_UPLOAD_REQUEST = 'EVENT_UPLOAD_REQUEST'
export const EVENT_UPLOAD_SUCCESS = 'EVENT_UPLOAD_SUCCESS'
export const EVENT_UPLOAD_FAILURE = 'EVENT_UPLOAD_FAILURE'

export const FREE_EVENTS_GET_REQUEST = 'FREE_EVENTS_GET_REQUEST'
export const FREE_EVENTS_GET_SUCCESS = 'FREE_EVENTS_GET_SUCCESS'
export const FREE_EVENTS_GET_FAILURE = 'FREE_EVENTS_GET_FAILURE'

export const PRO_EVENTS_GET_REQUEST = 'PRO_EVENTS_GET_REQUEST'
export const PRO_EVENTS_GET_SUCCESS = 'PRO_EVENTS_GET_SUCCESS'
export const PRO_EVENTS_GET_FAILURE = 'PRO_EVENTS_GET_FAILURE'





export  const uploadEventAction = (event , navigate) => {
    return async (dispatch) => {
        try{
            if (getToken){
                setAuthToken(getToken())

            }
            dispatch({type : EVENT_UPLOAD_REQUEST});
            let uploadURL =  'http://127.0.0.1:5000/api/events/upload';
            let response =  await axios.post(uploadURL , event);
            dispatch({type : EVENT_UPLOAD_SUCCESS , payload :response.data.msg});
            dispatch(alertAction.setAlert(response.data.msg , 'success'));
            if (event.type === 'FREE'){
                navigate('/events/free');
            }
            if (event.type === 'PRO'){
                navigate('/events/pro');
            }

        }
        catch (e) {
            console.error(e);
            dispatch({type : EVENT_UPLOAD_FAILURE , payload : e.response.data});
            dispatch(alertAction.setAlert('something went wrong', 'danger'))
        }
    }
}

export  const getFreeEventsAction = () => {
    return async (dispatch) => {
        try{
            dispatch({type : FREE_EVENTS_GET_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/events/free';
            let response = await axios.get(dataURL);
            dispatch({type :FREE_EVENTS_GET_SUCCESS , payload : response.data });

        }
        catch (e) {
            console.error(e);
            dispatch({type:FREE_EVENTS_GET_FAILURE, payload:e.response.data});
        }
    }
}

export  const getProEventsAction = () => {
    return async (dispatch) => {
        try{
            if (getToken){
                setAuthToken(getToken())
            }
            dispatch({type : PRO_EVENTS_GET_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/events/pro';
            let response = await axios.get(dataURL);
            dispatch({type :PRO_EVENTS_GET_SUCCESS , payload : response.data });

        }
        catch (e) {
            console.error(e);
            dispatch({type:PRO_EVENTS_GET_FAILURE, payload:e.response.data});
        }
    }
}