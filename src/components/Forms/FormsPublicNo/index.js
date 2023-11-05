import Form from 'react-bootstrap/Form';

function FormsPublicNotices({id, title, text}) {
  return (
    <Form>

      <Form.Group className="mb-3" controlId={id}>
        <Form.Label>{title}</Form.Label>
        <Form.Control type={text} placeholder={text} />
      </Form.Group> 
    </Form>


  );
}

export default FormsPublicNotices;