const prompts = require ("prompts");


// Confirmation prompt that asks the user if they would like to
// add another book

async function Another() {
	const choice = await prompts({
		type:'confirm',
		name:'another',
		message:'Would you like to search for another book?',
		initial: true
	});
	
	return choice.another;
}

module.exports = Another;