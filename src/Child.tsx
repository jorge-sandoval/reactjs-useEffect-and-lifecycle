import { useEffect, useState } from 'react';

export default function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    // Logged in every render
    console.log('Rendered!');
  });

  useEffect(() => {
    // Logged when mounted
    console.log('Mounted!');

    // Logged when unmounted
    return () => {
      console.log('Unmounted!');
    };
  }, []);

  useEffect(() => {
    // Logged every time name changes
    console.log('Name changed!');

    const timeOutId = setTimeout(() => {
      console.log(`Typing ... ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [name]);

  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <button onClick={() => setAge((prevAge) => prevAge - 1)}>-</button>
        {age}
        <button onClick={() => setAge((prevAge) => prevAge + 1)}>+</button>
        <br />
        My name is {name} and I am {age} years old.
      </div>
    </>
  );
}
