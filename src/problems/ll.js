const {Node} = require('../classes/node');

let ll = null;

ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(3);
ll.next.next.next = new Node(4);
ll.next.next.next.next = new Node(5);

console.log(JSON.stringify(ll,null,2));