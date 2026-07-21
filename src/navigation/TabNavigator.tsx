import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import MabwaitaScreen from '../screens/MabwaitaScreen';
import KotScreen from '../screens/KotScreen';
import TugaScreen from '../screens/TugaScreen';
import ChepalunguScreen from '../screens/ChepalunguScreen';
import KokwetScreen from '../screens/KokwetScreen';
import OretScreen from '../screens/OretScreen';

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
        component={ChepalunguScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon label="Music" kipsigis="Chepalungu" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Kokwet"
        component={KokwetScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon label="Community" kipsigis="Kokwet" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Oret"
        component={OretScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabIcon label="Lore" kipsigis="Oret" color={color} />
          ),
        }}
      />
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
});

export default TabNavigator;
