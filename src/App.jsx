import { useState } from 'react';
import reactLogo from './assets/react.svg';

import DarkmodeLogin from './views/DarkmodeLogin';

import MouseMoveAndClick from './views/MouseMoveAndClick';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MouseMoveAndClick></MouseMoveAndClick>
    </div>
  );
}

export default App;
