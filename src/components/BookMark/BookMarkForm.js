import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

// addBlog function gets passed down through props from app.js
function BookMarkForm({ bookmarks, setBookmarks }) {
	const [title, setTitle] = useState("");
	const [url, setUrl] = useState("");
	const [tag, setTag] = useState("");

	const addBookmark = (newBookmark) => {
		setBookmarks([...bookmarks, newBookmark]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const bookmark = {
			title,
			url,
			tag,
		};

		addBookmark(bookmark);
		setTitle("");
		setUrl("");
		setTag("");
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
				<Form.Label>URL</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter URL"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="body">
				<Form.Label>Body</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter tag"
					value={title}
					onChange={(e) => setTag(e.target.value)}
				/>
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default BookMarkForm;
