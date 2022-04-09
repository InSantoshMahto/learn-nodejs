/**
 * Map implementation in JS
 * @class
 * @name MyMap
 * @returns {MyMap}
 */
export class MyMap {
  /**
   * @type {any[]}
   */
  #items = [];

  /**
   * @constructor
   */
  constructor() {
    this.#items = []
  }

  /**
   * add item
   * @method
   * @name add
   * @param {any} value 
   * @returns {MyMap}
   */
  add(value) {
    if (!this.#items.includes(value)) {
      this.#items.push(value);
    }
    return this;
  }

  /**
   * delete item
   * @method
   * @name delete
   * @param {any} value 
   * @returns {boolean}
   */
  delete(value) {
    const length = this.#items.length;
    this.#items = this.#items.filter(val => val !== value)
    return length !== this.#items.length;
  }

  /**
   * has exist or not
   * @method
   * @name has
   * @param {any} value 
   * @returns {boolean}
   */
  has(value) {
    return this.#items.findIndex(val => val === value) !== -1
  }

  /**
   * size of set
   * @method
   * @name size
   * @returns {number}
   */
  get size() {
    return this.#items.length;
  }
}

export default MyMap;

// const s = new MySet();
// s.add("ok").add("ok").add("Google");
// console.log("size", s.size);
// console.log("delete", s.delete("ok"));
// console.log("size", s.size);
// console.log("has", s.has("Google"));