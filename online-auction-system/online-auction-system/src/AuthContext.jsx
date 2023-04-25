// AuthContext.js
import React from 'react';

const AuthContext = React.createContext({
  authentic: false,
  setAuthentic: () => {}
});

export default AuthContext;