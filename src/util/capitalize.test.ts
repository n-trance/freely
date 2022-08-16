import { capitalize } from './capitalize';

it('handles an empty string', () => {
  expect(capitalize('')).toBe('');
});

it('handles a single letter', () => {
  expect(capitalize('a')).toBe('A');
});

it('handles a multiple letters', () => {
  expect(capitalize('abc')).toBe('Abc');
});

it('handles a sentence', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});
