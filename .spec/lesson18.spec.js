const myfunction = require('../lesson18');

test('Test should return: "some text"', () => {
  expect(myfunction()).toBe('some text')
})