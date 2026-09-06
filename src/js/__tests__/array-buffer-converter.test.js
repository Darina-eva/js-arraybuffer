import ArrayBufferConverter from '../array-buffer-converter';
import getBuffer from '../buffer';

test('should return empty string when nothing loaded', () => {
  const converter = new ArrayBufferConverter();

  expect(converter.toString()).toBe('');
});

test('should convert loaded buffer to string', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());

  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('should return instance from load', () => {
  const converter = new ArrayBufferConverter();

  expect(converter.load(getBuffer())).toBe(converter);
});

test('should produce parsable json', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());

  expect(JSON.parse(converter.toString())).toEqual({
    data: { user: { id: 1, name: 'Hitman', level: 10 } },
  });
});
