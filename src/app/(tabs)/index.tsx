import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Easing,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Icon, router } from 'expo-router';
import { Colors } from '../../constants/theme';
import { Header } from '../../components/Header';
import { WhatsAppFloatingButton } from '../../components/WhatsAppFloatingButton';
import { COMPANY_INFO } from '../../constants/pharmaceuticals';
import FastMovingItems from '@/components/FastMovingItems';
import NewlyAddedItems from '@/components/NewlyAddedItems';
import TrustedManufacturers from '@/components/TrustedManufacturers';
import AboutJeplus from '@/components/AboutJeplus';
import HeroSection from '@/components/HeroSection';
import QuickAction from '@/components/QuickAction';
import ImageCarousel from '@/components/ImageCarosel';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
 
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <Header />

      <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
        <HeroSection/>
        <QuickAction/>
        <ImageCarousel/>
        <FastMovingItems />
        <NewlyAddedItems />
        <TrustedManufacturers />
        <AboutJeplus/>
        {/* Company & Warehouse Information */}
        <View style={styles.warehouseCard}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.footerLogo}
            resizeMode="contain"
          />
          <Text style={styles.warehouseTitle}>Jeplus Healthcare Pvt. Ltd.</Text>
          <Text style={styles.warehouseDesc}>
            {COMPANY_INFO.description}
          </Text>

          <View style={styles.warehouseDetailRow}>
            <Ionicons name="location" size={16} color={Colors.brandRed} style={{ marginTop: 2 }} />
            <Text style={styles.warehouseAddress}>{COMPANY_INFO.address}</Text>
          </View>

          <View style={styles.warehouseDetailRow}>
            <Ionicons name="time" size={16} color={Colors.brandBlue} style={{ marginTop: 2 }} />
            <Text style={styles.warehouseAddress}>{COMPANY_INFO.hours}</Text>
          </View>

          <View style={styles.licenseTags}>
            <Text style={styles.licenseBadge}>DL: {COMPANY_INFO.dlNumbers}</Text>
            <Text style={styles.licenseBadge}>GST: {COMPANY_INFO.gstin}</Text>
          </View>

          <TouchableOpacity
            style={styles.contactBtn}
            onPress={() => router.push(`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`)}
            activeOpacity={0.8}
          >
            <Ionicons name="call" size={16} color={Colors.white} style={{ marginRight: 6 }} />
            <Text style={styles.contactBtnText}>Contact Jeplus Support</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* Floating WhatsApp Action */}
      <WhatsAppFloatingButton />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollArea: {
    flex: 1,
    backgroundColor: Colors.slate100,
    padding: 20,
  },
  warehouseCard: {
    margin: 16,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  footerLogo: {
    width: 140,
    height: 38,
    marginBottom: 10,
  },
  warehouseTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.slate950,
    marginBottom: 6,
  },
  warehouseDesc: {
    fontSize: 12,
    color: Colors.slate600,
    lineHeight: 18,
    marginBottom: 14,
  },
  warehouseDetailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  warehouseAddress: {
    flex: 1,
    fontSize: 12,
    color: Colors.slate700,
    lineHeight: 16,
  },
  licenseTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 10,
    marginBottom: 14,
  },
  licenseBadge: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.slate600,
    backgroundColor: Colors.brandIce,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  contactBtn: {
    backgroundColor: Colors.brandRed,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
  },
  contactBtnText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '800',
  },
 
 

});
