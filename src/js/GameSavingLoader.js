/* eslint-disable no-console */
import read from './read';
import json from './json';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const arrayBufer = await read();
    const jsonData = await json(arrayBufer);
    return new GameSaving(JSON.parse(jsonData));
  }
}
