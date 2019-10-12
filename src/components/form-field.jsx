import React from 'react'

export default (props) => {


    return (
        <div className="form-group row">
            <label htmlFor={props.forElement} className="col-md-3 col-sm-12 col-form-label text-md-right">{props.label}</label>
            <div className="col-md-9 col-sm-12">
                {props.children}
            </div>
        </div>
    )


};





// const internalFormField = (props) => {
//     return (
//         <p>
//             I am named form field
//         </p>
//     )
// };


// export const FormField = internalFormField;

// export default FormField;