import React from 'react';
import TodoList from './TodoList'; // Importe o componente TodoList
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minha Lista de Tarefas</h1>
      </header>
      <main>
        <TodoList /> {/* Renderize o componente TodoList aqui */}
      </main>
    </div>
  );
}

export default App;
