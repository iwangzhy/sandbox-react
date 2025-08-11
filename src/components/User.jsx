export default function User({ name, img, age, hobbies }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <h2>Age: {age}</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>hobby</li>
        ))}
      </ul>
    </div>
  );
}
