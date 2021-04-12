import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#8B10AE' />
      <Routes />
    </>
  );
};

export default App;
