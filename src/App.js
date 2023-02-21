import "./App.css";
import { useState } from "react";
import BlogForm from './components/BlogApp/BlogForm';
import BlogList from './components/BlogApp/BlogList';
import UserList from './components/User/UserList';
import BookmarkList from "./components/BookMark/BookMarkList";

// import BlogList from "./components/BlogApp/BlogList";

function App() {
  // Set up the blog array to prepare it to be saved to state
  const [blogs, setBlogs] = useState([]);
  const [selection, setSelection] = useState("a");

  // This function will pass in the new blog and append it to the end of the spread array of blogs
  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  }
  
  return (
<div className="container mt-5">
      <header>
        <button
          className="btn btn-link"
          type="button"
          // When a button is clicked, a function is called to render the component associated with it
          onClick={() => setSelection("blogform")}
        >
          Create a Blog
        </button>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => setSelection("UserList")}
        >
          Contacts
        </button>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => setSelection("bloglist")}
        >
          Blogs
        </button>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => setSelection("bookmarks")}
        >
          Bookmarks
        </button>
      </header>
      {selection === "blogform" && <BlogForm addBlog={addBlog} />}
      {selection === "contactlist" && <UserList />}
      {selection === "bloglist" && <BlogList />}
      {selection === "bookmarks" && <BookmarkList />}
    </div>
  );
}

export default App;
