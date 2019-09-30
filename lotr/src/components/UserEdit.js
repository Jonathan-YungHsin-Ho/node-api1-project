import React, { useState } from 'react';

export default function UserEdit({ users, handleEdit }) {
  const [changes, setChanges] = useState({});
  const [id, setId] = useState('');

  const handleSelect = e => {
    const targetUser = JSON.parse(e.target.value);
    setChanges({ ...changes, name: targetUser.name, bio: targetUser.bio });
    setId(targetUser.id);
  };

  const handleChange = e =>
    setChanges({ ...changes, [e.target.name]: e.target.value });

  return (
    <div className='form'>
      <h3>Edit a Character:</h3>
      <select onChange={handleSelect}>
        <option>Select a character:</option>
        {users.map(user => (
          <option key={user.id} value={JSON.stringify(user)}>
            {user.name}
          </option>
        ))}
      </select>
      <input
        type='text'
        name='name'
        placeholder='...name'
        value={changes.name}
        onChange={handleChange}
      />
      <input
        type='text'
        name='bio'
        placeholder='...bio'
        value={changes.bio}
        onChange={handleChange}
      />
      <button onClick={() => handleEdit(id, changes)}>Edit</button>
    </div>
  );
}
