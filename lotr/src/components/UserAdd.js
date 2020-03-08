import React, { useState } from 'react';

export default function UserAdd({ handleAdd }) {
  const [newCharacter, setNewCharacter] = useState({
    name: '',
    bio: '',
  });

  const handleChange = e =>
    setNewCharacter({ ...newCharacter, [e.target.name]: e.target.value });

  return (
    <div className='form'>
      <h3>Add a Character:</h3>
      <input
        type='text'
        name='name'
        placeholder='...name'
        value={newCharacter.name}
        onChange={handleChange}
      />
      <input
        type='text'
        name='bio'
        placeholder='...bio'
        value={newCharacter.bio}
        onChange={handleChange}
      />
      <button onClick={() => handleAdd(newCharacter)}>Add</button>
    </div>
  );
}
