import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.title = `${name}`;
  }, [name]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', () => handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button onClick={() => setAge(age - 1)}>-</button>
        {age}
        <button onClick={() => setAge(age + 1)}>+</button>
        <br />
        My name is {name} and I am {age} years old.
      </div>
      <div>
        <h1>Window Width: {width}</h1>
      </div>
    </>
  );
}

export default App;
