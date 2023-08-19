import {SafeAreaView} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView style={{flex: 1}} />
    </SafeAreaView>
  );
};

export default App;
