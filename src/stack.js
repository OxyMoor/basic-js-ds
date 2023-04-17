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
    this.top = null;
  }

  push(element) {
    this.st.push(element);
  }

  pop() {
    this.top = this.st[this.st.length - 1];
    this.st.pop();
    return this.top;
  }

  peek() {
    this.top = this.st[this.st.length - 1];
    return this.top;
  }
}

module.exports = {
  Stack
};
