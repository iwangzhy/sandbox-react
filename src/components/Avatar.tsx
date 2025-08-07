import { getImageUrl } from "../utils/utils.ts";

export default function Avatar({
  person,
  size,
}: {
  person: { imageId: string; name: string };
  size: number;
}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
