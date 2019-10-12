import React, {useState} from "react";

const ErrorBox = (props) => {

    return(
        <div className="alert alert-danger" role="alert">{props.label}</div>
    );
}

export default ErrorBox;