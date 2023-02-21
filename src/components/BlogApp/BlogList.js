// Solution
import { useState } from "react";

const INITIAL_BLOGS = [
  {
    title: "some title",
    body: "lnjgrkeghke,vgr,vbwfve,wjhm",
  },
  {
    title: "Another Title",
    body: "lnjgrkeghke,vgr,vbwfve,wjhm"
  }
];

function BlogList() {
    // Takes the blog objects above and sets them as the initial blogs rendered on the site.
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [selectedBlog, setSelectedBlog] = useState();

    // This function will iterate through the blog objects and generate html for each one based on their id  
  const blogTitlesHTML = blogs.map((blog) => (
    <button
      key={blog.id}
      className="btn btn-link"
      type="button"
      onClick={() => setSelectedBlog(blog)}
    >
      <h2>{blog.title}</h2>
    </button>))

  return (
    <div className="row">
      <aside className="col-md-4">{blogTitlesHTML}</aside>
    </div>
  );
}

export default BlogList;
