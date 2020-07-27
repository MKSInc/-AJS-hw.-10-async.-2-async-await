/* eslint-disable no-console */
import read from './read';
import json from './json';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => { console.log(result); json(result); })
      .then((result) => { console.log(result); return new GameSaving(JSON.parse(result)); });
  }
}
