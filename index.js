// Write your code here!
async function fetchFunction() {
	try {
		const site = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await site.json();
		displayPosts(data);
	} catch (error) {
		console.error("Error fetching posts:", error);
	}
}

function displayPosts(data) {
	const postList = document.querySelector("#post-list");
	data.forEach((book) => {
		const container = document.createElement("li"); //make container for each book
		const titleDoc = document.createElement("h1");
		titleDoc.textContent = book.title; //make title in html element for book
		const bodyDoc = document.createElement("p");
		bodyDoc.textContent = book.body; //make body in html element for book
		container.append(titleDoc, bodyDoc); //place elements in container
		postList.append(container); //attach container to existing DOM
	});
}

document.addEventListener("DOMContentLoaded", () => {
	fetchFunction();
});
