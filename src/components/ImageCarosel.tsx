
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const images = [
  require('../../assets/images/01.jpg'),
  require('../../assets/images/1.jpg'),
  require('../../assets/images/2.jpg'),
  require('../../assets/images/3.jpg'),
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) => 
        (previousIndex + 1) % images.length
      );
    }, 2500); // Change image every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={images[currentIndex]}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 250,
  },
});
