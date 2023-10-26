import { StatusBar, StyleSheet, View } from 'react-native'
import Calculator from './src/components/Calculator/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
})
