/* eslint-disable max-len */
import GameSavingLoader from '../GameSavingLoader';

describe('Test GameSavingLoader.load() method with async/await', () => {
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

  test('№1.1: should return correct object', async () => {
    await expect(GameSavingLoader.load()).resolves.toEqual(saving);
  });
});
