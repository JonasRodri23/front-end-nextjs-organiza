
export const getUsers = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
  };

  export const loginUser = (user) => {
    const users = getUsers();
    return users.some((storedUser) => storedUser.email === user.email && storedUser.password === user.password);
  };
  
  export const registerUser = (user) => {
    const users = getUsers();
    const updatedUsers = [...users, user];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };
