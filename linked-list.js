import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;

    if (this.head === null) {
      this.head = newNode;
    } else {
      let tmp = this.head;

      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    newNode.nextNode = this.head;

    this.head = newNode;
  }

  size() {
    let counter = 0;

    if (this.head === null) {
      return counter;
    }
    counter++;

    let tmp = this.head;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
      counter++;
    }

    return counter;
  }
}
