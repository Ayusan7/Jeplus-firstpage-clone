
import { useRef , useEffect} from 'react';
import {View,Text, StyleSheet, Easing} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Colors } from '../constants/theme';
import {Animated, TouchableOpacity} from 'react-native';
export default function HeroSection() {
  const scale = useRef(new Animated.Value(1)).current;
 
   useEffect(() => {
     const animation = Animated.loop(
       Animated.sequence([
         Animated.timing(scale, {
           toValue: 1.07,
           duration: 700,
           easing: Easing.inOut(Easing.ease),
           useNativeDriver: true,
         }),
         Animated.timing(scale, {
           toValue: 0.96,
           duration: 700,
           easing: Easing.inOut(Easing.ease),
           useNativeDriver: true,
         }),
       ])
     );
 
     animation.start();
 
     return () => animation.stop();
   }, [scale]);
 
  return (
    
<View style={styles.heroSection}>
          <View style={styles.heroBadge}>
            <Ionicons name="shield-checkmark" size={13} color={Colors.brandRed} />
            <Text style={styles.heroBadgeText}>Pharma Distributor for Chemists</Text>
          </View>

          <Text style={styles.heroTitle}>
            Order faster.{'\n'}
            <Text style={styles.heroHighlight}>Restock smarter.</Text>
          </Text>

          <Text style={styles.heroSubtitle}>
            Medicines, generics, surgical, ayurvedic and speciality items for your pharmacy.
          </Text>
          <View style={styles.container}>
      {/* Animated Place Order button */}
      <Animated.View style={{ transform: [{ scale }] }}>
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => console.log('Place Order pressed')}  >
          <Text style={styles.orderText}>Place Order</Text>
          <Ionicons name="arrow-forward" size={15} color="#FFFFFF" />
        </TouchableOpacity>
      </Animated.View>

      {/* Register Chemist button */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => console.log('Register Chemist pressed')}
      >
        <Text style={styles.registerText}>Register Chemist</Text>
        <Ionicons name="add" size={17} color="#00AEEF" />
      </TouchableOpacity>
    </View>

          {/* Key Stats Bar */}
          <View style={styles.statsBarContainer}>
            <View style={styles.statsBar}>
              <Text style={styles.statNumber}>25000+</Text>
              <Text style={styles.statLabel}>SKILLS</Text>
            </View>
            <View style={styles.statsBar}>
              <Text style={styles.statNumber}>350+</Text>
              <Text style={styles.statLabel}>BRANDS</Text>
            </View>
            <View style={styles.statsBar}>
              <Text style={styles.statNumber}>1000+</Text>
              <Text style={styles.statLabel}>CHEMISTS</Text>
            </View>
          </View>
          {/* Second key Stats Bar */}
          <View style={styles.secondstatsBarContainer}>
            <View style={styles.secondstatsBar}>
              <Text style={styles.secondstatNumber}>1000+</Text>
              <Text style={styles.secondstatLabel}> chemists</Text>
            </View>
            <View style={styles.secondstatsBar}>
              <Text style={styles.secondstatNumber}>with</Text>
              <Text style={styles.secondstatLabel}> Jeplus</Text>
            </View>
            <View style={styles.secondstatsBar}>
              <Text style={styles.secondstatNumber}>daily</Text>
              <Text style={styles.secondstatLabel}> supply</Text>
            </View>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  heroSection: {
    backgroundColor: Colors.white,
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius:20,
    borderTopLeftRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.brandRedLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 10,
  },
  heroBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.brandRed,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.slate950,
    lineHeight: 34,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  heroHighlight: {
    color: Colors.brandRed,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 13,
    color: Colors.slate600,
    lineHeight: 18,
    marginTop: 8,
    marginBottom: 16,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
  },
   registerButton: {
    height: 36,
    paddingHorizontal: 15,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E1E8F0',
    backgroundColor: 'rgba(255,255,255,0.65)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  registerText: {
    color: '#273244',
    fontSize: 11,
    fontWeight: '500',
  }, 
  statsBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 10,
  },
  secondstatsBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 10,
  },
  secondstatsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.brandIce,
    borderRadius: 14,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  secondstatNumber: {
    fontSize: 13,
    fontWeight: '800',
    color: Colors.slate600,
  },
  secondstatLabel: {
    fontSize: 10,
    color: Colors.brandBlueDark,
    fontWeight: '600',
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 10,
    fontWeight: '800',
    color: Colors.brandRed,
    letterSpacing: 0.8,
  },
 orderButton: {
    height: 36,
    paddingHorizontal: 17,
    borderRadius: 22,
    backgroundColor: '#071126',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    borderWidth: 1,
    borderColor: '#27354F',
  },
  orderText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
   statsBar: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.brandIce,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 13,
    fontWeight: '800',
    color: Colors.slate900,
  },
  statLabel: {
    fontSize: 10,
    color: Colors.slate500,
    fontWeight: '600',
    marginTop: 2,
  },
});


