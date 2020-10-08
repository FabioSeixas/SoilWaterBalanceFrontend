import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';

const App: React.FC = () => {
  return (
    <>
      <ToastProvider>
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </ToastProvider>

      <GlobalStyles />
    </>
  );
};

export default App;
