import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Price from 'components/Price';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>First Page</Text>
      <StatusBar style="auto" />
      {/* <Price /> */}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
