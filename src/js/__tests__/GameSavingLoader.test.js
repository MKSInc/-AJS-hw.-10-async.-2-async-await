import GameSavingLoader from '../GameSavingLoader';

const saving = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1,
    name: 'Hitman',
    level: 10,
    points: 2000,
  },
};

test('The load() method must return a promise with the correct object', () => expect(GameSavingLoader.load()).resolves.toEqual(saving));
