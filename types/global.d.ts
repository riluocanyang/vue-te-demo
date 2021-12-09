// 首先声明文件的文件名是有规范要求的, 必须以.d.ts结尾，推荐放在根目录下
// 声明变量使用关键字declare来表示声明其后面的全局变量的类型
// 声明文件就是给js代码补充类型标注. 这样在ts编译环境下就不会提示js文件"缺少类型"
declare type Recordable<T = any> = Record<string, T>
