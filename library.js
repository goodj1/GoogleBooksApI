/*
	*Run this file to execute code*
	
	Requirements
	
	1. Prompt the user for a search term
	2. Load _5_ matching books from the search term 
		from google api and show these to the user
	3. Prompt the user to choose what book they would 
		like to add to their reading list
	4. Ask the user if they would like to add another 
		book or show the reading list.
		
		If another book, go to step 1.
		
		If reading list, go to step 5.
	5. Show the reading list and close the application
*/

const Search = require('./steps/search.js');
const Books = require('./steps/books.js');
const List = require('./steps/list.js');
const Another = require('./steps/another.js');
const Output = require('./steps/output.js');

const readingList = [];

async function browse() {
	// Acceptance critera 1
	const searchTerm = await Search();

	// Acceptance critera 2
	const availableBooks = await Books(searchTerm);

	// Acceptance critera 3
	const chosenBook = await List(availableBooks);
	// Puts the chosen book into an array
	readingList.push(chosenBook);
	
	// Acceptance critera 4
	if (await Another()) {
		await browse();
	}
};

(async () => {
	/*
		Browse is a recursive function that will call
		itself until the user selects no to adding books
	*/
	await browse();
	
	// Acceptance critera 5
	Output(readingList);
})();