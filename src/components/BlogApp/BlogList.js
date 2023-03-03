// Solution
import { useState } from "react";

const INITIAL_BLOGS = [
	{
		title: "some title",
		body: "lnjgrkeghke,vgr,vbwfve,wjhm",
	},
	{
		title: "Another Title",
		body: "lnjgrkeghke,vgr,vbwfve,wjhm",
	},
];

function BlogList({ blogs }) {
	// Takes the blog objects above and sets them as the initial blogs rendered on the site.
	const [selectedBlog, setSelectedBlog] = useState();

	// This function will iterate through the blog objects and generate html for each one based on their id
	const blogTitlesHTML = blogs.map((blog) => (
		<div key={blog.title}>
			<button
				className="btn btn-link"
				type="button"
				onClick={() => setSelectedBlog(blog)}
			></button>
			<h2>{blog.title}</h2>
			<p>{blog.body}</p>
		</div>
	));

	return (
		<div className="row">
			<aside className="col-md-4">{blogTitlesHTML}</aside>
		</div>
	);
}

export default BlogList;
