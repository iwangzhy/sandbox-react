function Item({name, isPacked}: { name: string, isPacked: boolean }) {
    // return isPacked
    //     ? null // <li className="item">{name} ✅</li>
    //     : <li className="item">{name}</li>;
    return <li className="item">
        {
            // (isPacked ? name + '✅' : name)
            isPacked
                ? <del>{name + '✅'}</del>
                : (name)
        }
    </li>;
    // 使用 &&
    // return <li className="item">
    //     {name} {isPacked && '✅✅'}
    // </li>
    // final
    // let itemContent = (<span>name</span>);
    // if (isPacked) {
    //     // itemContent = name + '✅✅✅';
    //     itemContent = (
    //         <del>
    //             {name + '✅✅✅'}
    //         </del>
    //     );
    // }
    // return (
    //     <li className="item">
    //         {itemContent}
    //     </li>
    // )
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride 的行李清单</h1>
            <ul>
                <Item isPacked={true} name="宇航服"/>
                <Item isPacked={false} name="带金箔的头盔"/>
                <Item isPacked={false} name="Tam 的照片"/>
            </ul>
        </section>
    );
}