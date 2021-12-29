import styled from "styled-components";
import { useState } from "react";
import { Formik,Form } from "formik";
import * as Yup from 'yup'; 
import Input from './components/Input';
import Button from './components/Button';
import Balance from './components/Balance';

const Container = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center;
  height: 100%;
  
`
const Section = styled.section`
  background-color:#eee;
  border-top: solid 2px palevioletred;
  padding: 20px 25px;
  width: 500px;
  box-shadow:0px 2px 3px rgb(0,0,0,0.3)
`
// creo la funcion que calcula mi total
const compoundInterets = (deposito,contribution,years,rate) =>{
  //variable que va a contener el dinero total
  let total = deposito
  for( let i=0; i < years ; i++){
      total = ( total + contribution ) * ( rate + 1)

  }
  return Math.round(total);

}


const formatter = new Intl.NumberFormat('en-US',{
  style:'currency',
  currency:'USD',
  minimumFractionDigits:2,
  maximumFractionDigits:2,
})

function App() {

//para poder mostrar el valance tengo que usar useState

const[balance,setBalance] = useState("")

const handleSubmit = ({deposit,contribution,years,rate}) =>{
  //como los valores vienen como texto tengo que castearlo a number
    const val = compoundInterets(Number(deposit),Number(contribution),Number(years),Number(rate))
    setBalance(formatter.format(val))
    
}


  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit:"",
            contribution:"",
            years:"",
            rate:"",
          }}
          onSubmit={handleSubmit}
          // propiedad propia de yup
          //yup genera un objeto que se validan segun un esquema de datos en este caso las propiedades del formulario
          //con la funcion object Yup toma un objeto que revisa las propiedades que debe tener para pasar la validacion
          //en este caos Yup.number() valida que sea un numero que retorna un objeto y puedo concatenar propiedades
          //type error concatenado a la propiedad muestra el mensaje de error 
          //min muestra el valor minimo del campo y max el valor maximo 
          // en caso de querer personalizar el mensaje de error se lo pasa como argumento a la funcion que genera la validacion 
          

          validationSchema={Yup.object({
            deposit: Yup.number().required('obligatorio').typeError("El dato ingresado debe ser un numero"),
            contribution: Yup.number().required('obligatorio').typeError("El dato ingresado debe ser un numero"),
            years: Yup.number().required('obligatorio').typeError("El dato ingresado debe ser un numero"),
            rate: Yup.number().required('obligatorio').typeError("El dato ingresado debe ser un numero").min(0,"El valor debe ser positivo ").max(1,"El valor debe ser menor que uno "),
          })}
        >
          <Form>
            <Input name="deposit" label="Deposito Inicial" />
            <Input name="contribution" label="Contribucion Anual" />
            <Input name="years" label="Años" />
            <Input name="rate" label="Interes Estimado" />
            <Button type="submit">Calcular</Button>
          </Form>
        </Formik>
        {balance !== "" ? <Balance>Balance Final: {balance} </Balance> : null}
      </Section>
    </Container>
  );
}

export default App;
