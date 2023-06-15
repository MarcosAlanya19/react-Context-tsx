export type User = {
  id: string;
  name: string;
  lastname: string;
  age: number;
};

export type UserContextType = {
  usersContext: Array<User>;
  setUsersContext: (value: Array<User>) => void;
};
