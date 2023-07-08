import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Item from 'components/Item';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>First Page</Text>
      <StatusBar style="auto" />
      {/* <Item /> */}
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
