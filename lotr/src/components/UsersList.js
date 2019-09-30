import React from 'react';
import UserCard from './UserCard';

export default function UsersList({ users, handleDelete }) {
  return (
    <div>
      <h2>List of Characters:</h2>
      <div className='users-list'>
        {users.map(user => (
          <UserCard key={user.id} user={user} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
