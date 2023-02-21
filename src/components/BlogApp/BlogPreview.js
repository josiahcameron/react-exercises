
function BlogPreview({ selectedBlog }) {
    // Renders html to preview the selected blog's title and body
    return (
      <div className="col-md-8">
        <h2>{selectedBlog.title}</h2>
        <p>{selectedBlog.body}</p>
      </div>
    );
  }
  
  export default BlogPreview;