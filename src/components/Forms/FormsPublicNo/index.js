import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormsPublicNotices({title, text, textMuted, info, Check}) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{title}</Form.Label>
        <Form.Control type={text} placeholder={title} />
        <Form.Text className={textMuted}>
          {info}
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={Check} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    
    </Form>
  );
}

export default FormsPublicNotices;