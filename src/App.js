import styled from "styled-components";
import { Formik,Form } from "formik";
import Input from './components/Input';
import Button from './components/Button';

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


const handleSubmit = ({deposit,contribution,years,rate}) =>{
  //como los valores vienen como texto tengo que castearlo a number
    const val = compoundInterets(Number(deposit),Number(contribution),Number(years),Number(rate))
    console.log(val)
}
function App() {


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
        >
          <Form>
            <Input name="deposit" label="Deposito Inicial" />
            <Input name="contribution" label="Contribucion Anual" />
            <Input name="years" label="Años" />
            <Input name="rate" label="Interes Estimado" />
            <Button>Calcular</Button>
          </Form>

        </Formik>
      </Section>
    </Container>
  );
}

export default App;
