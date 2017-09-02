var sayHello = require('../src/hello');

describe('Hello', function() {
  it('says hello', function() {
    expect(sayHello('my World')).toBe('Hello, my World!');
  });
});