import './app.css'
import Header from '../src/components/Header'
import Form from './components/Form';
import TodoContext from './TodoContext';
import List from './components/List';

function App() {
  return (
    <TodoContext>
      <Header />
      <Form />
      <List />
    </TodoContext>
  );
}

export default App;
