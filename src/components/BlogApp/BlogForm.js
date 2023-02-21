import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";


// addBlog function gets passed down through props from app.js
function BlogForm({ addBlog }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
  
    // When submit is pressed, this function is run which passes through the values set by the event to create a new blog. 
    // That new blog is then placed into the blogs array with the addBlog function. The title and body states are then emptied out by setting them to an empty string.
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const blog = {
        title,
        body,
      };
  
      addBlog(blog);
      setTitle("");
      setBody("");
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  export default BlogForm;