/* eslint-disable max-len */
import GameSavingLoader from '../GameSavingLoader';
import read from '../read';
import json from '../json';

jest.mock('../read');
jest.mock('../json');

beforeEach(() => {
  jest.resetAllMocks();
});

test('The load() method must return a promise in a state \'fulfilled\'', async () => {
  read.mockReturnValue(new Promise((resolve) => resolve({})));
  json.mockReturnValue(new Promise((resolve) => resolve('{}')));
  expect(GameSavingLoader.load()).resolves.toEqual({ id: undefined, created: undefined, undefined });
});

test('The load() method must return a promise in a state \'rejected\'', () => {
  read.mockReturnValue(new Promise(() => { throw new Error('Some error'); }));
  json.mockReturnValue(async () => '{}');
  expect(GameSavingLoader.load()).rejects.toThrow('Some error');
});
