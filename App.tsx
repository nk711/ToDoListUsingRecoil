/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Text } from 'react-native';
import { RecoilRoot } from 'recoil';
import { Home } from './src/screens/Home';

const App = () => {
  return (
    <RecoilRoot>
      <Home/>
    </RecoilRoot>
  );
};

export default App;