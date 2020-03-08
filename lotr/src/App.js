import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserAdd from './components/UserAdd';
import UserEdit from './components/UserEdit';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const handleAdd = character => {
    // console.log('add clicked!', character);
    axios
      .post('https://webapi-i-challenge-jyh.herokuapp.com/api/users', character)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const handleDelete = id => {
    // console.log('deleted clicked!', id);
    axios
      .delete(`https://webapi-i-challenge-jyh.herokuapp.com/api/users/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const handleEdit = (id, changes) => {
    console.log('edit clicked!', id, changes);
    axios
      .put(
        `https://webapi-i-challenge-jyh.herokuapp.com/api/users/${id}`,
        changes,
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios
      .get('https://webapi-i-challenge-jyh.herokuapp.com/api/users')
      .then(res => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  }, [handleAdd, handleDelete, handleEdit]);

  return (
    <div className='App'>
      <h1>The Lord of the Rings</h1>
      <div className='form-wrapper'>
        <UserAdd handleAdd={handleAdd} />
        <UserEdit users={users} handleEdit={handleEdit} />
      </div>
      <UsersList users={users} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
