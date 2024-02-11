import './App.css';
import { useState } from 'react';
import Child from './Child';

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setShow(!show)}>Show/Hide</button>
        {show && <Child />}
      </div>
    </>
  );
}

export default App;
