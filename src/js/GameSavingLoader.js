import read from './read';
import json from './json';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((result) => new GameSaving(JSON.parse(result)));
  }
}
