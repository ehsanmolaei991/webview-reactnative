import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import WebView from 'react-native-webview';

export default function HomeScreen() {
  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ uri: 'https://app.balinex.com/v2/login' }}
      // source={{ html: '<h1><center>Hello world</center></h1>' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
