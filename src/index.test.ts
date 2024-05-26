import { core } from '.';

describe('core', () => {
  describe('normal', async () => {
    expect(core('Foo', 'Bar')).toBe('Foo Bar');
  });

  describe('lastName upper case', async () => {
    expect(core('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
