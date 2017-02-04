const Node = require('./node');

class LinkedList {
    constructor() {
    	this.head = null;
    	this.last = null;
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
    	if(this.head == null) {
        this.head = new Node(val);
        } else {
        var aux = this._head;
        this.head = new Node(val);
        this.head.next = aux;
        } 
        this.length++; 
        return true;   
    }
    isEmpty() {
        
    }

    clear() {
    	this.first = null; 
    	this.last = null; 
    	this.length = 0; 
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

    indexOf(data) {
        
    }
}

module.exports = LinkedList;
