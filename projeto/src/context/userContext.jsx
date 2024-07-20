import React, { createContext, useState } from 'react';

// Create a context with a default value
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('')


  const values = { 
    pessoas,
    setPessoas,
    loading,
    setLoading,
    user,
    setUser
  }

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
