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

const handleSubmit = () =>{

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
