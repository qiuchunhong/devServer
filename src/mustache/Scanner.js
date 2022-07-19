export default class Scanner {
	constructor(templateStr) {
		this.templateStr = templateStr;
		// 指针
		this.pos = 0;
		// 尾巴
		this.tail = templateStr
	}

	// 功能弱，就是走过指定内容，没有返回值
	scan(tag) {
		if (this.tail.indexOf(tag) == 0) {
			// 指针向后移tag的长度
			this.pos += tag.length;
			// 小尾巴也后移tag
			this.tail = this.templateStr.substring(this.pos);
		}
	}

	// 让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
	scanUtil(stopTag) {
		// <h1>hello，我是{{name}},我的年龄是{{age}}岁。
		let pos_backup = this.pos;
		// 指针没到头 && 不以 stopTag开头
		while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
			this.pos++;
			this.tail = this.templateStr.substring(this.pos);
		}
		return this.templateStr.substring(pos_backup, this.pos);
	}

	// 指针是否已经到头，返回布尔值。end of string
	eos() {
		return this.pos >= this.templateStr.length;
	}
}
