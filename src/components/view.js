import React, {useState} from "react";

import FormField from './form-field';

const View = (props) => {
    return  (
        <>
            <FormField forElement="resultFIO" label="ФИО">
                <input type="text" className="form-control" id="resultFIO" disabled name="fio" value={props.fio} />
            </FormField>

            <FormField forElement="resultINN" label="ИНН">
                <input type="text" className="form-control" id="resultINN" disabled name="inn" value={props.inn} />
            </FormField>

            <FormField forElement="resultBirthdate" label="Дата рождения">
                <input type="text" className="form-control" id="resultBirthdate" disabled  minLength="3" name="birthDate" value={props.birthDate} />
            </FormField>
        </>
    )
    
  }

export default View;