import templateFunc from '../basic';

test('temlate for test', () => {
  const result = templateFunc('test');
  expect(result).toBe('test');
});
