/* eslint-disable no-console */

import runtime from '../../src/runtime';
import registerEvents from '../../src/browser/registerEvents';

if ('serviceWorker' in navigator) {
  const registration = runtime.register({
    scope: '/', // Use the root.
  });

  registerEvents(registration, {
    onInstalled: () => {
      console.log('onInstalled');
    },
    onUpdateReady: () => {
      console.log('onUpdateReady');
    },
    onUpdating: () => {
      console.log('onUpdating');
    },
    onUpdateFailed: () => {
      console.log('onUpdateFailed');
    },
    onUpdated: () => {
      console.log('onUpdated');
    },
  });
}

alert('JS loader');