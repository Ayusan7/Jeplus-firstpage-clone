
import { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  {
    image: require('../../assets/images/cpy1.jpg'),
  },
  {
    image: require('../../assets/images/cpy2.jpg'),
  },
   {
    image: require('../../assets/images/cpy3.jpg'),
  },
];

export default function TrustedManufacturers() {
  const scrollRef = useRef<ScrollView>(null);

  return (
    <View style={styles.container}>
      {/* Section heading */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>TRUSTED MANUFACTURERS</Text>
      </View>

      <Text style={styles.heading}>Featured Brands</Text>

      <View style={styles.headingLine} />

      {/* Static navigation controls */}
      <View style={styles.arrows}>
        <Pressable
          style={styles.arrowButton}
          onPress={() => scrollRef.current?.scrollTo({ x: 0, animated: false })}
        >
          <Ionicons name="chevron-back" size={17} color="#172033" />
        </Pressable>

        <Pressable
          style={styles.arrowButton}
          onPress={() => scrollRef.current?.scrollToEnd({ animated: false })}
        >
          <Ionicons name="chevron-forward" size={17} color="#172033" />
        </Pressable>
      </View>

      {/* Horizontal product cards */}
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      >
        {products.map((product, index) => (
          <View key={index} style={styles.card}>
              <Image
                source={ product.image }
                style={styles.productImage}
                resizeMode="contain"
              />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F9FA',
    paddingTop: 24,
    paddingBottom: 24,
    overflow: 'hidden',
  },
  badge: {
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#E4F7FC',
    borderWidth: 1,
    borderColor: '#BCEBF7',
  },
  badgeText: {
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
  headingLine: {
    height: 1,
    width: 200,
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#FF4663',
  },
  arrows: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 7,
    marginTop: 7,
    marginBottom: 14,
  },
  arrowButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5EAEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productList: {
    paddingHorizontal: 9,
    gap: 10,
  },
  card: {
    height: 150,
    width: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E1E8EC',
  },
  productImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 200,
  },
});
