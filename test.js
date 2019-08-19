const minifier = require('./index');

const fixture1 = `Hello   world!
I  am a    simple
 string!  `;
const fixture2 = '    Hello  world! I  am  a    simple  string! ';
const idealString = 'Hello world! I am a simple string!';

test('First fixture should be equal to idealString', () => {
  expect(minifier(fixture1)).toBe(idealString);
});

test('Second fixture should be equal to idealString', () => {
  expect(minifier(fixture2)).toBe(idealString);
});
