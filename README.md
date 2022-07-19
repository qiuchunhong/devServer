# devServer

## 源码系列-mustache 模板引擎

简易版实现过程：
- 将模板字符串编译为`tokens`
- `tokens`结合`data` 解析成`domstr`渲染到页面上
### 案例一
```
模板字符串:<h1>我买了一个{{thing}}，好{{mood}}啊</h1>
tokens:
[ 
	["text", "<h1>我买了一个"],
	["name", "thing"],
	["text", "好"],
	["name", "mood"],
	["text", "啊</h1>"],
]
数据：
{
	thing: '华为手机',
	mood: '开心' 
}
解析为：<h1>我买了一个华为手机，好开心</h1>
```
### 案例二
```
模板字符串:
<div>
    <ul>
		{{#students}}
        <li>
			学生{{name}}的爱好是
            <ol>
                {{#hobbies}}
                <li>{{.}}</li>
                {{/hobbies}}
            </ol>
        </li>
        {{/students}}
    </ul>
</div>
tokens:
[
	["text", "<div><ul>"],
	["#", "students", [
		["text", "<li>学生"],
		["name", "name"],
		["text", "的爱好是<ol>"],
		["#", "hobbies", [
			["text", "<li>"],
			["name", "."],
			["text", "</li>"],
		]],
		["text", "</ol></li>"],
	]],
	["text", "</ul></div>"]
]
var data = {
	students: [{
			'name': '小明',
			'hobbies': ['编程', '游泳']
		},
		{
			'name': '小红',
			'hobbies': ['看书', '弹琴', '画画']
		},
		{
			'name': '小强',
			'hobbies': ['锻炼']
		}
	]
};
解析为：
<div>
    <ul>
        <li class="myli">
			学生小明的爱好是
            <ol>
                <li>编程</li>
                <li>游泳</li>
            </ol>
        </li>
        <li class="myli">
			学生小红的爱好是
            <ol>
                <li>看书</li>
                <li>弹琴</li>
                <li>画画</li>
            </ol>
        </li>
        <li class="myli">
			学生小强的爱好是
            <ol>
                <li>锻炼</li>
            </ol>
        </li>
    </ul>
</div>
```