# React + TypeScript + Vite

## 组件

组件：**应用程序中可以复用的 UI 元素**

React 组件是一段可以使用标签进行扩展的 js 函数

React **组件的名称必须大写**

标签和 return 不再一行，则必须使**用括号包裹**。

```tsx
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
```

```tsx
return (
  // 标签与 return 关键字不在同一行，需要使用括号包裹
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
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

默认导入：`import Button from './Button'` **不需要大括号**

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
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}
```

使用大括号传递 js 变量：

```jsx
export default function App() {
  const src = "https://i.imgur.com/MK3eW3As.jpg";
  const alt = "Katherine Johnson";
  return <img className="avatar" src={src} alt={alt} />;
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
function Avatar({ person, size }) {
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

**对象解构使用 `{}`, 数组解构使用 `[]`**

给 props 设置默认值, 默认值仅在没有传递该 props 或该 `props=undefined` 时生效。

```jsx
function Avatar({ person, size = 50 }) {
  // ...
}
```

展开语法： `...props`

一个组件可能会随着时间的推移收到不同的 props。**props 是不可变的,每次渲染都会收到新版本的 props，不要尝试“更改props”**。

需要交互性是，可以使用`setState` 来更新组件的状态。

## 条件渲染

if，有选择的返回 jsx 表达式

```jsx
let itemContent = <span>name</span>;
if (isPacked) {
  // itemContent = name + '✅✅✅';
  itemContent = <del>{name + "✅✅✅"}</del>;
}
return <li className="item">{itemContent}</li>;
```

三元运算符， 简化 if 判断

```jsx
// return isPacked
// ? null // <li className="item">{name} ✅</li>
// : <li className="item">{name}</li>;
return (
  <li className="item">
    {
      // (isPacked ? name + '✅' : name)
      isPacked ? <del>{name + "✅"}</del> : name
    }
  </li>
);
```

&& 运算符，简化三元表达式， && 运算符左侧为 false 时，不会渲染右侧表达式。

```jsx
return (
  <li className="item">
    {name} {isPacked && "✅✅"}
  </li>
);
```

**切勿将数字放在 && 左侧**

## 渲染列表

```jsx
const listItems = people.map((person) => <li key={Math.random()}>{person}</li>);
return <ul>{listItems}</ul>;
```

**箭头函数的用法：**

1. 箭头函数后面跟着小括号 `()` 时，隐式

```jsx
const listItems = chemists.map(
  (person) => <li>...</li>, // 隐式地返回！
);
```

2. 箭头函数后面跟着大括号 `{}` 时，必须使用 `return` 语句来返回值。

```jsx
const listItems = chemists.map((person) => {
  // 花括号， 块函数体
  return <li>...</li>;
});
```

**用 key 保持列表项的顺序**

Warning: Each child in a list should have a unique “key” prop.

使用 `key` 属性来标识每个列表项的唯一性，`key` 只在 React 内部使用，不会传递给组件。

```jsx
<li key={person.id}>...</li>
```

> 直接放在 map() 方法里的 JSX 元素一般都需要指定 key 值！

Fragment 标签, 用于包裹多个元素而不添加额外的 DOM 元素。

使用 Fragment 语法（通常写作 <> </>）来包裹 JSX 节点可以避免引入额外的 <div> 元素！

```jsx
import { Fragment } from "react";

// ...

