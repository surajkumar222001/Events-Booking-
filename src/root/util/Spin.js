import React from "react";
import loading2 from "../../assests/image/Loading_2.gif"

let Spinner = () => {

    return (
        <React.Fragment>
            {
                <img src={loading2} alt="" className="d-block m-auto"/>
            }
        </React.Fragment>
    );

};
 export default Spinner;

