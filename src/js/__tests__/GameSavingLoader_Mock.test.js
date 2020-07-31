/* eslint-disable max-len */
import GameSavingLoader from '../GameSavingLoader';
import read from '../read';
import json from '../json';

jest.mock('../read');
jest.mock('../json');

describe('Test GameSavingLoader.load() method with mock', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('№2.1: should return a promise in a state \'fulfilled\' with correct object', async () => {
    // read.mockReturnValue(new Promise((resolve) => resolve({}))); read() можно не "мокать"
    json.mockReturnValue((async () => '{}')());
    await expect(GameSavingLoader.load()).resolves.toEqual({ id: undefined, created: undefined, undefined });
  });

  test('№2.2: should return a promise in a state \'rejected\'', async () => {
    read.mockReturnValue(new Promise(() => { throw new Error('Some error'); }));
    await expect(GameSavingLoader.load()).rejects.toBeInstanceOf(Error);
  });

  test('№2.3: should return a promise in a state \'rejected\'', async () => {
    read.mockReturnValue(new Promise(() => { throw new Error('Some error'); }));
    try {
      await GameSavingLoader.load();
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});
