import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet, Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon, router } from 'expo-router';
import { Colors } from '../constants/theme';

const { width } = Dimensions.get('window');
export default function QuickAction(){
  return (
    <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Daily Pharmacy Actions</Text>
          <View style={styles.actionGrid}>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => router.push('/(tabs)/catalog')}
              activeOpacity={0.8}
            >
              <View style={styles.actionIconBox}>
                <Ionicons name="search" size={20} color={Colors.brandRed} />
                <Text style={styles.iconTitle}>SEARCH</Text>
              </View>
              <Text style={styles.actionTitle}>Find Medicines</Text>
              <Text style={styles.actionDesc}>Search items and alternative stocks</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => router.push('/(tabs)/bulk')}
              activeOpacity={0.8}
            >
              <View style={styles.actionIconBox}>
                <Ionicons name="cloud-upload" size={20} color={Colors.brandBlue} />
                <Text style={styles.iconTitle}>REPEAT</Text>
              </View>
              <Text style={styles.actionTitle}>Bulk Order</Text>
              <Text style={styles.actionDesc}>Update a list & save time</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => router.push({ pathname: '/(tabs)/catalog', params: { filter: 'fast' } })}
              activeOpacity={0.8}
            >
              <View style={styles.actionIconBox}>
                <Ionicons name="caret-up" size={20} color="#d97706" />
                <Text style={styles.iconTitle}>POPULAR</Text>
              </View>
              <Text style={styles.actionTitle}>Fast Moving</Text>
              <Text style={styles.actionDesc}>Top sellers and quick restocks</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => router.push('/(tabs)/catalog')}
              activeOpacity={0.8}
            >
              <View style={styles.actionIconBox}>
                <Ionicons name="receipt" size={20} color={Colors.brandEmerald} />
                <Text style={styles.iconTitle}>BROWSE</Text>
              </View>
              <Text style={styles.actionTitle}>Categories</Text>
              <Text style={styles.actionDesc}>Browse medicines by category</Text>
            </TouchableOpacity>
          </View>
          {/* Order Tracking Card */}
          <View style={styles.card}>
            {/* Left icon */}
            <View style={styles.iconBox}>
             <Ionicons
              name="cube-outline"
              size={18}
              color="#FFFFFF"
             />
            </View>

      {/* Middle text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Track your order</Text>
        <Text style={styles.subtitle}>Live order status</Text>
      </View>

      {/* Right status */}
      <Text style={styles.deliveryTime}>
        Delivery Under 3 Hrs
      </Text>
    </View>
        </View>
  )
}
const styles = StyleSheet.create({
   sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.slate900,
    marginTop: 2,
  },
  quickActionsContainer: {
    padding: 16,
    backgroundColor: Colors.white, 
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  actionCard: {
    width: (width - 82) / 2,
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: 8,
    borderWidth: 1.5,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  actionIconBox: {
    borderRadius: 10,
    display: 'flex',
    margin: 2,
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.slate900,
    marginBottom: 2,
  },
  actionDesc: {
    fontSize: 11,
    color: Colors.slate500,
    fontWeight: '500',
  },
  card: {
    width: '100%',
    minHeight: 58,
    backgroundColor: '#050817',
    borderRadius: 13,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#202438',
    marginTop: 8,
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#171B2C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  subtitle: {
    color: '#9CA3B8',
    fontSize: 9,
    marginTop: 3,
  },
  deliveryTime: {
    color: '#FF5364',
    fontSize: 8,
    fontWeight: '600',
    marginLeft: 5,
  },
  iconTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.slate600,
    paddingLeft: 4,
    paddingTop: 2,
  },
})