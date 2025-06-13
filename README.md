# LinkedList Implementation in JavaScript

This project contains a simple implementation of a singly linked list in JavaScript, built with ES6 classes.

# 📦 Files

- node.js – Defines the Node class used to represent each element in the list.

- LinkedList.js – Defines the LinkedList class with standard linked list operations.

# 🚀 Features

The LinkedList class supports the following methods:

# 🔧 Basic Methods

- append(value) -
  Adds a node with the given value to the end of the list.

- prepend(value) -
  Adds a node with the given value to the beginning of the list.

- size() -
  Returns the total number of nodes in the list.

- getHead() -
  Returns the first node in the list.

- getTail() -
  Returns the last node in the list.

- toString() -
  Returns a string representation of the list, e.g., ( 1 ) -> ( 2 ) -> null.

# 🔍 Access & Search

- at(index) -
  Returns the node at the given index (0-based). Returns null if the index is out of bounds.

- contains(value) -
  Returns true if the list contains a node with the given value, otherwise false.

- find(value) -
  Returns the index of the node containing the value, or null if not found.

# ✏️ Modification

- pop() -
  Removes the last element from the list.

- insertAt(value, index) -
  Inserts a new node with the given value at the specified index.

- removeAt(index) -
  Removes the node at the specified index.

# 🛠️ Requirements

Node.js or any environment that supports ES6 modules.

# 📌 Notes

- Indexes are zero-based.

- The Node class must define value and nextNode properties.
