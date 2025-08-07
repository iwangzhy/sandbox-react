export default function UserList() {
  const users = [
    { id: 1, name: "wang", age: 18 },
    { id: 2, name: "wangz", age: 18 },
    { id: 3, name: "wangzh", age: 18 },
  ];
  return (
    <div>
      {users.map(
        (
          { id, name, age }, // 注意，这里是小括号，而不是大括号
        ) => (
          // 这里需要设置 key 属性
          <ul key={id}>
            <li>{id}</li>
            <li>{name}</li>
            <li>{age}</li>
          </ul>
        ),
      )}
    </div>
  );
}
