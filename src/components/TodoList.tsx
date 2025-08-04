const today = new Date();

function formatDate(date: Date) {
    return new Intl.DateTimeFormat(
        'zh-CN',
        {
            weekday: 'long'
        }
    ).format(date);
}

export default function TodoList() {
    const name = "wangzhy";
    return <h1>{name} To Do List for {formatDate(today)}</h1>
}