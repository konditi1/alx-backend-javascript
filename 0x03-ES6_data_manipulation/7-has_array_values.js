function hasValuesFromArray(Set, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!Set.has(arr[i])) {
      return false;
    }
  }
  return true;
}

export default hasValuesFromArray;
