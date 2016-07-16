import {AppStore} from './app-store';
import test from 'blue-tape';

test('should create empty Store asynchronously', async function(t) {
  function createStorePromise() {
    return Promise.resolve(new AppStore());
  }

  t.equal((await createStorePromise()) instanceof AppStore, true);
});

test('should create empty Store', function(t) {
  const appStore = new AppStore();

  t.equal(appStore instanceof AppStore, true);
  t.end();
});
