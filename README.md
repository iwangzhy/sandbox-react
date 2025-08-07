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
export default function Profile () {
  return (
    <Avatar
      person={{ name: 'xxx', imageId: 'id' }}
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

- 自定义函数
- 在响应交互（点击、悬停、获得焦点等）时触发
- 通常在**组件内部定义**
- 名称以 `handle` 开头，后面跟着事件名称。 如 `handleClick`，`handleChange`， `handleMouseEnter` 等

传递事件处理函数的三个方法

1. 在组件内部定义 handle 函数
2. 在 html 标签上直接定义事件处理函数（**内联的事件处理函数**）
3. 在 html 标签上通过**箭头函数**
   定义事件处理函数 [https://zh.javascript.info/arrow-functions-basics](https://zh.javascript.info/arrow-functions-basics)

**传递给事件处理函数的函数应直接传递，而非调用。** 即 `onClick={handleClick}` 而不是 ~~`onClick={handleClick()}`~~。

箭头函数

- `let func = (arg1, arg2, ..., argN) => expression;`
- 如果我们只有一个参数，还可以省略掉参数外的圆括号，使代码更短。 `let func = arg => expression;`
- 如果没有参数，括号则是空的（但括号必须保留）： `let func = () => expression;`
- 箭头函数可以像函数表达式一样使用。

事件处理函数在组件内部定义的，因此，它们可以访问到 props 。

也可以将事件处理函数作为 props 传递给子组件(在父组件定义的子组件的事件处理函数)。（子组件通常会包含样式，但是不会指定行为。）

内置组件（指的是 html 标签） 只支持浏览器事件，可以将事件处理函数通过 props 传递给子组件来实现自定义事件。

**事件处理函数 props 应该以 on 开头**，如 onClick

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

使用 `e.stopPropagation()` 来**阻止事件传播**。阻止触发绑定在外层标签上的事件处理函数。

使用 `e.preventDefault()` 来**阻止默认行为**。阻止少数事件的默认浏览器行为。

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

## state：组件的记忆

组件需要记住某些东西，在 react 中，这些组件特有的记忆称为 state

为什么不使用局部变量？

1. 局部变量无法在多次渲染中持久保存。
2. 更改局部变量不会触发渲染。

`useState` hook 提供了两个功能

1. state 变量用于保存渲染间的数据
2. state setter 函数更新变量并触发 react 再次渲染组件

```jsx
const [index, setIndex] = useState(0); // useState 方法的参数就是 state 的初始值
```

index 是 state 变量(**会保存上次渲染的值**)，setIndex 是对于的 setter 函数
**可以更新 state 变量并触发 React 重新渲染组件**

hooks : 以 use 开头的函数, **只能在组件或自定义 Hook 的最顶层调用。**

hook 是特殊的函数,只在 react 渲染时有效.

如果同时修改 2 个 state 变量,那么最好将它们合并成一个 object 类型的 state 变量。

在同一组件的每次渲染中，Hooks
都依托于一个稳定的调用顺序。 [https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)

State 是隔离且私有的

如果你渲染同一个组件两次，每个副本都会有完全隔离的 state！

## 渲染和提交

组件在显示到屏幕之前，必须被 react 渲染。

1. 触发渲染
   - 组件的初次渲染
   - 组件的 state 或 props 发生变化
2. 渲染组件（**整个过程是递归的**）
   - 在进行初次渲染时，react 会调用根组件
   - 对于后续的渲染，react 会调用内部状态更新触发了渲染的函数组件。
3. 提交到 DOM
   - 对于初次渲染，react 会使用 `appendChild()` DOM API 将其创建的所有 DOM 节点放在屏幕上
   - 对于重新渲染，react 将应用最少的必要操作(在渲染时计算)，以使得 DOM 与最新的渲染输出相互匹配。

初次渲染：**当应用启动时，会触发初次渲染**。通过调用 `createRoot` 方法并传入目标 DOM 节点，然后用你的组件调用 render 函数完成的。

**状态更新时重新渲染**：一旦组件被初次渲染，你就可以通过使用 set 函数 更新其状态来触发之后的渲染。更新组件的状态会自动将一次渲染送入队列。

**渲染必须是纯计算**。即输入相同则输出相同，只做它自己的事情，不应该更改任何存在于渲染之前的对象或变量。

在 “严格模式” 下开发时，React 会调用每个组件的函数**两次**。

**React 仅在渲染之间存在差异时才会更改 DOM 节点。**

在渲染完成并且 React 更新 DOM 之后，浏览器就会重新绘制屏幕。 painting 绘制。

如果渲染结果与上次一样，那么 React 将不会修改 DOM

## state 如同一张快照

设置 state 会触发渲染。

“正在渲染” 就意味着 React 正在调用你的组件——一个函数。你从该函数返回的 JSX 就像是在某个时间点上 UI 的快照。它的
props、事件处理函数和内部变量都是 根据当前渲染时的 state 被计算出来的。

当 react 重新渲染一个组件时

1. react 会再次调用你的函数
2. 函数会返回新的 jsx 快照
3. react 会更新界面以匹配返回的快照

![](https://minio.wangzhy.com/picgo/202508061552678.png)

设置 state 只会为下一次渲染变更 state 的值。 （**在一个渲染内，对同一个 state 进行多次操作，只有第一次操作生效。**）

```jsx
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
```

每次点击按钮，number 只会加 1。

**一个 state 变量的值永远不会在一次渲染的内部发生变化**， 即使其事件处理函数的代码是异步的。在 那次渲染的 onClick
内部，number 的值即使在调用 setNumber(number + 5) 之后也还是 0。它的值在 React 通过调用你的组件“获取 UI 的快照”时就被“固定”了。

## 把一系列 state 更新加入队列

**React 会等到事件处理函数中的** 所有 **代码都运行完毕再处理你的 state 更新**。

在下次渲染前多次更新同一个 state ，（传递一个函数进去）

1. React 会将此函数加入队列，以便在事件处理函数中的所有其他代码运行后进行处理。
2. 在下一次渲染期间，React 会遍历队列并给你更新之后的最终 state。

`setState(x)` === `setState(n => x)`

```jsx
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => 5);
          setNumber((n) => n + 1);
        }}
      >
        增加数字
      </button>
    </>
  );
}
```

通常可以通过相应 state 变量的第一个字母来命名更新函数的参数：

```js
setEnabled((e) => !e);
setLastName((ln) => ln.reverse());
setFriendCount((fc) => fc * 2);
```

## 更新 state 中的对象

state 中可以保存任意类型的 JavaScript 值, 你**不应该直接修改存放在 React state 中的对象**,
当你想要更新一个对象时，你需要**创建一个新的对象（或者将其拷贝一份）**，然后将 state 更新为此对象。

**什么是 mutation？ 直接修改了 state 的属性值**

如果避免 mutation? 通过 setState 方法传入一个新的对象来更新 state

你应该 把所有存放在 state 中的 JavaScript 对象都视为只读的。（**将 state 视为只读的**）

使用展开语法复制对象

```jsx
setPerson({
  ...person, // 复制上一个 person 中的所有字段
  firstName: e.target.value, // 但是覆盖 firstName 字段
});
```

属性的动态命名， 使用 `[]` 来动态设置属性名。

```jsx
setPerson({
  ...person,
  [e.target.name]: e.target.value,
});
```

更新嵌套对象

```jsx
setPerson({
  ...person, // 复制其它字段的数据
  artwork: {
    // 替换 artwork 字段
    ...person.artwork, // 复制之前 person.artwork 中的数据
    city: "New Delhi", // 但是将 city 的值替换为 New Delhi！
  },
});
```

使用 `use-immer`, 编写简洁的更新逻辑

```jsx
const [person, updatePerson] = useImmer({
  name: "Michel",
  age: 33,
});

updatePerson((draft) => {
  draft.age++;
});
```

## 更新 state 中的数组

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

es6 中会修改原数组的方法： `push()`，`pop()`，`shift()`，`unshift()`，`splice()`，`reverse()`，`sort()`，`fill()`，`copyWithin()`

es6 中不会修改原数组的方法： `concat()`，`slice()`，`map()`，`filter()`，`reduce()`，`find()`，`every()`，`some()`，`indexOf()`，
`includes()`

**slice 不会修改原数组，splice 会修改原数组。**

添加元素

```js
setArtists([...artists, { id: nextId++, name: name }]);
```

删除元素

```js
setArtists(artists.filter((a) => a.id !== artist.id));
```

转换数组

```jsx
// 使用新的数组进行重渲染
setShapes(
  hapes.map((shape) => {
    if (shape.type === "square") {
      // 不作改变
      return shape;
    } else {
      // 返回一个新的圆形，位置在下方 50px 处
      return {
        ...shape,
        y: shape.y + 50,
      };
    }
  }),
);
```

替换数组中的元素

```jsx
setCounters(
  counters.map((c, i) => {
    if (i === index) {
      // 递增被点击的计数器数值
      return c + 1;
    } else {
      // 其余部分不发生变化
      return c;
    }
  }),
);
```

向数组中插入元素

```jsx
function handleClick() {
  const insertAt = 1; // 可能是任何索引
  const nextArtists = [
    // 插入点之前的元素：
    ...artists.slice(0, insertAt),
    // 新的元素：
    { id: nextId++, name: name },
    // 插入点之后的元素：
    ...artists.slice(insertAt),
  ];
  setArtists(nextArtists);
  setName("");
}
```

**即使你拷贝了数组，你还是不能直接修改其内部的元素**（slice 是浅拷贝）。这是因为数组的拷贝是浅拷贝——新的数组中依然保留了与原始数组相同的元素。

```jsx
setMyList(
  myList.map((artwork) => {
    if (artwork.id === artworkId) {
      // 创建包含变更的*新*对象
      return { ...artwork, seen: nextSeen };
    } else {
      // 没有变更
      return artwork;
    }
  }),
);
```

## 用 State 响应输入

React 控制 UI 的方式是声明式的。

只需要声明组件可以处于的不同状态，并根据用户的输入在它们之间切换。
