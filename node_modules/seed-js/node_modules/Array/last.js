(define("Array/last", function() {
  
  Array.prototype.last = function() {
    return this[this.length-1];
  };
  
}));
