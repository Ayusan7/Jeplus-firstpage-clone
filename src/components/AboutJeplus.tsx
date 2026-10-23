
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import Svg, { Rect, Path, Circle } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';

const features = [
  {
    title: 'Genuine Supply',
    description: 'Reliable medicines from trusted pharma brands.',
    icon: 'shield-checkmark-outline',
    color: '#32B9F2',
  },
  {
    title: 'Fast Dispatch',
    description: 'Designed for urgent chemist restocking needs.',
    icon: 'car-outline',
    color: '#FF9D5C',
  },
  {
    title: 'Clear Records',
    description: 'Track invoices, billed quantity, and order status.',
    icon: 'receipt-outline',
    color: '#18C9A4',
  },
  {
    title: 'Digital Ordering',
    description: 'Search, reorder, and manage stock from app or web.',
    icon: 'phone-portrait-outline',
    color: '#A879FF',
  },
];

const stats = [
  { value: '2018', label: 'Established' },
  { value: '25000+', label: 'SKUs' },
  { value: '3 Hrs', label: 'Delivery promise' },
  { value: '1000+', label: 'Chemists' },
  { value: '350+', label: 'Brands' },
  { value: '10+', label: 'Years of experience' },
];

function FeatureIllustration({
  color,
  type,
}: {
  color: string;
  type: string;
}) {
  return (
    <View style={styles.illustration}>
      <Svg width="100%" height="100%" viewBox="0 0 100 100">
        <Rect
          x="28"
          y="8"
          width="34"
          height="31"
          rx="10"
          stroke={color}
          strokeWidth="1"
          opacity={0.38}
          fill="none"
          transform="rotate(10 45 24)"
        />
        <Rect
          x="18"
          y="22"
          width="65"
          height="65"
          rx="24"
          stroke={color}
          strokeWidth="1"
          opacity={0.22}
          fill="none"
          transform="rotate(-12 50 54)"
        />
        <Circle
          cx="72"
          cy="72"
          r="19"
          stroke={color}
          strokeWidth="1"
          opacity={0.28}
          fill="none"
        />

        {type === 'shield' && (
          <>
            <Path
              d="M50 43 L64 49 V60 Q64 70 50 78 Q36 70 36 60 V49 Z"
              fill={color}
              opacity={0.12}
              stroke={color}
              strokeWidth="3"
            />
            <Path
              d="M43 59 L48 64 L58 53"
              stroke={color}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}

        {type === 'car' && (
          <>
            <Path
              d="M32 58 L37 46 H62 L69 58 V72 H32 Z"
              fill={color}
              opacity={0.12}
              stroke={color}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <Path
              d="M39 47 L42 58 H64 M32 63 H69"
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
            <Circle cx="41" cy="72" r="5" fill="#F3F7FC" stroke={color} strokeWidth="2" />
            <Circle cx="61" cy="72" r="5" fill="#F3F7FC" stroke={color} strokeWidth="2" />
          </>
        )}

        {type === 'records' && (
          <>
            <Rect
              x="34"
              y="39"
              width="32"
              height="39"
              rx="5"
              fill={color}
              opacity={0.12}
              stroke={color}
              strokeWidth="3"
            />
            <Path
              d="M42 51 H58 M42 59 H58 M42 67 H54"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </>
        )}

        {type === 'phone' && (
          <>
            <Rect
              x="39"
              y="38"
              width="24"
              height="43"
              rx="5"
              fill={color}
              opacity={0.12}
              stroke={color}
              strokeWidth="3"
            />
            <Path
              d="M47 45 H55"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <Circle cx="51" cy="74" r="1.5" fill={color} />
          </>
        )}
      </Svg>
    </View>
  );
}

export default function AboutJeplus() {
  const { width } = useWindowDimensions();
  const horizontalPadding = 12;
  const gap = 9;
  const cardWidth = (width - horizontalPadding * 2 - gap) / 2;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* About heading */}
      <View style={styles.aboutBadge}>
        <Text style={styles.aboutBadgeText}>ABOUT JEPLUS</Text>
      </View>

      <Text style={styles.heading}>
        Built for daily pharmacy{"\n"}supply
      </Text>

      {/* Actions */}
      <View style={styles.actions}>
        <Pressable
          style={styles.knowMoreButton}
          onPress={() => console.log('Know More pressed')}
        >
          <Text style={styles.knowMoreText}>Know More</Text>
        </Pressable>

        <Pressable
          style={styles.startOrderButton}
          onPress={() => console.log('Start Order pressed')}
        >
          <Text style={styles.startOrderText}>Start Order</Text>
        </Pressable>
      </View>

      {/* Feature cards */}
      <View style={styles.featureList}>
        {features.map((feature, index) => (
          <View
            key={feature.title}
            style={[
              styles.featureCard,
              {
                width: cardWidth,
                backgroundColor: '#F1F6FC',
              },
              // Use a full-width card, as in the reference
              { width: width - horizontalPadding * 5 },
            ]}
          >
            <View style={styles.featureTextContent}>
              <View style={styles.featureIcon}>
                <Ionicons
                  name={feature.icon as any}
                  size={17}
                  color={feature.color}
                />
              </View>

              <Text style={styles.featureTitle}>{feature.title}</Text>

              <Text style={styles.featureDescription}>
                {feature.description}
              </Text>
            </View>

            <FeatureIllustration
              color={feature.color}
              type={['shield', 'car', 'records', 'phone'][index]}
            />
          </View>
        ))}
      </View>

      {/* Statistics */}
      <View style={styles.statsGrid}>
        {stats.map((stat) => (
          <View key={stat.label} style={styles.statCard}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#F5F9FA',
    paddingTop: 24,
    paddingBottom: 24,
    overflow: 'hidden',
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 30,
  },
  aboutBadge: {
 alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#E4F7FC',
    borderWidth: 1,
    borderColor: '#BCEBF7',
  },
  aboutBadgeText: {
    color: '#EF4560',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  heading: {
     textAlign: 'center',
    marginTop: 10,
    color: '#0D1B32',
    fontSize: 24,
    fontWeight: '800',
  },
  actions: {
     flexDirection: 'row',
    justifyContent: 'center',
    gap: 17,
    marginTop: 17,
    marginBottom: 14,
  },
  knowMoreButton: {
    height: 30,
    minWidth: 77,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF5B65',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  knowMoreText: {
    color: '#FF4B57',
    fontSize: 9,
    fontWeight: '600',
  },
  startOrderButton: {
    height: 30,
    minWidth: 76,
    paddingHorizontal: 14,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#050B1D',
    elevation: 2,
  },
  startOrderText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  featureList: {
    gap: 9,
  },
  featureCard: {
    minHeight: 107,
    borderRadius: 12,
    padding: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    position: 'relative',
  },
  featureTextContent: {
    flex: 1,
    zIndex: 1,
    alignItems: 'flex-start',
  },
  featureIcon: {
    width: 26,
    height: 26,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
    elevation: 1,
  },
  featureTitle: {
    color: '#17243B',
    fontSize: 10,
    fontWeight: '700',
  },
  featureDescription: {
    color: '#566B86',
    fontSize: 8,
    lineHeight: 12,
    marginTop: 5,
    maxWidth: 170,
  },
  illustration: {
    position: 'absolute',
    width: 104,
    height: 100,
    right: 3,
    top: 3,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 7,
    marginTop: 36,
  },
  statCard: {
    width: '49%',
    minHeight: 65,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#E1E8F1',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  statValue: {
    fontSize: 15,
    color: '#FF5269',
    fontWeight: '800',
  },
  statLabel: {
    color: '#64748B',
    fontSize: 8,
    marginTop: 5,
    textAlign: 'center',
  },
});
