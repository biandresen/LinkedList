class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  prepend(data) {
    if (this.head == null) return this.append(data);
    else {
      const newNode = new Node(data);
      const firstNode = this.head;
      this.head = newNode;
      newNode.next = firstNode;
    }
    this.size++;
  }
  append(data) {
    const newNode = new Node(data);

    if (this.head == null) {
      this.head = newNode;
      newNode.next = null;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.next = null;
    }
    this.size++;
  }
  insertAt(data, index) {
    if (index <= 0) return this.prepend(data);
    if (this.head == null || index > this.size) return this.append(data);

    let newNode = new Node(data);
    let currentNode = this.head;
    let previousNode;
    let count = 0;

    while (count < index) {
      count++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = newNode;
    newNode.next = currentNode;
  }
  printAll() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
    return;
  }
  printSize() {
    return console.log(`Size of list is: ${this.size}`);
  }
  printAt(index) {
    if (index >= this.size || index < 0) return;

    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    console.log(currentNode.data);
  }
  printHead() {
    return console.log('Head: ') + console.log(this.head.data);
  }
  printTail() {
    return console.log('Tail: ') + this.printAt(this.size - 1);
  }
  pop() {
    let currentNode = this.head;
    let count = 0;
    while (count < this.size - 2) {
      count++;
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.size--;
  }
  removeAt(index) {
    if (index > this.size || index < 0) return;

    let currentNode = this.head;
    let previousNode;
    let count = 0;

    if (index == 0) {
      this.head = currentNode.next;
      currentNode.next = null;
      return;
    }

    while (count < index) {
      count++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
    currentNode.next = null;
  }
  contains(data) {
    let currentNode = this.head;
    let count = 0;
    while (count <= this.size - 1) {
      if (currentNode.data == data) return console.log('TRUE');
      count++;
      currentNode = currentNode.next;
    }
    return console.log('FALSE');
  }
  find(data) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (currentNode.data == data) return console.log(count);
      count++;
      currentNode = currentNode.next;
    }
    return null;
  }
  toString() {
    let string = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      string += `(${currentNode.data}) -> `;
      currentNode = currentNode.next;
    }
    string += `null`;
    console.log(string);
  }
}

const list = new LinkedList();

list.append(100);
list.append(200);
list.append(300);
list.prepend(50);
list.prepend(25);
list.append(400);
list.printAll();
console.log('------');
list.printSize();
console.log('------');
list.printAt(2);
console.log('------');
list.printHead();
list.printTail();
console.log('------');
console.log('POP');
list.pop();
list.printAll();
list.contains(300);
console.log('------');
list.find(50);
console.log('----------');
list.insertAt(500, 3);
list.printAll();
list.removeAt(1);
console.log('----------');
list.toString();

console.log('NEW LIST WITH ANIMALS');
console.log("----------------------")
const animalList = new LinkedList();

animalList.append('dog');
animalList.append('cat');
animalList.append('parrot');
animalList.append('hamster');
animalList.append('snake');
animalList.append('turtle');
animalList.printAll();
animalList.toString();
