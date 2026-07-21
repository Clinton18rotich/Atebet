import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Colors from '../../theme/colors';

/**
 * MabwaitaScreen — The East-Facing Opening
 * 
 * Based on Chapter 27: The Sacred Directions
 * 
 * This is the first screen the user sees each day.
 * It faces East (Kong'asis), the direction of God (Asis),
 * health, life, and prosperity (Sopondo).
 * 
 * It displays:
 * - A sunrise visual
 * - The daily proverb
 * - The user's hearth fire status
 * - No gamification — a moment of stillness before learning
 */

interface MabwaitaScreenProps {
  streakDays: number;
  dailyProverb: {
    kipsigis: string;
    english: string;
    meaning?: string;
  };
  onContinue: () => void;
}

const MabwaitaScreen: React.FC<MabwaitaScreenProps> = ({
  streakDays,
  dailyProverb,
  onContinue,
}) => {
  const [sunOpacity] = useState(new Animated.Value(0));
  const [fireScale] = useState(new Animated.Value(0.8));

  useEffect(() => {
    // Animate sunrise
    Animated.timing(sunOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Animate fire pulse
    Animated.loop(
      Animated.sequence([
        Animated.timing(fireScale, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fireScale, {
          toValue: 0.8,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const getFireColor = (days: number): string => {
    if (days >= 30) return Colors.fireBlazing;
    if (days >= 7) return Colors.fireWarm;
    if (days >= 1) return Colors.fireEmber;
    return Colors.fireCold;
  };

  const getFireMessage = (days: number): string => {
    if (days >= 30) return 'The hearth blazes strong.';
    if (days >= 7) return 'The fire burns steadily.';
    if (days >= 1) return 'The embers glow.';
    return 'The hearth is cold. Return to light it.';
  };

  return (
    <View style={styles.container}>
      {/* East — The Sunrise */}
      <View style={styles.eastSection}>
        <Animated.View
          style={[
            styles.sun,
            {
              opacity: sunOpacity,
              backgroundColor: Colors.east,
            },
          ]}
        />
        <Text style={styles.directionLabel}>Kong'asis</Text>
        <Text style={styles.directionMeaning}>
          Health, Life, Prosperity
        </Text>
      </View>

      {/* The Proverb */}
      <View style={styles.proverbSection}>
        <Text style={styles.proverbKipsigis}>
          {dailyProverb.kipsigis}
        </Text>
        <Text style={styles.proverbEnglish}>
          {dailyProverb.english}
        </Text>
        {dailyProverb.meaning && (
          <Text style={styles.proverbMeaning}>
            {dailyProverb.meaning}
          </Text>
        )}
      </View>

      {/* The Hearth Fire */}
      <View style={styles.fireSection}>
        <Animated.Text
          style={[
            styles.fireIcon,
            {
              color: getFireColor(streakDays),
              transform: [{ scale: fireScale }],
            },
          ]}
        >
          🔥
        </Animated.Text>
        <Text style={styles.fireMessage}>
          {getFireMessage(streakDays)}
        </Text>
        <Text style={styles.streakCount}>
          {streakDays} {streakDays === 1 ? 'day' : 'days'}
        </Text>
      </View>

      {/* Continue Button */}
      <View style={styles.continueSection}>
        <Text style={styles.continueText} onPress={onContinue}>
          Enter the House →
        </Text>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Atebetab Piikab Kutit — The Behaviour of the People of the Mouth
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  eastSection: {
    alignItems: 'center',
  },
  sun: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  directionLabel: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.text,
    fontStyle: 'italic',
  },
  directionMeaning: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  proverbSection: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  proverbKipsigis: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.text,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  proverbEnglish: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 4,
  },
  proverbMeaning: {
    fontSize: 13,
    color: Colors.textMuted,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  fireSection: {
    alignItems: 'center',
  },
  fireIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  fireMessage: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  streakCount: {
    fontSize: 14,
    color: Colors.textMuted,
  },
  continueSection: {
    alignItems: 'center',
  },
  continueText: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: '500',
  },
  footer: {
    fontSize: 11,
    color: Colors.textMuted,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default MabwaitaScreen;
