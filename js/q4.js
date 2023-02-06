/*
Implement inheritance. Define a constructor function SortArray which 
Has a property originalArray
Has get function to getSortedArray 
Has a private function to sort the array.
Takes as an input to construct an array of numbers
Define another constructor function (SortObjectArray) which extends SortArray, and is used to sort array of JSON object
*/
class SortArray {
    constructor(originalArray) {
      this.originalArray = originalArray;
    }
  
    getSortedArray() {
      return this._sortArray(this.originalArray);
    }
  
    _sortArray(array) {
      return array.sort((a, b) => a - b);
    }
  }
  
  class SortObjectArray extends SortArray {
    _sortArray(array) {
      return array.sort((a, b) => {
        const propA = Object.values(a)[0];
        const propB = Object.values(b)[0];
        return propA - propB;
      });
    }
  }



