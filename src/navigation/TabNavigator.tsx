import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import MabwaitaScreen from '../screens/MabwaitaScreen';
import KotScreen from '../screens/KotScreen';
import TugaScreen from '../screens/TugaScreen';

const Tab = createBottomTabNavigator();

const TabIcon: React.FC<{ label: string; kipsigis: string; color: string }> = ({
  label,
  kipsigis,
  color,
}) => (
  <View style={styles.iconContainer}>
    <Text style={[styles.iconKipsigis, { color }]}>{kipsigis}</Text>
    <Text style={[styles.iconLabel, { color }]}>{label}</Text>
  </View>
);

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#3B2314',
          borderTopColor: '#5C4033',
          height: 72,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#E8751A',
        tabBarInactiveTintColor: '#8B6F5E',
      }}
    >
      <Tab.Screen
        name="Mabwaita"
        component={MabwaitaScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon label="Altar" kipsigis="Mabwaita" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Kot"
        component={KotScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon label="House" kipsigis="Kot" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tuga"
        component={TugaScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon label="Cattle" kipsigis="Tuga" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chepalungu"
        component={View}
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon label="Music" kipsigis="Chepalungu" color={color} />
          ),
        }}
      >
        {() => (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderTitle}>Chepalungu — The Music</Text>
            <Text style={styles.placeholderSub}>Coming soon</Text>
          </View>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Kokwet"
        component={View}
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon label="Community" kipsigis="Kokwet" color={color} />
          ),
        }}
      >
        {() => (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderTitle}>Kokwet — The Community</Text>
            <Text style={styles.placeholderSub}>Coming soon</Text>
          </View>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconKipsigis: {
    fontSize: 11,
    fontWeight: '700',
  },
  iconLabel: {
    fontSize: 9,
    marginTop: 2,
  },
  placeholder: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3B2314',
  },
  placeholderSub: {
    fontSize: 14,
    color: '#8B6F5E',
    marginTop: 8,
  },
});

export default TabNavigator;
