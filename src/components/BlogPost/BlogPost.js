import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const INITIAL_POST = [
  {
    title: "",
    body: "",
  },
];

function BlogPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // This takes the data from the submission as an argument
  const [posts, setPosts] = useState(INITIAL_POST);
  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // The new post takes the title and body set by the input
    const newPost = {
      title,
      body,
    };
    addPost(newPost);
    setTitle("");
    setBody("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="body">
        <Form.Label>Blog Post</Form.Label>
        <Form.Control
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save Post
      </Button>
    </Form>
  );
}
export default BlogPost;