const listItems = people.map((person) => (
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
));
```

key 需要满足的条件

- key 值在兄弟节点之间必须是唯一的。
- key 值不能改变。

不要把数组的索引下标和 `Math.random()` 作为 key 值。 否则会是组件渲染时，使得所有的组件和 DOM 元素每次都要重新创建。有性能问题。

## 保持组件纯粹

纯函数

- 只负责自己的任务
- 输入相同，则输出相同

React 假设你编写的所有组件都是纯函数，即你编写的 React 组件必须总是返回相同的 JSX。

- props ，数据在传递给子组件之前就应该修改
- state ，通过 useState 或 useReducer 来处理数据
- context ，通过 useContext 来处理数据

![](https://minio.wangzhy.com/picgo/202508041715921.png)

在 React 中，你可以在渲染时读取三种输入：props，state 和 context。你应该始终将这些输入视为只读。

**你永远不应该改变预先存在的变量或对象。** 换个说法就是，如果数据有变化，应该在通过组件的 props 进行传递之前就进行处理,
或者通过 useState 或 useReducer 来处理。

在严格模式下开发时，它将**会调用每个组件函数两次**。通过重复调用组件函数，严格模式有助于找到违反这些规则的组件。

**事件处理程序无需是纯函数。** 即，可以把数据的变化逻辑放在事件处理函数中。

还可以调用组件中的 useEffect 方法将其附加到返回的 JSX 中（**最后的手段**）。

渲染随时可能发生，因此组件不应依赖于彼此的渲染顺序。

## 将 UI 视为树

组件会出现嵌套

![](https://minio.wangzhy.com/picgo/202508041724585.png)

![](https://minio.wangzhy.com/picgo/202508041727708.png)

![](https://minio.wangzhy.com/picgo/202508041727843.png)

> 尽管渲染树可能在不同的渲染过程中有所不同，但通常这些树有助于识别 React
> 应用程序中的顶级和叶子组件。顶级组件是离根组件最近的组件，它们影响其下所有组件的渲染性能，
> 通常包含最多复杂性。叶子组件位于树的底部，没有子组件，通常会频繁重新渲染。

## 响应事件

React 可以在 jsx 中添加 `事件处理函数`。

事件处理函数

- 通常在组件内部定义
- 名称以 `handle` 开头，后面跟着事件名称。 如 `handleClick`，`handleChange`， `handleMouseEnter` 等

传递事件处理函数的三个方法

1. 在组件内部定义 handle 函数
2. 在 html 标签上直接定义事件处理函数（**内联的事件处理函数**）
3. 在 html 标签上通过**箭头函数**
   定义事件处理函数 [https://zh.javascript.info/arrow-functions-basics](https://zh.javascript.info/arrow-functions-basics)

**传递给事件处理函数的函数应直接传递，而非调用。**， 即 `onClick={handleClick}` 而不是 ~~`onClick={handleClick()}`~~。

箭头函数

- `let func = (arg1, arg2, ..., argN) => expression;`
- 如果我们只有一个参数，还可以省略掉参数外的圆括号，使代码更短。 `let func = arg => expression;`
- 如果没有参数，括号则是空的（但括号必须保留）： `let func = () => expression;`
- 箭头函数可以像函数表达式一样使用。

因为事件处理函数在组件内部定义的，因此，它们可以访问到 props 。

也可以将事件处理函数作为 props 传递给子组件。（子组件通常会包含样式，但是不会指定行为。）

内置组件（指的是 html 标签） 只支持浏览器事件，可以将事件处理函数通过 props 传递给子组件来实现自定义事件。

下面的代码就给 Button 添加了一个 `onSmash` 事件处理函数，点击按钮时会触发该函数。

```jsx
function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert("正在播放！")}>播放电影</Button>
      <Button onSmash={() => alert("正在上传！")}>上传图片</Button>
    </div>
  );
}
```

在 React 中所有事件都会传播，除了 onScroll，它仅适用于你附加到的 JSX 标签。

使用 `e.stopPropagation()` 来阻止事件传播。阻止触发绑定在外层标签上的事件处理函数。

使用 `e.preventDefault()` 来阻止默认行为。阻止少数事件的默认浏览器行为。

从子组件显式调用事件处理函数 prop 是事件传播的另一种优秀替代方案。

```jsx
function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        // 显式调用事件处理函数
        onClick();
      }}
    >
      {children}
    </button>
  );
}
```
