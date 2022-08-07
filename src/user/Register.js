import React, {useState } from "react";
import {Link , useNavigate} from "react-router-dom";
import brand from "../assests/image/logo.png";
import * as alertAction from "../redux/alert/alert.action";
import {useDispatch} from "react-redux";
import * as userAction from '../redux/user/user.actions'


let Register = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate()

    let [userInfo , setUserInfo] = useState({
        name : '',
        email : '',
        password : ''
    });


    let [userInfoError , setUserInfoError] = useState({
        nameError : '',
        emailError : '',
        passwordError : ''
    });

    let validateUserName = (event) => {

        setUserInfo({
            ...userInfo,
        name : event.target.value
        })
        let regExp = /^[a-zA-Z0-9]{4,10}$/;
        (!regExp.test(event.target.value)) ? setUserInfoError({...userInfoError,nameError: 'Enter a Proper UserName'}) :setUserInfoError({...userInfoError,nameError: ''})
    }

    let validateUserEmail = (event) => {

        setUserInfo({
            ...userInfo,
            email : event.target.value
        })
        let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        (!regExp.test(event.target.value)) ? setUserInfoError({...userInfoError,emailError: 'Enter a valid Email'}) :setUserInfoError({...userInfoError,emailError: ''})
    };


    let validateUserPassword = (event) => {

        setUserInfo({
            ...userInfo,
            password : event.target.value
        })
        let regExp = /^[A-za-z]\w{7,14}$/;
        (!regExp.test(event.target.value)) ? setUserInfoError({...userInfoError,passwordError: 'Enter a valid Password'}) :setUserInfoError({...userInfoError,passwordError: ''})
    };

    // send user data to server

    let submitUser = (event) => {
        event.preventDefault()
        let {email,password,name} = userInfo
        if (email==='' || password ==='' || name === ''){
            dispatch(alertAction.setAlert('Please fill in the field','danger'))
        }
        else
        {
            dispatch(userAction.registerUser(userInfo,navigate))
        }
    }



    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="card animated zoomIn">
                                <div className="card-header bg-dark text-white text-center">
                                    <p className="h3">Register Here</p>
                                </div>
                                <div className="card-body bg-light">
                                    <form action="" onSubmit={submitUser}>

                                        <div className="form-group">
                                            <input
                                                name="name"
                                                value={userInfo.name}
                                                onChange={validateUserName}
                                                type="Name" className={`form-control ${ userInfoError.nameError.length > 0 ? 'is-invalid ' : ''} `} placeholder="Name"/>
                                            {userInfoError.nameError.length > 0 ? <small className="text-danger">{userInfoError.nameError}</small>: ''}

                                        </div>

                                        <div className="form-group">
                                            <input
                                                name="email"
                                                value={userInfo.email}
                                                onChange={validateUserEmail}
                                                type="email" className={`form-control ${ userInfoError.emailError.length > 0 ? 'is-invalid ' : ''} `} placeholder="Email"/>
                                               {userInfoError.emailError.length > 0 ? <small className="text-danger">{userInfoError.emailError}</small>: ''}
                                        </div>

                                        <div className="form-group">
                                            <input
                                                name="password"
                                                value={userInfo.password}
                                                onChange={validateUserPassword}
                                                type="password" className={`form-control ${ userInfoError.passwordError.length > 0 ? 'is-invalid ' : ''} `} placeholder="Password"/>
                                            {userInfoError.passwordError.length > 0 ? <small className="text-danger">{userInfoError.passwordError}</small>: ''}
                                        </div>

                                        <div>
                                            <input type="submit" className="btn btn-secondary btn-sm" value="Register"/>
                                        </div>
                                        <small>
                                             Already have an Account?  <Link to="/user/login">login</Link>
                                        </small>
                                    </form>
                                </div>
                                <div className="card-footer text-center">
                                    <img src={brand} alt="" width="150" height="30" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );

};
 export default Register;

