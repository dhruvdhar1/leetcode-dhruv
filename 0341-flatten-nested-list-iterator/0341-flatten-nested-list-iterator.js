/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */

class NestedIterator {
    flat = []
    pointer = 0
    constructor(nestedList) {
		this.flatten(nestedList, this.flat)
        // this.flat = new Queue(list)
    }

    flatten(nestedList, list) {
        for(const el of nestedList) {
            if(el.isInteger()) {
                list.push(el)
            } else {
                this.flatten(el.getList(), list)
            }
        }
    }

    hasNext() {
		return this.pointer < this.flat.length
    }

	next() {
		const pop = this.flat[this.pointer++]
        return pop.getInteger()
    }
}


/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/