/*
	功能是在dataObj对象中寻找用连续点符号的keyName属性
	例如：
	let dataObj = {
		a: {
			b: {
				c: 123,
			}
		},
		e:'2323'
	}
	那么 lookup(dataObj,'a.b.c') 结果就是123
	lookup(dataObj, 'e') 结果2323
*/
export default function lookup(dataObj, keyName) {
	// 看看keyName 中有没有.这个符号a.b.c && keyName不能是单独的.
	if (keyName.indexOf('.') != -1 && keyName != '.') {
		// 设置一个临时变量，用于一层一层找
		let temp = dataObj;
		const keys = keyName.split('.');
		for (let i = 0; i < keys.length; i++) {
			temp = temp[keys[i]];
		}
		return temp;
	}
	// 没有点符号
	return dataObj[keyName]
}
