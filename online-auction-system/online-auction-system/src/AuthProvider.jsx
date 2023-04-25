// AuthProvider.js
import React, { useState } from 'react';
import AuthContext from './AuthContext.jsx';

function AuthProvider({ children }) {
  const [authentic, setAuthentic] = useState(false);

  const contextValue = {
    authentic,
    setAuthentic
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
