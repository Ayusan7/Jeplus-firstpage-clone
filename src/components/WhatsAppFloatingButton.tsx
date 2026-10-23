import React from 'react';
import { TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';
import { COMPANY_INFO } from '../constants/pharmaceuticals';

export const WhatsAppFloatingButton: React.FC = () => {
  const handlePress = async () => {
    try {
      const url = COMPANY_INFO.whatsappLink;
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        await Linking.openURL(`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`);
      }
    } catch {
      // fallback
    }
  };

  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={handlePress}
      activeOpacity={0.85}
    >
      <Ionicons name="logo-whatsapp" size={28} color={Colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#25D366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#25D366',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
    zIndex: 999,
  },
});
