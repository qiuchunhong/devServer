import lookup from './lookup.js';

export default function renderTemplate(tokens, data) {
	let resultStr = '';
	for (let i = 0; i < tokens.length; i++) {
		let token = tokens[i];
		if (token[0] == 'text') {
			resultStr += token[1];
		} else if (token[0] == 'name') {
			resultStr += lookup(data, token[1]);
		} else if (token[0] == '#') {
			resultStr += parseArray(token, data);
		}
	}
	return resultStr;
}

/*	
	parseArray 处理数组，for循环
	递归调用renderTemplate，调用次数为data数据的长度
*/
function parseArray(token, data) {
	// v就是要循环的数组
	let v = lookup(data, token[1]);
	let resultStr = '';
	for (let i = 0; i < v.length; i++) {
		resultStr += renderTemplate(token[2], {
			...v[i],
			'.': v[i]
		});
	}
	return resultStr;
}
