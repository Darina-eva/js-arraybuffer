import ArrayBufferConverter from './array-buffer-converter';
import getBuffer from './buffer';

const converter = new ArrayBufferConverter();
converter.load(getBuffer());

console.log(converter.toString());
console.log(JSON.parse(converter.toString()));
