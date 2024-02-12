import { useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setShow((prevShow) => !prevShow)}>
          Show/Hide
        </button>
        {show && <Child />}
      </div>
    </>
  );
}

export default App;
