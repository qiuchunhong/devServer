import Scanner from './Scanner.js'
import nestTokens from "./nestTokens.js"


export default function parseTemplateToTokens(templateStr) {
	// console.log(templateStr)
	let words;
	var scanner = new Scanner(templateStr);

	let tokens = []

	while (!scanner.eos()) {
		words = scanner.scanUtil('{{');
		if (words != '') {
			tokens.push(['text', words])
		}
		scanner.scan('{{')
		words = scanner.scanUtil('}}');
		if (words != '') {
			switch(words[0]){
				case '#':
					tokens.push(['#', words.substring(1)])
					break;
				case '/':
					tokens.push(['/', words.substring(1)])
					break;
				default:
					tokens.push(['name', words])
			}
		}
		scanner.scan('}}')
	}
	return nestTokens(tokens);
}
