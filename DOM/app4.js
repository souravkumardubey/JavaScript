// Traversing DOM

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
val = list;
val = listItem;

// Get child nodes

val = list.childNodes;  

// Get children element nodes 

// val = list.children;
val = list.childNodes[0];
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribite ( deprecated )
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype 

// get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// children of children
val = list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

//  get parent node 
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// get previous siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

console.log(val);