## 计算规则

 ** 动态改变rem，基于iphone7 宽度375 1rem = 5px*

 ** 比如设计稿为2倍图 宽度750px 则 设计稿元素宽度/10 = rem*



## 引入方法

```js
1: 
    <script src="./static/js/rem.js(引入路径)" type="module"></script>
	note: type="module"
2:
	import rem from '../static/js/rem(引入路径)'
3: 
	var rem = require('../static/js/rem')
    note: 注意引入路径
```

