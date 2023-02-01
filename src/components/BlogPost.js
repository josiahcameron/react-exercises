import { useState } from "react";

const INITIAL_POST = [
  {
    title: "Why I Love Chilli Dogs",
    body: "Are creatures of the cosmos. Citizens of distant epochs Flatland tendrils of gossamer clouds ship of the imagination Jean-FranÃƒÂ§ois Champollion hundreds of thousands at the edge of forever Orion’s sword decipherment muse about, cosmos from which we spring consciousness citizens of distant epochs Orion’s sword another world Vangelis star stuff harvesting star light explorations finite but unbounded concept of the number one intelligent beings tingling of the spine.",
  },
];

function Blog({}) {
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
    // setTitle("");
    // setBody("");
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
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Save Post</button>
    </form>
  );
}

export default Blog;
