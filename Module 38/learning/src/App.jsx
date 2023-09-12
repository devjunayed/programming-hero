import "./App.css";
import "react";
import Actor from './Actor';
import Todo from "./Todo";
import Singer from "./Singers";
import BookStore from "./BookStore";

function App() {

  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel'];

  const singers = [
    {
      id: 1,
      name: 'Dr.Mahfuzur Rahman',
      age: 68
    },
    {
      id: 2,
      name: 'Eva Rahman',
      age: 38
    },
    {
      id: 3,
      name: 'Shuvro Dev',
      age: 58
    },
    {
      id: 4,
      name: 'Pritom',
      age: 28
    },
  ]


  const books = [
    {id: 1, name: 'physics', price: 100},
    {id: 2, name: 'Math', price: 120},
    {id: 3, name: 'Chemistry', price: 130},
    {id: 4, name: 'Biology', price: 150},
  ];

  return (
    <>
      <h1>Hello me</h1>

      <BookStore books={books}></BookStore>

      <Actor name={"Bappa Raz"}></Actor>

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }
{/* 
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}

      {/* <Device name="laptop" price="55k"></Device>
      <Device name="mobile" price="17k"></Device>
      <Device name="mobile" price="3k"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="12" score="85"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}
function Device({ name, price }) {
  return (
    <h2>
      This device: {name} price:{price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "sakib", age: 12 };
  return (
    <h3>
      I am a {person.name} with age: {age + money}
    </h3>
  );
}

function Student({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding: </p>
    </div>
  );
}
export default App;
