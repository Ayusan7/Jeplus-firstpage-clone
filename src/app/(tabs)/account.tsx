import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/theme';
import { Header } from '../../components/Header';
import { WhatsAppFloatingButton } from '../../components/WhatsAppFloatingButton';

export default function AccountScreen() {

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <Header />

      <View style={styles.content}>
        <Text >
        This is an account section
        </Text>
      </View>

      <WhatsAppFloatingButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content : {
    margin: 'auto',
  }
});
