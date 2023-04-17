const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.st = [];
    this.po = null;
    this.pe= null;
  }

  push(element) {
    this.st.push(element);
  }

  pop() {
    this.po = this.st.pop();
    this.st.pop();
    return this.po;
  }

  peek() {
    this.pe = this.st.pop();
    return this.pe;
  }
}

module.exports = {
  Stack
};
