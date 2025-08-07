export default function Card({ children }: { children: React.ReactNode }) {
  console.log(children);
  return <div className="card">{children}</div>;
}
