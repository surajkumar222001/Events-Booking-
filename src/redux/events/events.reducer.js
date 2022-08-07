import * as eventAction from './events.action'
export  const eventReducerFeatureKey = 'event'

let initialState = {
    loading : false,
    errorMessage : '',
    event : []
}

 export let eventReducer = (state=initialState,action) => {
    let {type , payload} = action;
    switch (type) {
        case eventAction.EVENT_UPLOAD_REQUEST :
            return {
                ...state,
                loading: true,

            };

        case eventAction.EVENT_UPLOAD_SUCCESS :
            return {
                ...state,
                loading: true,

            };

        case eventAction.EVENT_UPLOAD_FAILURE :
            return {
                ...state,
                loading: false,
                errorMessage: payload

            };

        case eventAction.FREE_EVENTS_GET_REQUEST :
            return {
                ...state,
                loading: true
            };

        case eventAction.FREE_EVENTS_GET_SUCCESS :
            return {
                ...state,
                loading: false,
                event: payload
            };
        case eventAction.FREE_EVENTS_GET_FAILURE :
            return {
                ...state,
                loading: false,
                event: ''
            };

        case eventAction.PRO_EVENTS_GET_REQUEST :
            return {
                ...state,
                loading: true,

            };

        case eventAction.PRO_EVENTS_GET_SUCCESS :
            return {
                ...state,
                loading: false,
                event: payload
            };

        case eventAction.PRO_EVENTS_GET_FAILURE :
            return {
                ...state,
                loading: false,
                event: ''
            };

        default : return  state
    }
}