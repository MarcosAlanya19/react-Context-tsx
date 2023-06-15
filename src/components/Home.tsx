import { FC } from 'react';
import React from 'react';
import UserContext from '../context/users';
import { UserContextType } from '../models/user.model';

export const Home: FC = () => {
  const { setUsersContext, usersContext } = React.useContext(
    UserContext
  ) as UserContextType;

  const addUser = () => {
    const newUser = {
      id: crypto.randomUUID(),
      name: 'Marcos',
      lastname: 'Alanya',
      age: 22,
    };
    setUsersContext([...usersContext, newUser]);
  };

  return (
    <>
      <button onClick={addUser}>Click</button>
      {usersContext &&
        usersContext.map((data) => (
          <div key={data.id}>
            <div>{data.name}</div>
            <div>{data.lastname}</div>
            <div>{data.age}</div>
          </div>
        ))}
    </>
  );
};
