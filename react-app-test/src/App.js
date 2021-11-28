import { useState, useEffect } from 'react';
import Button from './Button';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  useEffect(() => console.log('I run only once.'), []);
  useEffect(() => console.log('I run counter changes'), [counter]);
  useEffect(() => console.log('I run keyword changes.'), [keyword]);
  useEffect(() => console.log('I run counter or keyword changes.'), [counter, keyword]);

  const onChange = (event) => setKeyword(event.target.value);
  const onClick = (event) => setCounter((prevCounter) => prevCounter + 1);

  return (
    <div>
      <h1>{counter}</h1>
      <input onChange={onChange} type='text' value={keyword} />
      <Button onClick={onClick} text='Click Me' />
    </div>
  );
}

export default App;
