import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import User from './Users';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  function handleClick2(){
    alert('button 2 clicked');
  }

  function addToFive(num){
    alert(num+2);
  }
  return (
    <>
      <h3>React Core concepts 2</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=> alert("third clicked")}>third</button>

      {/* vejailla */}
      <button onClick={()=> addToFive(3)}>Four</button>
    </>
  )
}

export default App
