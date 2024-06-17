import React from 'react';

import SsoAuthPage from '../SsoAuthPage';

const SsoAuthPageExample = () => {
  const handleLogin = (): string => {
    alert('Logged in with Microsoft');
    return 'user-token';
  };

  return <SsoAuthPage buttonLabel="Login with Microsoft" logoUrl="https://via.placeholder.com/150" onLogin={handleLogin} />;
};

export default SsoAuthPageExample;
