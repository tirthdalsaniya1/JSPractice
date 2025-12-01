function formatText(text, formatCb) {
  return typeof formatCb === "function" ? formatCb(text) : text.toUpperCase();
}

const result = formatText("hello", function (text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
});

console.log(result);
