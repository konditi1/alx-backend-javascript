function setFromArray(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i += 1) {
    set.add(arr[i]);
  }
  return set;
}

export default setFromArray;
