import './App.css';
import {useState, useEffect} from 'react';
import Watch from './assets/components/Watch/Watch'

function App() {

  const [watches, setWatches] = useState([]);

  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  }, [])
  // const watches = [
  //   {
  //     "id": 1,
  //     "name": "Rolex Submariner",
  //     "price": 10000
  //   },
  //   {
  //     "id": 2,
  //     "name": "Omega Seamaster",
  //     "price": 6000
  //   },
  //   {
  //     "id": 3,
  //     "name": "TAG Heuer Carrera",
  //     "price": 4500
  //   },
  //   {
  //     "id": 4,
  //     "name": "Seiko Prospex",
  //     "price": 500
  //   },
  //   {
  //     "id": 5,
  //     "name": "Casio G-Shock",
  //     "price": 100
  //   }
  // ];
  
  return (
    <>
      <h1>Best Watches with Name and Price</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
