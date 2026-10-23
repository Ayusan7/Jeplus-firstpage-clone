import { Tabs } from 'expo-router';
import { View, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../constants/theme';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.brandRed,
        tabBarInactiveTintColor: Colors.slate400,
        tabBarStyle: [
          styles.tabBar,
          {
            height: 56 + insets.bottom,
            paddingBottom: Math.max(insets.bottom, 8),
          },
        ],
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="catalog"
        options={{
          title: 'Medicines',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'medkit' : 'medkit-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="bulk"
        options={{
          title: 'Bulk Order',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.bulkIconWrapper}>
              <Ionicons
                name={focused ? 'flash' : 'flash-outline'}
                size={22}
                color={focused ? Colors.brandRed : Colors.slate600}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="ledger"
        options={{
          title: 'Dues & PDC',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'wallet' : 'wallet-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.borderLight,
    height: 56,
    paddingBottom: 8,
    paddingTop: 6,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: '700',
  },
  tabBarItem: {
    paddingVertical: 2,
  },
  bulkIconWrapper: {
    padding: 2,
  },
});
