/**
 * What is a Singly Linked list?
 * It is a scavanger hunt
 * 
 * Operations 
 * 
 * We want to build a constructor function for a singular Node
 * 
 * new Node(value)
 * 
 * We want to build a constructor function for a singly linked list
 * 
 * new SinglyLinkedList()
 */

/**
 * @Node 
 * attributes for value and next 
 */
class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

/**
 * @SinglyLinkedList
 * attributes for head and length
 * Add values that build new nodes 
 * Search the list for a node at a specific position
 * Delete a node from a specific posiition
 */

class SinglyLinkedList {

  constructor() {
    this._length = 0;
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    let currentNode = this.head;

    // is the list empty?
    if (!currentNode) {
      this.head = node;
      this._length++;

      return node;
    }

    // is the list not empty?
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this._length++;

    return node;
  }

  searchNodeAt(position) {
    let currentNode = this.head;

    // the position isn't valid? is the length of the list 0? is the position less than 1? or is the position greater than the length of the list? 
    this.isValidPosition(position)

    // the position is valid?
    for (let i = 1; i < position; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  removeNodeAt(position) {
    let currentNode = this.head;
    let beforeNodeToBeDeleted = null;
    let possiblyDeletedNode = null;
    let deletedNode = null;

    // the position isn't valid?
    this.isValidPosition(position)

    // are we removing the head node?
    if (position === 1) {
      this.head = currentNode.next
      deletedNode = currentNode;
      this._length--;

      return deletedNode;
    }

    // are we removing a node from the tail?
    for (let i = 1; i < position; i++) {
      // store the value of the currentNode to the beforeNodeToBeDeleted
      beforeNodeToBeDeleted = currentNode;
      // assume that the next node in the iterator could be deleted
      possiblyDeletedNode = currentNode.next; // { value: 11, next: { value: 12, next: null }}
      currentNode = currentNode.next;
    }

    beforeNodeToBeDeleted.next = possiblyDeletedNode.next;
    deletedNode = possiblyDeletedNode;
    this._length--;

    return deletedNode
  }

  isValidPosition(position) {
    if (this._length === 0 || position < 1 || position > this._length) {
      throw new Error("Unable to find a node at this position")
    }
  }
}

let list = new SinglyLinkedList()
list.add(10)
list.add(11)
console.log("Removed Node: ", list.removeNodeAt(2)) 
console.log(list)