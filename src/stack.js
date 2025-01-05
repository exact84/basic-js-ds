const { NotImplementedError } = require("../extensions/index.js");

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
  body = [];
  i = 0;
  push(element) {
    this.body[this.i] = element;
    this.i += 1;
  }

  pop() {
    this.i -= 1;
    return this.body[this.i];
  }

  peek() {
    return this.body[this.i - 1];
  }
}

module.exports = {
  Stack,
};
