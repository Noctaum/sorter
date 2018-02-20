class Sorter {
  constructor() {
    // your implementation
      this.mass = [];
      this.compare = function(a,b){return a-b};

  }

  add(element) {
    // your implementation
    this.mass.push(element);
  }

  at(index) {
    // your implementation
    return this.mass[index];
  }

  get length() {
    // your implementation
    return this.mass.length;
  }

  toArray() {
    // your implementation
    return this.mass;
  }

  sort(indices) {   
    let compareNumeric = (a,b) => a-b;
    indices.sort(compareNumeric);
    var pseudo = [];
    for(let i = 0; i<indices.length; i++){
      pseudo.push(this.mass[indices[i]]);
    } 
    pseudo.sort(this.compare);

    for(let i = 0; i<indices.length; i++){
      this.mass.splice(indices[i], 1, pseudo[i]);
    } 
  }
  

  setComparator(compareFunction) {
    // your implementation
    this.compare = compareFunction;
  }
}

module.exports = Sorter;