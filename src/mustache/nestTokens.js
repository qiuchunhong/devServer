export default function nestTokens(tokens) {
	var nestedTokens = [];
	// 栈，用来暂存层次
	var sections = [];
	var collector = nestedTokens;

	for (let i = 0; i < tokens.length; i++) {
		let token = tokens[i];
		switch (token[0]) {
			case '#':
				sections.push(token);
				collector.push(token);
				collector = token[2] = [];
				break;
			case '/':
				sections.pop();
				collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens;
				break;
			default:
				collector.push(token)
		}
	}
	return nestedTokens
}
