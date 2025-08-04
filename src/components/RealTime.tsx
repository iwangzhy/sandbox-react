import {useEffect, useState} from "react";
import {Clock} from "./Clock.tsx";

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 100);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function RealTime() {
    const time = useTime();
    const [color, setColor] = useState('lightcoral');
    return (
        <div>
            <p>
                选择一个颜色:{' '}
                <select value={color} onChange={e => setColor(e.target.value)}>
                    <option value="lightcoral">浅珊瑚色</option>
                    <option value="midnightblue">午夜蓝</option>
                    <option value="rebeccapurple">丽贝卡紫</option>
                </select>
            </p>
            <Clock color={color} time={time.toLocaleTimeString()}/>
        </div>
    )
}