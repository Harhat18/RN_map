import {SafeAreaView} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import useFetch from './src/hooks/useFetch';
import Loading from './src/components/Loading';
import UserMarker from './src/components/marker/UserMarker';

const url = 'https://random-data-api.com/api/v2/users?size=20';
const App = () => {
  const {data, loading, error} = useFetch(url);
  console.log({data, loading, error});

  const renderUserMarker = () => {
    return data.map(({id, address: {coordinates}}) => {
      return (
        <Marker
          key={id}
          coordinate={{
            latitude: coordinates.lat,
            longitude: coordinates.lng,
          }}
        />
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView style={{flex: 1}}>{data && renderUserMarker()}</MapView>

      {/* <View style={{backgroundColor: 'red', position: 'absolute', top: 50}}>
        <Text>Test</Text>
      </View> */}
      {loading && <Loading />}
    </SafeAreaView>
  );
};

export default App;
