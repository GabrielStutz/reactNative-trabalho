import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from './src/components/autenticacao/AuthContext';
import NavigationMain from './src/components/navigation/NavigationMain';
import { useContext } from 'react/cjs/react.production.min';
import { useNavigation } from '@react-navigation/native';

function App() {
  useEffect(() => { 
    const userAuth = useContext(AuthContext);
    const navigate = useNavigation();
    
    if(!userAuth?.userToken) {
      navigate('Login')
    }
  }, [])

  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationMain />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;