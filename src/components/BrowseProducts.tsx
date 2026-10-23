
import { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  {
    text: 'Adult Nutrition',
    image: require('../../assets/images/bycat1.jpg'),
  },
  {
    text: 'Anti Infectives',
    image: require('../../assets/images/bycat2.jpg'),
  },
   {
    text : 'Baby Care',
    image: require('../../assets/images/bycat3.jpg'),
  },
];

export default function BrowseProducts() {
  const scrollRef = useRef<ScrollView>(null);

  return (
    <View style={styles.container}>
      {/* Section heading */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>BROWSE PRODUCTS</Text>
      </View>

      <Text style={styles.heading}>Shop by Category</Text>

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
          <Pressable key={index} style={styles.card}>
              <Image
                source={ product.image }
                style={styles.productImage}
                resizeMode="contain"
              />
              <Text> {product.text} </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* View all */}
            <Pressable
              style={styles.viewAllButton}
              onPress={() => console.log('View all products')}
            >
              <Text style={styles.viewAllText}>View all categories</Text>
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
    gap: 40,
  },
  card: {
    height: 200,
    width: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  productImage: {
    width: 130,
    height: 130,
    margin: 10,
    alignSelf: 'center',
    borderRadius: 10,
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
    fontSize: 12,
    fontWeight: '700',
  },
});
