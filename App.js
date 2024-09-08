import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteudo';

export default function App() {
  return (
    <View style={styles.container}>
      <Topo />
      <Conteudo />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
