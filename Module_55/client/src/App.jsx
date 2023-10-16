import './App.css'

function App() {
  const handleUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = {
      name, email
    }

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        form.reset();
        alert('User created successfully');
      }
    })
  }
  return (
    <>
      <h1>Simple CRUD</h1>  
      <form onSubmit={handleUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add User" />
      </form>   
    </>
  )
}

export default App
