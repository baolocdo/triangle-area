// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { getTriangleArea } = require('./triangle-area');

test('should return 6 when base is 3 and height is 4', () => {
  expect(getTriangleArea(3, 4)).toBe(6);
});

test('should return 6 when base is 4 and height is 3', () => {
  expect(getTriangleArea(4, 3)).toBe(6);
});

test('should return 30 when base is 10 and height is 6', () => {
  expect(getTriangleArea(10, 6)).toBe(30);
});

test('should return 20 when base is 5 and height is 8', () => {
  expect(getTriangleArea(5, 8)).toBe(20);
});

test('should return 0 when base is 0 and height is 8', () => {
  expect(getTriangleArea(0, 8)).toBe(0);
});