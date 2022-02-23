import React from 'react';

import { observer } from 'mobx-react';

import { counterStore } from './counter.store';

import { ReturnComponentType } from 'types/ReturnComponentType';

const App = observer((): ReturnComponentType => {
  const { count, inc, dec } = counterStore;
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={inc} type="button">
        +
      </button>
      <button onClick={dec} type="button">
        -
      </button>
    </div>
  );
});
export default App;
