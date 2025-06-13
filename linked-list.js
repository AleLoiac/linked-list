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

      while (tmp.nextNode !== null) {
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
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      counter++;
    }

    return counter;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (this.head === null) return null;

    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  at(index) {
    let tmp = this.head;
    let i = 0;

    while (tmp !== null) {
      if (i === index) {
        return tmp;
      }
      tmp = tmp.nextNode;
      i++;
    }
    console.log("Index out of bounds");
    return null;
  }

  pop() {
    if (this.head === null) {
      return;
    }

    if (this.head.nextNode === null) {
      this.head = null;
      return;
    }

    let prev = null;
    let curr = this.head;

    while (curr.nextNode !== null) {
      prev = curr;
      curr = curr.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    if (this.head === null) {
      return false;
    }

    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;

    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value === value) {
        return index;
      }
      tmp = tmp.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let string = "";
    let tmp = this.head;
    while (tmp !== null) {
      string += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    string += "null";
    return string;
  }
}
