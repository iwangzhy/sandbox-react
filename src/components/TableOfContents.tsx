/**
 *  组件：应用程序中可以服用的 UI 元素
 *  React 组件是一段可以使用标签进行扩展的 js 函数
 *  react 组件的名称必须大写
 *  标签和 return 不再一行，则必须使用括号包裹
 * */
export default function TableOfContents() {
  return (
    <article>
      <h2>第一个组件</h2>
      <ol>
        <ul>组件：UI 构成要素</ul>
        <ul>定义组件</ul>
        <ul>使用组件</ul>
      </ol>
    </article>
  );
}
