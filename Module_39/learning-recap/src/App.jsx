import './App.css';
import Posts from './Posts';


function App(){
  return (
    <>
      <h3>React Core Concepts Recap</h3>
      <ol>
        <li>components</li> 
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>load data</li>
      </ol> 
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App;