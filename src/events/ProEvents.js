import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {eventReducerFeatureKey} from "../redux/events/events.reducer";
import * as eventAction from '../redux/events/events.action'
import Spinner from "../root/util/Spin";

let ProEvents = () => {
    let dispatch = useDispatch();
    let ProEvents = useSelector((state) => {
        return state[eventReducerFeatureKey]
    });
    let {loading ,event} = ProEvents;

    useEffect(() => {
        dispatch(eventAction.getProEventsAction())
    } , [])

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">Pro Events</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi odio quae sit suscipit ut voluptas. Beatae dicta dolore doloremque et illo ipsum laboriosam nihil, nobis porro vitae. Quaerat, vero?</p>
                            <p className="h5">Total Available : {event.length}</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                !loading ? <section >
                    {
                        event.length  > 0 ?
                            <React.Fragment>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            {
                                                event.map((event) => {
                                                    let {name , image , type, price, info , date} = event;
                                                    return(
                                                        <div className="card mb-5" key={event._id}>
                                                            <img src={image} alt=""/>
                                                            <div className="card-body bg-light ">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <h5>{name}</h5>
                                                                        <small>Date :{date}</small><br/>
                                                                        <small className="h5">Price : &#8377; {price}</small><br/>
                                                                        <small className="h6">{type}</small>

                                                                    </div>
                                                                    <div className="col">
                                                                        <button className="btn btn-teal btn-lg text-white">Book Now</button>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <small className="h5" >About : <small>{info}</small> </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                            : null
                    }
                </section> : <Spinner/>
            }
        </React.Fragment>
    );

};
 export default ProEvents;

