function cleanSet(inputSet, startString) {
  const resultArray = [];
  for (const value of inputSet) {
    if (value.startsWith(startString)) {
      resultArray.push(value.substring(startString.length));
    }
  }
  return resultArray.join('-');
}

export default cleanSet;
