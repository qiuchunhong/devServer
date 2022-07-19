import parseTemplateToTokens from './parseTemplateToTokens';
import renderTemplate from './renderTemplate';

import lookup from './lookup.js'

window.SSG_TemplateEngine = {
	render(templateStr, data) {
		// 将templateStr变为tokens数组
		var tokens = parseTemplateToTokens(templateStr);
		// 将tokens数组变为dom字符串
		var domStr = renderTemplate(tokens, data);
		return domStr;
	}
}
