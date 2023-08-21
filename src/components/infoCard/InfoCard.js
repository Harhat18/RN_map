import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './InfoCard.style';

const InfoCard = ({visibile, close, user}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={visibile}
      swipeDirection="down"
      onSwipeComplete={close}
      onBackdropPress={close}
      onBackButtonPress={close}
      backdropOpacity={0.2}>
      <View style={styles.container}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.fullname}>
          {user.first_name} {user.last_name}
        </Text>

        <SafeAreaView style={styles.safeArea} />
      </View>
    </Modal>
  );
};

export default InfoCard;
