//  size = 's' 表示 size 的参数默认值是 s
export function getImageUrl(person: { imageId: string }, size = "s"): string {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
