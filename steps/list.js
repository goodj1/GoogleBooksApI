const prompts = require('prompts');
const displayBook = require('./display-book.js');

async function List(availableBooks) {
    availableBooks.forEach(displayBook);

    async function promptBook() {
        const choice = await prompts({
            type: 'number',
            name: 'book',
            message: 'Please choose a book from above to add to your reading list'
        });
		
		if (!availableBooks[choice.book]) {
			console.error('That book was not listed, please try again.');
			return await promptBook();
		}

        return availableBooks[choice.book];
    }
	
	return await promptBook();
}

module.exports = List;