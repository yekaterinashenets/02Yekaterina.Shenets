'use strict';
function documentTree(el) { 
var tree = { 
element: el, 
children: [], 
}; 
for(var i=0; i<el.childNodes.length; i++){ 
tree.children.push(documentTree(el.childNodes[i])); 
} 
return tree; 
} 
console.log(documentTree(document.body));