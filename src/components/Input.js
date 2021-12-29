import styled from "styled-components";
import { useField } from "formik";

//se crea un componente de control para poder manejar los inputs y se hace con un div para que automaticamente separe los elementos 
const Control = styled.div`
    margin-bottom:20px;
`

const Label = styled.label`
    color:#000;
    display:block;
    margin-botton:5px;
`
const MyInput = styled.input`
    outline:none;
    padding:8px;
    border:solid 1px #b1b3b5;
    border-radius: 4px;
    width:100%;
    margin-button:5px;
`
const ErrorMesagges = styled.div`
    color:#f00;
`

const Input  = ({label,...props}) =>{
    //para poder sacar las propieades del objeto field usamos useField

    const [field,meta] = useField(props)

    return(
        <Control>
            <Label>{label}</Label>
            <MyInput {...field} {...props } />
            {meta.touched && meta.error ? (
                <ErrorMesagges>{meta.error}</ErrorMesagges>
            ) : null }
        </Control>
    )
} 

export default Input
