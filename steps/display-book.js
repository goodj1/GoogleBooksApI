/*
	This is a re-used utility function that renders the 
	output of the book object from google in two places
	
	We put it here so we can use it elsewhere multiple times.
	
	This means if we update it in the future, it will cascade
	throughout the project
	
	Re-usuabale, non-repetitive code.
*/

module.exports = function(book, key) {
	console.log('');
	console.log(key, book.volumeInfo.title);
	console.log('\t', 'Authors:', book.volumeInfo.authors.join(', '));
	console.log('\t', 'Publisher:', book.volumeInfo.publisher);
}

module.exports;