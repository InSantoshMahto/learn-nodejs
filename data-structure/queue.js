// @ts-check
/**
 * Queue implementation in JS
 * @class
 * @name Queue
 * @returns {Queue}
 */
export class Queue {
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
   * enqueue
   * @method
   * @name enqueue
   * @param {any} value 
   * @returns {void}
   */
  enqueue(value) {
    this.#items.push(value);
  }

  /**
   * pop
   * @method
   * @name pop
   * @returns {any | null}
   */
  dequeue() {
    if (this.#items.length === 0)
      return null;
    return this.#items.shift();
  }

  /**
   * front
   * @method
   * @name front
   * @returns {any | null}
   */
  front() {
    if (this.#items.length === 0)
      return null;
    return this.#items[0]
  }


  /**
   * rear
   * @method
   * @name rear
   * @returns {any | null}
   */
  rear() {
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

export default Queue;

// const queue = new Queue();
// queue.enqueue(6)
// queue.enqueue(7)
// queue.enqueue(8)
// queue.enqueue(9)
// console.log('size', queue.size());
// console.log('dequeue', queue.dequeue());;
// console.log('size', queue.size());
// console.log('front', queue.front());
// console.log('rear', queue.rear());