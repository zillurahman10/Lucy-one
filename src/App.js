import './App.css';
import Items from './components/Items/Items';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
      <Items></Items>
      <div>
        <Question></Question>
      </div>
    </div>
  );
}

export default App;
