import React, { useEffect, useState } from 'react';

function APIInteractions() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // effect
    fetch('https://gorest.co.in/public-api/todos')
      .then((result) => result.json())
      .then(({ data }) => {
        setTodos(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {todos.map((item) => (
        <div key={`id-${item.id}`}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default APIInteractions;
