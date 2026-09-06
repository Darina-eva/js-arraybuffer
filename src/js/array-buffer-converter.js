export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
    return this;
  }

  toString() {
    if (!this.buffer) {
      return '';
    }

    return String.fromCharCode(...new Uint16Array(this.buffer));
  }
}
