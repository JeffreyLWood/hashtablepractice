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

// Sifter function
const sifter = (string) => {
  let length = string.length;

  //Variation on Hashtable for Sifter function
  class HashTable {
    constructor() {
      this.table = new Array(length);
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
            this.table[idx][i][1] = value += 1;
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

    display() {
      let newArr = [];
      for (let key in this.table) {
        this.table[key].forEach((kv) => {
          newArr.push(kv[1]);
        });
      }
      return newArr;
    }
  }
  //algo
  let ht = new HashTable();

  for (let i = 0; i < string.length; i++) {
    ht.set(string[i], 1);
  }

  if (ht.display().includes(2)) {
    return false;
  } else {
    return true;
  }
};

//returns true if each char is unique, false otherwise, uses hashtable
sifter("horse"); //true
sifter("baboon"); //false
