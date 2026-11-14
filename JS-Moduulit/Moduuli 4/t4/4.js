'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for ( let x = 0; x < students.length; x++){

    const node = document.createElement(`option`);

    node.value = students[x].id;

    const textnode = document.createTextNode(students[x].name);

    node.appendChild(textnode);

    document.getElementById("target").appendChild(node);

}