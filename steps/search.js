const prompts = require ("prompts");

async function Search() { 
	return await prompts({
		type: 'text',
		name: 'meaning',
		message: 'Please type the name of the book...',
		initial: 'eg: The Great Gatsby'
	  });
}

module.exports = Search;