import axios from "axios";
import * as alertAction from '../alert/alert.action'
import * as userUtil from '../../util/userUtil';
import * as tokenUtil from '../../util/tokenUtil';


export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST'
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS'
export const USER_REGISTRATION_FAILURE = 'USER_REGISTRATION_FAILURE'


export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

export const LOGOUT_USER = 'LOGOUT_USER'

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE'

// registration action


export  const registerUser = (userInfo,navigate) => {
    return async (dispatch) => {
        try {
            dispatch({type : USER_REGISTRATION_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/users/register'
            let response = await axios.post(dataURL,userInfo);
            dispatch({type : USER_REGISTRATION_SUCCESS,payload :response.data})
            dispatch(alertAction.setAlert(response.data.message,'success'))
            navigate('/user/login')
        }
        catch (error) {
            dispatch({type : USER_REGISTRATION_FAILURE, payload : error.response.data})
            let alertMessage = error.response.data.error
            dispatch(alertAction.setAlert(alertMessage[0].message , 'danger'))
        }

    }
};

export  const userLogin = (userInfo,navigate) => {
       return async (dispatch) => {
           try{
               dispatch({type:USER_LOGIN_REQUEST});
               let dataURL = 'http://127.0.0.1:5000/api/users/login';
               let response = await axios.post(dataURL,userInfo);
               dispatch({type:USER_LOGIN_SUCCESS, payload : response.data})
               dispatch(alertAction.setAlert(response.data.msg,'success'))
               navigate('/')
           }
           catch (error) {
               dispatch({type : USER_LOGIN_FAILURE, payload : error.response.data})
               let alertMessage = error.response.data
               dispatch(alertAction.setAlert(alertMessage[0].message , 'danger'))

           }
       }
}

export const logoutUser = (navigate) => {
    return(dispatch) => {
        dispatch({type : LOGOUT_USER});
        navigate('/')
    }
};

export const getUserInfo = () => {
    return async (dispatch) => {
        if(userUtil.getToken())
        {
            tokenUtil.setAuthToken(userUtil.getToken())
        }
         try{
             dispatch({type : GET_USER_INFO_REQUEST});
             let dataURL = 'http://127.0.0.1:5000/api/users/'
             let response = await axios.get(dataURL);
             dispatch({type : GET_USER_INFO_SUCCESS, payload : response.data.user});

         }
         catch (e) {
            console.error(e)
             dispatch({type : GET_USER_INFO_FAILURE, payload : e.response.data})

         }


    }
}

