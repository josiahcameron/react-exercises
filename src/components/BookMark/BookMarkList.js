import { useState } from "react";
import BookMarkForm from "./BookMarkForm";

const INITIAL_DATA = [
	{
		id: 1,
		url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",
		title: "The Input (Form Input) element",
		tag: "HTML",
	},
	{
		id: 2,
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
		title: "Array.prototype.push()",
		tag: "JS",
	},
	{
		id: 3,
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString",
		title: "Array.prototype.toString()",
		tag: "JS",
	},
];

function BookmarkList() {
	// Sets our initial bookmarks to the objects listed in the INITIAL_DATA array

	const [bookmarks, setBookmarks] = useState(INITIAL_DATA);
	const [filter, setFilter] = useState(null);

	const tags = [
		...new Set(bookmarks.map((bookmark) => bookmark.tag.toLowerCase())),
	];

	//   The tags are the users options to click in order to decide on what to to render
	const tagsHTML = tags.map((tag) => (
		<button
			key={tag}
			className="btn btn-link"
			type="button"
			onClick={() => setFilter(tag)}
		>
			{tag.toUpperCase()}
		</button>
	));

	// Generates a filtered array based on what the user clicks and renders html for those bookmarks. If filter is null(falsey), the full bookmark array will get rendered
	const bookmarksHTML = bookmarks
		.filter((bookmark) =>
			filter ? bookmark.tag.toLowerCase() === filter : bookmark
		)
		.map((bookmark) => (
			<div key={bookmark.title}>
				<a href={bookmark.url}>
					<span>{bookmark.title}</span>
				</a>
			</div>
		));

	return (
		<div>
			<header>
				<button
					className="btn btn-link"
					type="button"
					//   If this button gets clicked, the filter is set to null so all bookmarks are shown
					onClick={() => setFilter(null)}
				>
					ALL
				</button>
				{tagsHTML}
			</header>
			<BookMarkForm bookmarks={bookmarks} setBookmarks={setBookmarks} />
			{bookmarksHTML}
		</div>
	);
}

export default BookmarkList;
