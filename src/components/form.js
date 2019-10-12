import React, {useState} from "react";

import Button from "./button";
import FormField from "./form-field";
import ErrorBox from "./error-box";



const Form = (props) => {


    const [formValid, setFormValid] = useState(undefined);

    const [formData, setFormData] = useState({
        fio: undefined,
        inn: undefined,
        birthDate: undefined
    });

    const [fieldsValid, setFieldsValid] = useState({
        fioValid: undefined,
        innValid: undefined,
        birthDateValid: undefined
    })
    

    const formHandler = async (e) => {
        e.preventDefault();

        setFormValid(true);
        props.setUserData(formData);
    }


    const handleInput = (e) => {
        setFormData({
            ...formData, 
            [e.target.name] : e.target.value
        })
    }

    const lengthHandlerForFIO = (e) => {
        if(e.target.value.length >= 3 && e.target.value.length <= 100){
            setFieldsValid({fioValid: true});
        } else {
            setFieldsValid({fioValid: false});
        }
    }

    const lengthHandlerForINN = (e) => {
        if(e.target.value.length == 10){
            setFieldsValid({innValid: true});
        } else {
            setFieldsValid({innValid: false});
        }
    }

    const lengthHandlerForBirthDate = (e) => {
        if(e.target.value.length == 10){
            setFieldsValid({birthDateValid: true});
        } else {
            setFieldsValid({birthDateValid: false});
        }
    }

    const renderErrorBoxForFIO = () => {
        if(fieldsValid.fioValid === false){
            return (
                <ErrorBox label="Длина 3 - 100 символов" />
            );
        }
    }

    const renderErrorBoxForINN = () => {
        if(fieldsValid.innValid === false){
            return (
                <ErrorBox label="Длина ровно 10 символов" />
            );
        }
    }

    const renderErrorBoxForBirthDate = () => {
        if(fieldsValid.birthDateValid === false){
            return (
                <ErrorBox label="Введите коректную дату" />
            );
        }
    }


    return(
        <form onSubmit={formHandler}>
            <FormField forElement="inputFIO" label="ФИО">
                <input type="text" className="form-control" id="inputFIO" minLength="3" maxLength="100" name="fio" value={formData.fio} onBlur={lengthHandlerForFIO} onChange={handleInput} />
                {renderErrorBoxForFIO()}
            </FormField>

            <FormField forElement="inputINN" label="ИНН">
                <input type="text" className="form-control" id="inputINN" minLength="10" maxLength="10" name="inn" value={formData.inn} onBlur={lengthHandlerForINN} onChange={handleInput} />
                {renderErrorBoxForINN()}
            </FormField>

            <FormField forElement="inputBirthdate" label="Дата рождения">
                <input type="date" className="form-control" id="inputBirthdate" required  minLength="3" name="birthDate" value={formData.birthDate} onBlur={lengthHandlerForBirthDate} onChange={handleInput} />
                {renderErrorBoxForBirthDate()}
            </FormField>

            <Button />
        </form>
    );
}

export default Form;