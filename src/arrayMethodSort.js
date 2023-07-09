'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction) {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            const temporary = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temporary;
          }
        }
      }
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          if (String(this[j]) > String(this[j + 1])) {
            const temporary = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temporary;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
