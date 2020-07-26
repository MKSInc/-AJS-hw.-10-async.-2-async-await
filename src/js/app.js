/* eslint-disable no-console */
// TODO: write your code here
import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (e) {
    console.log(e);
  }
})();
