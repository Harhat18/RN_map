const {StyleSheet} = require('react-native');

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  safeArea: {
    flex: 0,
    backgroundColor: 'white',
  },

  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  fullname: {
    fontSize: 16,
  },
});
