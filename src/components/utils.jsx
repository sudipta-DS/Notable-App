export function Search(arr, str) {
  const newArr = arr.filter((item) => item.title.includes(str));
  return newArr;
}
