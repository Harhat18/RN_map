import {SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import MapView from 'react-native-maps';
import useFetch from './src/hooks/useFetch';
import Loading from './src/components/Loading';
import UserMarker from './src/components/marker/UserMarker';
import InfoCard from './src/components/infoCard';

const url = 'https://random-data-api.com/api/v2/users?size=30';
const App = () => {
  const [user, setUser] = useState();
  const [infoModalVisiblity, setInfoModalVisiblity] = useState(false);

  const mapRef = useRef(null);
  const {data, loading, error} = useFetch(url);

  const renderUserMarker = () => {
    return data.map(
      ({
        id,
        first_name,
        last_name,
        username,
        avatar,
        address: {coordinates},
      }) => {
        return (
          <UserMarker
            key={id}
            coordinates={{
              latitude: coordinates.lat,
              longitude: coordinates.lng,
            }}
            userImageURL={avatar}
            onSelect={() =>
              handleMarkerSelect(coordinates, {first_name, last_name, username})
            }
          />
        );
      },
    );
  };

  function handleMarkerSelect(coor, selectedUser) {
    setUser(selectedUser);
    handleModalVisibility();
    mapRef.current.animateToRegion({
      latitude: coor.lat,
      longitude: coor.lng,
      latitudeDelta: 8,
      longitudeDelta: 8,
    });
  }

  function handleModalVisibility() {
    setInfoModalVisiblity(!infoModalVisiblity);
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView ref={mapRef} style={{flex: 1}}>
        {data && renderUserMarker()}
      </MapView>

      {/* <View style={{backgroundColor: 'red', position: 'absolute', top: 50}}>
        <Text>Test</Text>
      </View> */}
      {loading && <Loading />}
      {user && (
        <InfoCard
          visibile={infoModalVisiblity}
          close={handleModalVisibility}
          user={user}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
