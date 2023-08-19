import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import useFetch from './src/hooks/useFetch';
import Loading from './src/components/Loading';

const url = 'https://random-data-api.com/api/v2/users?size=20';
const App = () => {
  const {data, loading, error} = useFetch(url);
  console.log({data, loading, error});
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView provider="google" style={{flex: 1}} />
      {/* <View style={{backgroundColor: 'red', position: 'absolute', top: 50}}>
        <Text>Test</Text>
      </View> */}
      <Loading />
    </SafeAreaView>
  );
};

export default App;
