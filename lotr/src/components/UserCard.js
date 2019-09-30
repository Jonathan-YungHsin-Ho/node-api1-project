import React from 'react';

export default function UserCard({ user, handleDelete }) {
  return (
    <div className='user-card'>
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <button onClick={() => handleDelete(user.id)}>close</button>
    </div>
  );
}
