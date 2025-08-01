// 具名导出
export function Profile() {
    return (
        <img src="https://i.imgur.com/MK3eW3As.jpg"
             alt="Katherine Johnson"
        />
    );
}

// 默认导出
export default function Gallery() {
    return (
        <section>
            <h1>了不起的科学家</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    )
}