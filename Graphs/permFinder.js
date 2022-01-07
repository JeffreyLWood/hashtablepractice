const permFinder = (string1, string2) => {
  let map1 = {};
  let map2 = {};

  for (let i = 0; i < string1.length; i++) {
    if (map1[string1[i]]) {
      map1[string1[i]++];
    } else {
      map1[string1[i]] = 1;
    }
  }

  for (let j = 0; j < string2.length; j++) {
    if (map2[string2[j]]) {
      map2[string2[j]++];
    } else {
      map2[string2[j]] = 1;
    }
  }

  if (map1 == map2) {
    return true;
  } else {
    return false;
  }
};

permFinder("aab", "aba");
