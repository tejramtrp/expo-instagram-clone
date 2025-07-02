import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, AuthContext } from './context/AuthContext';
import AuthStack from './Navigation/AuthStack';
import AppStack from './Navigation/AppStack';

function RootNavigator() {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <AppStack /> : <AuthStack />;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
