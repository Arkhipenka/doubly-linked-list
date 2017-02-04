const Node = require('./node');

class LinkedList {
    constructor() {
    	this.head = null;
    }

    append(data) {
        var a = new Node(data)
        append(node) {
		if (this.tail) {
		this.tail.nextNode = node;	
		} else {
		this.tail = node;
		}
		} 
    }

    head() {
    	        
    }

    tail() {
        
    }

    at(index) {
        
    }

    insertAt(index, data) {
    	if(this._head == null) {
        this._head = new Node(val);
        } else {
        var aux = this._head;
        this._head = new Node(val);
        this._head.next = aux;
        } 
        this._length++; 
        return true;   
    }
    isEmpty() {
        
    }

    clear() {
    	LinkedList.prototype.clear = function () { 
    	this.first = null; 
    	this.last = null; 
    	this.length = 0; 
		};  
    }

    deleteAt(index) {
    	if(index >= 0 && index < this._length) {
            var curr = this._head;
            if(index == 0) {
            this._head = curr.next;
            } else {
            var i = 0, prev; 
            while(i < index) {
            prev = curr; 
            curr = curr.next;
            i++;
            } 
            prev.next = curr.next;
        	}
        	this._length--; 
        	return curr.info;  
        }
    }    

    reverse() {
        var reverseLinkedList = function(linkedlist) {
  		var node = linkedlist;
  		var previous = null;
  			while(node) {
    		node.next = previous;
    		previous = node;
    		if (node.next){
    		node = node.next
    		} else {
     		 node = null;
   			}
  			}
		}
    }

    indexOf(data) {
        
    }
}

module.exports = LinkedList;
