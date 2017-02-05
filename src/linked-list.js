const Node = require('./node');
 
class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }
 
    append(data) {
        const newNode = new Node(data);
 
        if (this.isEmpty()) {
            this._tail = this._head = newNode;
        } else {
            const oldTail = this._tail;
            oldTail.next = newNode;
            newNode.prev = oldTail;
 
            this._tail = newNode;
        }
 
        this.length++;
 
        return this;
    }
 
    head() {
        return this._head && this._head.data;
    }
 
    tail() {
        return this._tail && this._tail.data;
    }
 
    at(index) {
        if (this.isEmpty()) {
            return null;
        } else {
            let currentNode = this._head;
 
            for (let i = 0; i < this.length; i++) {
                if (i === index) {
                    return currentNode.data;
                } else {
                    currentNode = currentNode.next;
                }
            }
 
            return null;
        }
    }
 
    insertAt(index, data) {
        if (index >= this.length) {
            this.append(data)
        } else {
            const newNode = new Node(data);
 
            let oldNode = this._head;
            for (let i = 0; i < this.length; i++) {
                if (i === index) {
                    const prevOfOldNode = oldNode.prev;
 
                    newNode.prev = prevOfOldNode;
                    if (prevOfOldNode) {
                        prevOfOldNode.next = newNode;
                    }
                    newNode.next = oldNode;
                    oldNode.prev = newNode;
 
                    this.length++;
 
                    break;
                } else {
                   oldNode = oldNode.next;
                }
            }
        }
 
        return this;
    }
 
    isEmpty() {
        return this.length === 0;
    }
 
    clear() {
        this._tail = null;
        this._head = null;
        this.length = 0;
 
        return this;
    }
 
    deleteAt(index) {
        let nodeToDelete = this._head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                const prevOfNodeToDelete = nodeToDelete.prev;
                const nextOfNodeToDelete = nodeToDelete.next;
                if (prevOfNodeToDelete) {
                    prevOfNodeToDelete.next = nextOfNodeToDelete;
                }
                if (nextOfNodeToDelete) {
                    nextOfNodeToDelete.prev = prevOfNodeToDelete;
                }
                this.length--;
 
                break;
            } else {
                nodeToDelete = nodeToDelete.next;
            }
        }
 
        return this;
    }
 
    reverse() {
        const reversedList = new LinkedList();
 
        let currentNode = this._tail;
        while (currentNode) {
            reversedList.append(currentNode.data);
            currentNode = currentNode.prev;
        }
 
        this._head = reversedList._head;
        this._tail = reversedList._tail;
 
        return this;
    }
 
    indexOf(data) {
        let currentNode = this._head;
 
        for (let i = 0; i < this.length; i++) {
            if (currentNode.data === data) {
                return i;
            } else {
                currentNode = currentNode.next;
            }
        }
 
        return -1;
    }
}
 
module.exports = LinkedList;