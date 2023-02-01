import { useState } from "react";

function Blog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // This takes the data from the submission as an argument
  const handleSubmit = (e) => {
    e.preventDefault();

    // The new post takes the title and body set by the input
    const newPost = {
      title,
      body,
    };

    addPost(newPost);
    setTitle("");
    setCaption("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Blog Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="body">Type Away!</label>
      <input
        type="text"
        name="body"
        value={body}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit">Save Post</button>
    </form>
  );
}
