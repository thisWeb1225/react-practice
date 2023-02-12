import { useState } from 'react';
import reactLogo from './assets/react.svg';

import DarkmodeLogin from './views/DarkmodeLogin';

import MouseMoveAndClick from './views/MouseMoveAndClick';

import MemoryBlock from './views/MemoryBlock';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MemoryBlock></MemoryBlock>
    </div>
  );
}

export default App;
