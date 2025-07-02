import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListaNoticias from './ListaNoticias';
import { useState } from 'react';
const Formulario = () => {
  const [categoria,setcategoria]=useState("0")
   const [pais,setpais]=useState("0")
    return (
      <>
        <div className="container  mt-4 py-2 px-3 py-4 pt-5 borde">
            <Form>
             <Form.Group as={Row} className="mb-3" controlId="labelcategoria">
        <Form.Label column sm="2">
          Buscar por categoria:
        </Form.Label>
        <Col sm="10">
          <Form.Select aria-label="Default select example" onChange={(e)=> setcategoria(e.target.value)}>
      <option value="0">noticias sobre:</option>
      <option value="1"> apple</option>
      <option value="2"> tesla</option> 
      <option value="3"> negocios en eeuu</option>
      <option value="4"> wall street</option>   </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="labelcategoria">
        <Form.Label column sm="2">
          Buscar por pais:
        </Form.Label>
        <Col sm="10">
          <Form.Select aria-label="Default select example" onChange={(e)=> setpais(e.target.value)}>
      <option value="0">noticias de:</option>
      <option value="1"> argentina</option>
      <option value="2"> chile</option> 
      <option value="3"> peru</option>
      <option value="4"> eeuu</option>   </Form.Select>
        </Col>
      </Form.Group>
    </Form>
        </div>
        <ListaNoticias categoria={categoria} pais={pais} />
        </>
    );
};

export default Formulario;