
import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  {
    brand: 'RANBAXY',
    name: 'MINOZ GEL',
    description: 'RANBAXY · 15GM',
    stock: '3 in stock',
    price: '₹344.00',
    oldPrice: '₹430.00',
    tag: 'New',
    image: require('../../assets/images/product-doodle.svg'),
  },
  {
    brand: 'ALKEM',
    name: 'EMPANORM M 10/1000 TAB',
    description: 'ALKEM · 10TAB',
    stock: 'Out of stock',
    price: '₹89.24',
    oldPrice: '₹111.55',
    tag: 'New',
    image: require('../../assets/images/newmd1.jpg'),
  },
   {
    brand: 'ALKEM',
    name: 'EMPANORM L 10MG TAB',
    description: 'ALKEM · 10TAB',
    stock: 'Out of stock',
    price: '₹114.64',
    oldPrice: '₹143.30',
    tag: 'New',
    image: require('../../assets/images/newmd2.jpg'),
  },
];

export default function NewlyAddedItems() {
  const scrollRef = useRef<ScrollView>(null);
  const { width } = useWindowDimensions();
  const cardWidth = 220;

  return (
    <View style={styles.container}>
      {/* Section heading */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>JUST ARRIVED</Text>
      </View>

      <Text style={styles.heading}>Newly Added Items</Text>

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
          <View key={index} style={[styles.card, { width: cardWidth }]}>
            <View style={styles.productImageArea}>
              <Image
                source={ product.image }
                style={styles.productImage}
                resizeMode="contain"
              />
              <Text style={styles.tag}>{product.tag}</Text>
              <Text style={styles.brand}>{product.brand}</Text>
            </View>

            <Text style={styles.productName} numberOfLines={1}>
              {product.name}
            </Text>
            <Text style={styles.description}>{product.description}</Text>

            <View style={styles.priceRow}>
              <View style={styles.stockBadge}>
                <Text style={styles.stockText}>{product.stock}</Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.oldPrice}>{product.oldPrice}</Text>
              </View>
            </View>

            <View style={styles.cardFooter}>
              <Text style={styles.gst}>PTR incl. GST</Text>
              <Pressable
                style={styles.viewProductButton}
                onPress={() => console.log('View product:', product.name)}
              >
                <Text style={styles.viewProductText}>View Product</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* View all */}
      <Pressable
        style={styles.viewAllButton}
        onPress={() => console.log('View all products')}
      >
        <Text style={styles.viewAllText}>View all</Text>
        <Ionicons name="arrow-forward" size={14} color="#263449" />
      </Pressable>
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
    height: 190,
    width: 168,
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#E1E8EC',
    padding: 9,
  },
  productImageArea: {
    height: 54,
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  tag: {
    position: 'absolute',
    right: 3,
    top: 3,
    color: '#008AD8',
    fontSize: 8,
    fontWeight: '700',
  },
  brand: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    fontSize: 9,
    color: '#31415D',
    fontWeight: '700',
  },
  productName: {
    color: '#17253D',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 5,
  },
  description: {
    fontSize: 9,
    color: '#5B7390',
    marginTop: 3,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 9,
  },
  stockBadge: {
    backgroundColor: '#E4FBF2',
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 10,
  },
  stockText: {
    fontSize: 8,
    color: '#079C78',
    fontWeight: '700',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  price: {
    color: '#182239',
    fontSize: 10,
    fontWeight: '800',
  },
  oldPrice: {
    color: '#8C9BAE',
    fontSize: 8,
    textDecorationLine: 'line-through',
  },
  cardFooter: {
    marginTop: 'auto',
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: '#F0F3F5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gst: {
    color: '#8194A9',
    fontSize: 8,
  },
  viewProductButton: {
    backgroundColor: '#070D20',
    borderRadius: 12,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  viewProductText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '700',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E4E9ED',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 7,
  },
  viewAllText: {
    color: '#182239',
    fontSize: 9,
    fontWeight: '700',
  },
});
