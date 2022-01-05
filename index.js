/*
const collection = new Map()
collection.set('france', '12')
collection.set('england', '2')

for(let value of collection){
  console.log(value)
}
*/

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    let idx = this._hash(key);
    if (this.table[idx]) {
      for (let i = 0; i < this.table[idx].length; i++) {
        if (this.table[idx][i][0] === key) {
          this.table[idx][i][1] = value;
          return;
        }
      }
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [];
      this.table[idx].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    let idx = this._hash(key);

    if (this.table[idx]) {
      for (let i = 0; i < this.table[idx].length; i++) {
        if (this.table[idx][i][0] === key) {
          return this.table[idx][i];
        }
      }
    }
  }

  remove(key) {
    let idx = this._hash(key);
    if (this.table[idx] && this.table[idx].length) {
      for (let i = 0; i < this.table[idx].length; i++) {
        if (this.table[idx][i][0] === key) {
          let removed = this.table[idx][i][0];
          this.table[idx][i] = undefined;

          return `${removed} removed succesfully...`;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      let result = values.map(([key, value]) => `${key}:[${value}]`);
      console.log(`${index}: ${result}`);
    });
  }
}

const ht = new HashTable();

ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);
ht.set("ǻ", 122);
ht.set("ǻ", 123);
ht.set("ǻ", 124);

ht.display();
