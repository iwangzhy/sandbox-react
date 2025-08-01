# React + TypeScript + Vite

## 组件

组件：**应用程序中可以复用的 UI 元素**

React 组件是一段可以使用标签进行扩展的 js 函数

React **组件的名称必须大写**

标签和 return 不再一行，则必须使**用括号包裹**。

```tsx
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>;
```

```tsx
return ( // 标签与 return 关键字不在同一行，需要使用括号包裹
    <div>
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
    </div>
);
```

组件可以渲染其他组件，但请**不要嵌套他们的定义**。（在组件里面定义组件）

子组件需要父组件的数据时，可以通过 **props** 进行传递。

Next.js 框架的根组件定义在 `pages/index.js` 文件中。

## 组件的导入导出

默认导出：`export default function Button() {}`

具名导出：`export function Button() {}`

**一个文件中，有且仅有一个默认导出，0或多个具名导出**

默认导入：`import Button from './Button'`  **不需要大括号**

具名导入：`import { Button } from './Button'` **需要大括号，按需导入**

**无论是 `from './Button.js'` 还是 `from './Button'` ，在 react 中都能正常使用**

同一文件中，有且仅有一个默认导出，但可以有多个具名导出！

## 使用 jsx 书写标签

在 react 中，渲染逻辑和标签共同存在于一个地方，**组件**

![](https://minio.wangzhy.com/picgo/202508011707164.png)

将按钮的渲染逻辑与 html 标签放在同一个地方可以保证在修改代码的时候，能够使两者的逻辑保持一致。

JSX 规则：

1. 只能返回一个根元素，如果一个组件包含多个元素，需要用一个父标签把它们包裹起来。如 `<div></div>` 或者 `<> </>`（空标签）
2. 标签必须闭合。 `<img />` `<li></li>`
3. 使用驼峰式命名法给大部分属性命名。 `className` `onClick` `strokeWidth`
   等 [https://zh-hans.react. dev/reference/react-dom/components/common](https://zh-hans.react.dev/reference/react-dom/components/common)

JSX 转化器： [https://transform.tools/html-to-jsx](https://transform.tools/html-to-jsx)

## 在 jsx 中使用 JavaScript

在 jsx 中使用 js 需要用到大括号 `{}` ,将 js 代码包裹起来。

使用引号传递字符串 `"abc`.

```jsx
export default function App() {
    return <img className="avatar" src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
}
```

使用大括号传递 js 变量：

```jsx
export default function App() {
    const src = "https://i.imgur.com/MK3eW3As.jpg";
    const alt = "Katherine Johnson";
    return <img className="avatar" src={src} alt={alt}/>;
}
```

可以使用大括号的地方

1. JSX 标签内的文本 `<h1>{title}</h1>`
2. `=` 符号后的属性。 `<img src={src} alt={alt}/>`

双大括号 `{{}}` 用于传递对象，把内层大括号看作是定义一个 object更容易理解。 `{{ style: { color: 'red' } }}`

**内联 style 样式使用驼峰命名** `<ul style={{ backgroundColor: 'black' }}>`

## 将 Props 传递给组件

React 组件通过使用 props 来互相通信。

给子组件传递 props (写法类似于 html 标签的属性)

```jsx
export default function Profile() {
    return (
        <Avatar
            person={{name: 'xxx', imageId: 'id'}}
            {/*这里使用大括号的原因是， size 是一个数值型，如果使用双引号，则表示size 是一个字符串*/}
            size={100}
        />
    );
}
```

在子组件中读取 props

```jsx
// 这里使用到了解构语法
// 解构语法将数组中的值或对象的属性取出，赋值给其他变量
// const arr = [1, 2, 3];
// const [a, b, c] = arr; // a = 1, b = 2, c = 3 // 数组解构
// const obj = {x: 1, y: 2};
// const {x, y} = obj; // x = 1, y = 2 // 对象解构
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring#Unpacking_fields_from_objects_passed_as_a_function_parameter
function Avatar({person, size}) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}
```

给 props 设置默认值

```jsx
function Avatar({person, size = 50}) {
    // ...
}
```

展开语法： `...props`

