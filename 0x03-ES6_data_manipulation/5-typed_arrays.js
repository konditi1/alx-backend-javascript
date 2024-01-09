function createInt8TypedArray (length, position, value) {
    if (position < 0 || position >= length) {
        throw new RangeError();
    }
  return new Int8Array(new ArrayBuffer(length), position, 1).set(value);
}
