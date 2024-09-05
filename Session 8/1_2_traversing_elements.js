/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - children
  - firstchild
  - lastchild
  - parentElement
*/

let span = document.querySelector("div");

console.log(span.parentElement);

span.onclick = function () {
  span.parentElement.remove();
}
