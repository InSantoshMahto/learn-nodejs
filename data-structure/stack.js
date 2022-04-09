// @ts-check
/**
 * Stack implementation in JS
 * @class
 * @name Stack
 * @returns {Stack}
 */
export class Stack {
  /**
   * @type {any[]}
   */
  #items = [];

  /**
   * @constructor
   */
  constructor() {
    this.#items = [];
  }

  /**
   * push
   * @method
   * @name push
   * @param {any} value 
   * @returns {void}
   */
  push(value) {
    this.#items.push(value);
  }

  /**
   * pop
   * @method
   * @name pop
   * @returns {any | null}
   */
  pop() {
    if (this.#items.length === 0)
      return null;
    return this.#items.pop();
  }

  /**
   * peak
   * @method
   * @name peak
   * @returns {number | null}
   */
  peak() {
    if (this.#items.length === 0)
      return null;
    return this.#items[this.#items.length - 1]
  }

  /**
   * size
   * @method
   * @name size
   * @returns {number}
   */
  size() {
    return this.#items.length
  }
}

export default Stack;

// const stack = new Stack();
// stack.push(7)
// stack.push(5)
// stack.push(3)
// console.log('size', stack.size());
// console.log('pop', stack.pop());;
// console.log('size', stack.size());
// console.log('peak', stack.peak());