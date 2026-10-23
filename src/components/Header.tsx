import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '../constants/theme';



export function Header (){

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
          <View style={styles.brandContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

        <View style={styles.actionsContainer}>
          {/* Triple line i.e; menu button */}
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => router.push('/(tabs)/account')}
            activeOpacity={0.8}
          >
            <Ionicons name="menu" size={24} color={Colors.slate800} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 110,
    height: 34,
  },
  b2bTag: {
    backgroundColor: Colors.brandRedLight,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  b2bText: {
    fontSize: 9,
    fontWeight: '800',
    color: Colors.brandRed,
    letterSpacing: 0.5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.slate900,
  },
  backButton: {
    padding: 6,
    marginRight: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.brandIce,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    maxWidth: 140,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.slate800,
    marginHorizontal: 4,
  },
  cartButton: {
    position: 'relative',
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.slate100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadge: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: Colors.brandRed,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderWidth: 1.5,
    borderColor: Colors.white,
  },
  cartBadgeText: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: '800',
  },
  menuButton: {
    padding: 6,
  },
});
