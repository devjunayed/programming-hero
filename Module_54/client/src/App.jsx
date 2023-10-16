import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = {
      name,
      email
    }
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const newUsers = [...users, data];
      setUsers(newUsers)
      form.reset();
    });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <div>
        <h1 className='' style={{ textAlign: "center" }}>Users Manage ment System</h1>
        <p>Users: {users.length}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" />
          <br />
          <input type="email" name="email" />
          <br />
          <input type="submit" value="submit" />
        </form>
        <div>
          {
            users.map((user) => <p key={user.id}>{user.id}: {user.name} : {user.email}</p>)
          }
        </div>
      </div>
    </div>
  );
};

export default App;