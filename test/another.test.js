const prompts = require("prompts");
const Another = require("../steps/another");

jest.mock("prompts");

describe("testing another.js", () => {
	beforeEach(() => {
		prompts.mockReturnValue({ another: 'mock-another' });
	});

	test('Should ask a question', async () => {
		expect(prompts).not.toHaveBeenCalled();
		await Another();
		expect(prompts).toHaveBeenCalledTimes(1);
		expect(prompts).toHaveBeenCalledWith({
			type:'confirm',
			name:'another',
			message:'Would you like to search for another book?',
			initial: true
		});
	});

	test('Should return value from prompts', async () => {
		const returnValue = await Another();
		expect(returnValue).toBe('mock-another');
	});
});