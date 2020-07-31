/* eslint-disable no-console */
// TODO: write your code here
import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log('объект GameSaving', saving);
  } catch (e) {
    console.log(e);
  }
})();
