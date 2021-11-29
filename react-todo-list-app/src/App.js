import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    setToDos((prevToDos) => [toDo, ...prevToDos]);
    setToDo('');
  };
  const onChange = (event) => setToDo(event.target.value);

  return (
    <div>
      <h1>To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={toDo} onChange={onChange} />
        <button>Add ToDo</button>
      </form>
      <ul>
        {toDos.map((toDos, index) => (
          <li key={index}>{toDos}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
