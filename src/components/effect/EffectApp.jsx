import { useEffect, useRef, useState } from "react";

export default function EffectApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  // useEffect(() => {
  //   // 每次渲染后，都会执行此处的代码
  // });

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "pause" : "play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}

/*
 * 执行过程
 * 1. react 渲染 videoplyer 组件，
 * 2. 执行 useEffect 里的代码
 * 3. 根据 isPlaying 的值调用 play 或者 pause 方法
 * */
function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);
  // 再渲染期间 对 DOM 节点进行操作这是不允许的。
  // if (isPlaying) {
  //   ref.current.play();
  // } else {
  //   ref.current.pause();
  // }
  // 解决方法是使用 useEffect 包裹起来，把它分离到渲染逻辑的计算过程之外。
  // useEffect 里面的代码会在渲染结束之后再执行
  useEffect(() => {
    if (isPlaying) {
      console.log("调用 video.play()");
      ref.current.play();
    } else {
      console.log("调用 video.pause()");
      ref.current.pause();
    }
    /*
      指定 [isPlaying] 作为依赖数组会告诉 React：如果 isPlaying 与上次渲染时相同，
      就跳过重新运行 Effect。这样一来，输入框的输入不会触发 Effect 重新运行，
      只有按下播放/暂停按钮会触发。
    */
  }, [isPlaying]);
  return <video ref={ref} src={src} loop playsInline />;
}
