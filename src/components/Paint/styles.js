import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "blue"
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'yellow'
  },
  canvas: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  lineContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});