import React from 'react';
import { StatusBar } from 'react-native';
import LoginScreen from './screens/Auth/LoginScreen';
export default function App() {
  return (
    <>
      <StatusBar hidden={true}/>
        <LoginScreen/>
      </> 
  );
}