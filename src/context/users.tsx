import React, { useState } from 'react';
import { User } from '../models/user.model';

const Context = React.createContext({});

interface Props {
  children: React.ReactNode;
}

export const UsersContextProvider: React.FC<Props> = ({ children }) => {
  const [usersContext, setUsersContext] = useState<Array<User>>([]);

  return (
    <Context.Provider value={{ usersContext, setUsersContext }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
