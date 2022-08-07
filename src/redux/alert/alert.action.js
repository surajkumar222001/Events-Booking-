import {v4} from 'uuid'


export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT ='REMOVE_ALERT';


 export let setAlert = (message , color) => {
    return(dispatch) => {
        let id =v4();
        dispatch({type : SET_ALERT, payload :{message,color ,id} })
        setTimeout(() => {
            dispatch(removeAlert(id));
        },3000);
    };
};

let removeAlert = (id) => {
    return(dispatch => {
        dispatch({type : REMOVE_ALERT, payload : {id}});
    }) ;
}