import React, {useState} from "react";
import {useDispatch} from "react-redux";
import * as eventAction from '../redux/events/events.action'
import {useNavigate} from "react-router-dom";

let Upload = () => {

    let dispatch = useDispatch();
    let navigate =useNavigate()

    let [event , setEvent] = useState({
        name : '',
        image : '',
        type : '',
        date : '',
        price : '',
        info : ''
    })
    let uploadEvent = (e) => {
        setEvent({
            ...event,
            [e.target.name] : e.target.value
        });
    }

    let submitEvent = (e) => {
        e.preventDefault()
        dispatch(eventAction.uploadEventAction(event ,navigate))
    }

    return (
        <React.Fragment>
            <section>
                {/*<pre>{JSON.stringify(event)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-teal"> <i className="fa fa-file-upload"/>Upload Event</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi odio quae sit suscipit ut voluptas. Beatae dicta dolore doloremque et illo ipsum laboriosam nihil, nobis porro vitae. Quaerat, vero?</p>
                    </div>
                </div>
            </div>
        </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form action="" onSubmit={submitEvent}>
                               <div className="form-group">
                                   <input
                                       name="name"
                                       onChange={uploadEvent}
                                       type="text" className="form-control" placeholder="Name" required/>
                               </div>
                                <div className="form-group">
                                    <input
                                        name="image"
                                        onChange={uploadEvent}
                                        type="text" className="form-control" placeholder="image" required />
                                </div>

                                <div className="form-group">
                                    <select className="form-control"
                                            name="type"
                                            onChange={uploadEvent}
                                            required
                                    >
                                        <option value="">Event Type</option>
                                        <option value="FREE">Free</option>
                                        <option value="PRO">Pro</option>
                                    </select>
                                </div>



                                <div className="form-group">
                                    <input
                                        name="date"
                                        onChange={uploadEvent}
                                        type="date" className="form-control" placeholder="Date" required/>
                                </div>

                                <div className="form-group">
                                    <input
                                        name="price"
                                        onChange={uploadEvent}
                                        type="number" className="form-control" placeholder="Price" required/>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="info"
                                        onChange={uploadEvent}
                                        rows="4" className="form-control" placeholder="About Event" required/>
                                </div>


                                <div>
                                    <input type="submit" className="btn btn-teal btn-sm" value="Upload"/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );

};
 export default Upload;

