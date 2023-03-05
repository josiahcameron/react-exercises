import { useState } from "react";
const INITIAL_BLOGS = [
	{
		id: 1,
		title: "some title",
		body: "lnjgrkeghke,vgr,vbwfve,wjhm",
	},
	{
		id: 2,
		title: "Another Title",
		body: "lnjgrkeghke,vgr,vbwfve,wjhm",
	},
];
function BlogList() {
	// Takes the blog objects above and sets them as the initial blogs rendered on the site.
	const [selectedBlog, setSelectedBlog] = useState();
	const [blogs] = useState(INITIAL_BLOGS);
	// This function will iterate through the blog objects and generate html for each one based on their id
	const blogTitlesHTML = blogs.map((blog) => (
		<li key={blog.id}>
			<button
				className="btn btn-link"
				type="button"
				onClick={() => setSelectedBlog(blog)}
			></button>
			<h2>{blog.title}</h2>
			<p>{blog.body}</p>
		</li>
	));

	return (
		<div className="row">
			<aside className="col-md-4">
				<ul>{blogTitlesHTML}</ul>
			</aside>
		</div>
	);
}

export default BlogList;
