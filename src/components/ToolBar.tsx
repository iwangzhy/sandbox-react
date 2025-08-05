function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`正在播放 ${movieName}！`);
  }

  return <Button onClick={handlePlayClick}>播放 "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("正在上传！")}>上传图片</Button>;
}

export default function ToolBar() {
  return (
    <div>
      <PlayButton movieName="魔女宅急便" />
      <UploadButton />
    </div>
  );
}
