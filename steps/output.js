const displayBook = require('./display-book.js');

function Output(readingList) {
	// This clears the STDOUT display
	console.clear();
	console.log(`Your reading list contains: ${readingList.length} books`);
	
	// This calls displayBook function for each book in the reading list
	readingList.forEach(displayBook);
	
}

module.exports = Output;