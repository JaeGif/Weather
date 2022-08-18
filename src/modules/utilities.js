function capitalize(string) {
  string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  return string;
}
export { capitalize };
