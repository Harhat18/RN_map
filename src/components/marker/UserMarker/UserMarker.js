import React from 'react';
import {View, Image} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './UserMarker.style';

const UserMarker = ({coordinates, userImageURL}) => {
  return (
    <Marker coordinate={coordinates}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: userImageURL}}></Image>
      </View>
    </Marker>
  );
};

export default UserMarker;
