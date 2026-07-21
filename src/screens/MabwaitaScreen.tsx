import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { getDailyProverb, Proverb } from '../data/proverbs/index';
import { Greetings, getTimeBasedContext } from '../data/grammar/greetings';
import { TemporalDeictics } from '../data/grammar/deictics';

const { width } = Dimensions.get('window');

const MabwaitaScreen: React.FC = () => {
  const [proverb, setProverb] = useState<Proverb | null>(null);
  const [greeting, setGreeting] = useState('');
  const [timeContext, setTimeContext] = useState<string>('');

  useEffect(() => {
    const dailyProverb = getDailyProverb();
    setProverb(dailyProverb);

    const context = getTimeBasedContext();
    setTimeContext(context);

    if (context === 'morning') {
      setGreeting('Subui');
    } else if (context === 'afternoon') {
      setGreeting('Chamgee');
    } else {
      setGreeting('Chamgee');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* East-facing header — sacred direction */}
      <View style={styles.eastHeader}>
        <Text style={styles.eastText}>Kong'asis — East</Text>
      </View>

      {/* Greeting */}
      <View style={styles.greetingSection}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.timeContext}>
          {timeContext === 'morning' && 'Ko-ech — Light has started showing'}
          {timeContext === 'afternoon' && 'Korya — After noon'}
          {timeContext === 'evening' && "Ko imen — Darkness begins to appear"}
        </Text>
      </View>

      {/* Daily Proverb */}
      {proverb && (
        <View style={styles.proverbSection}>
          <Text style={styles.proverbLabel}>Kalewenet — Proverb of the Day</Text>
          <Text style={styles.proverbKipsigis}>{proverb.kipsigis}</Text>
          <Text style={styles.proverbEnglish}>{proverb.english}</Text>
          <Text style={styles.proverbMeaning}>{proverb.meaning}</Text>
        </View>
      )}

      {/* The Fire — Daily Streak */}
      <View style={styles.fireSection}>
        <Text style={styles.fireLabel}>Koitab Maa — The Hearth</Text>
        <Text style={styles.fireText}>
          "Mein mat" is never spoken here.
        </Text>
        <Text style={styles.fireText}>
          The fire burns. The ancestors are present.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Atebetab Piikab Kutit — The Behaviour of the People of the Mouth
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  eastHeader: {
    backgroundColor: '#E8751A',
    padding: 12,
    alignItems: 'center',
  },
  eastText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  greetingSection: {
    padding: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0D0C0',
  },
  greeting: {
    fontSize: 36,
    fontWeight: '700',
    color: '#3B2314',
  },
  timeContext: {
    fontSize: 14,
    color: '#8B6F5E',
    marginTop: 8,
    fontStyle: 'italic',
  },
  proverbSection: {
    margin: 16,
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#E8751A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  proverbLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8B6F5E',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  proverbKipsigis: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3B2314',
    lineHeight: 28,
    marginBottom: 8,
  },
  proverbEnglish: {
    fontSize: 14,
    color: '#5C4033',
    lineHeight: 20,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  proverbMeaning: {
    fontSize: 13,
    color: '#8B6F5E',
    lineHeight: 18,
  },
  fireSection: {
    margin: 16,
    padding: 20,
    backgroundColor: '#3B2314',
    borderRadius: 12,
    alignItems: 'center',
  },
  fireLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E8751A',
    marginBottom: 8,
  },
  fireText: {
    fontSize: 13,
    color: '#D4C4B0',
    textAlign: 'center',
    lineHeight: 18,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: 11,
    color: '#B0A090',
    fontStyle: 'italic',
  },
});

export default MabwaitaScreen;
