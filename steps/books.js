const axios = require ("axios");

const apiURL = `https://www.googleapis.com/books/v1/volumes`;
const maxBooks = 5;

async function Books(searchTerm) { 
	const response = await axios.get(apiURL, {
		params: {
			q: searchTerm
		}
	});
	return response.data.items.slice(0,maxBooks);
}

module.exports = Books;