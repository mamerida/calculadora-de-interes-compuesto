import styled from "styled-components";
import { Formik,Form } from "formik";
import Input from './components/Input';

const Container = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center;
  heigth: 100%;
  
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
          </Form>

        </Formik>
      </Section>
    </Container>
  );
}

export default App;
