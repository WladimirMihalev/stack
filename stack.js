class Stack {
    constructor(stackLimit) {
        if (!((stackLimit ^ 0) === stackLimit) && !(stackLimit === undefined)) throw new Error('Not a valid number!');
        if (stackLimit === undefined) this.stackLimit = 10;
        else this.stackLimit = stackLimit;
        this.storage = new Array();
    }

    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] !== 'function') {
          throw new Error("This is not a stack arg...");
        }
        const replicate = new Stack(iterable.length);
        let arrayed = Array.from(iterable)
        arrayed.forEach((el) => replicate.push(el));
    
        return replicate;
      }

    push(elem) {
        if (this.storage.length < this.stackLimit) this.storage.push(elem);
        else throw new Error('Stack limit error');
    }
    pop() {
        if (this.storage.length === 0) throw new Error('Stack is empty');
        else return this.storage.pop();
    }

    peek() {
        if (this.storage.length === 0) throw new Error('Stack is empty');
        else return this.storage[this.storage.length-1];
    }

    toArray() {
        let copiedArr = Array.from(this.storage)
        return copiedArr
    }

}


