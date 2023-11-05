import Form from 'react-bootstrap/Form';

function CheckBoxForm({id, title, text}) {
  return (
    <Form>

<Form.Group className="mb-3" controlId={id}>
        <Form.Check type="checkbox" label={title} />
      </Form.Group>
    </Form>

  );
}

export default CheckBoxForm;