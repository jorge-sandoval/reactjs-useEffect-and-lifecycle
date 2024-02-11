import { useState } from 'react';

export default function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');

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
    </>
  );
}
