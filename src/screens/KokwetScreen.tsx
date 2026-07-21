import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { ArchiveClans, Clan } from '../data/clans/index';
import { AgeSetChronology, AgeSet } from '../data/ceremonies/agesets';
import { SacredDirections, Worldview, HouseMicrocosm } from '../data/ceremonies/sacred';

type KokwetTab = 'identity' | 'clans' | 'agesets' | 'sacred';

const KokwetScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<KokwetTab>('identity');

  const tabs: { key: KokwetTab; title: string; kipsigis: string }[] = [
    { key: 'identity', title: 'Identity', kipsigis: 'Oret' },
    { key: 'clans', title: 'Clans', kipsigis: 'Ortinwek' },
    { key: 'agesets', title: 'Age Sets', kipsigis: 'Ipinda' },
    { key: 'sacred', title: 'Sacred', kipsigis: 'Pitet' },
  ];

  const currentAgeSet = AgeSetChronology.find(
    (a) => a.startYear && a.startYear <= new Date().getFullYear() && (!a.endYear || a.endYear >= new Date().getFullYear())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kokwet</Text>
        <Text style={styles.headerSub}>The Community — Piikab Kutit</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabRow}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, activeTab === tab.key && styles.activeTab]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text style={[styles.tabText, activeTab === tab.key && styles.activeTabText]}>
              {tab.title}
            </Text>
            <Text style={styles.tabKipsigis}>{tab.kipsigis}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content}>
        {/* Identity — Self-Introduction */}
        {activeTab === 'identity' && (
          <View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Self-Introduction Formula</Text>
              <Text style={styles.formulaText}>
                "Orenyun ko [Paternal Clan],{'\n'}
                anue [Maternal Clan],{'\n'}
                ak agan [Marital Clan]."
              </Text>
              <Text style={styles.formulaMeaning}>
                "My clan is [X], my mother's clan is [Y], and I married into [Z]."
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Woman's Three Clans</Text>
              {[
                { kps: 'Kisikwon + oret', eng: 'I was born to this clan (father)' },
                { kps: 'Anue + oret', eng: 'My mother was born from this clan' },
                { kps: 'Komutan + oret', eng: 'I was taken to this clan (husband)' },
              ].map((item, i) => (
                <View key={i} style={styles.identityRow}>
                  <Text style={styles.identityKps}>{item.kps}</Text>
                  <Text style={styles.identityEng}>{item.eng}</Text>
                </View>
              ))}
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>The People of the Mouth</Text>
              <Text style={styles.worldviewKps}>{Worldview.selfName.kipsigis}</Text>
              <Text style={styles.worldviewEng}>{Worldview.selfName.english}</Text>
              <Text style={styles.worldviewMeaning}>{Worldview.selfName.meaning}</Text>
            </View>
          </View>
        )}

        {/* Clans */}
        {activeTab === 'clans' && (
          <View>
            <Text style={styles.sectionTitle}>The 39 Clans</Text>
            <Text style={styles.sectionSub}>Each clan has a totem (tiondo) and marriage within the same clan is forbidden.</Text>
            {ArchiveClans.map((clan, i) => (
              <View key={i} style={styles.clanRow}>
                <Text style={styles.clanNumber}>{i + 1}</Text>
                <Text style={styles.clanName}>{clan.name}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Age Sets */}
        {activeTab === 'agesets' && (
          <View>
            {currentAgeSet && (
              <View style={styles.currentCard}>
                <Text style={styles.currentLabel}>Current Age Set</Text>
                <Text style={styles.currentName}>{currentAgeSet.name}</Text>
                <Text style={styles.currentYears}>
                  {currentAgeSet.startYear}–{currentAgeSet.endYear || 'Present'}
                </Text>
              </View>
            )}

            <Text style={styles.sectionTitle}>Complete Chronology (1783–Present)</Text>
            {AgeSetChronology.map((ageSet, i) => (
              <View key={i} style={styles.ageSetRow}>
                <View style={styles.ageSetLeft}>
                  <Text style={styles.ageSetName}>{ageSet.name}</Text>
                  {ageSet.subSets && (
                    <Text style={styles.ageSetSubs}>{ageSet.subSets.join(', ')}</Text>
                  )}
                </View>
                <View style={styles.ageSetRight}>
                  <Text style={styles.ageSetYears}>
                    {ageSet.startYear}–{ageSet.endYear || 'Present'}
                  </Text>
                  <Text style={styles.ageSetDuration}>
                    {ageSet.durationYears ? `${ageSet.durationYears} yrs` : ''}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Sacred */}
        {activeTab === 'sacred' && (
          <View>
            <Text style={styles.sectionTitle}>Sacred Directions</Text>
            {Object.entries(SacredDirections).map(([key, dir]) => (
              <View key={key} style={styles.card}>
                <Text style={styles.cardTitle}>{dir.kipsigis} — {dir.english}</Text>
                <Text style={styles.cardMeaning}>{dir.meaning}</Text>
                {dir.rules && dir.rules.map((rule, i) => (
                  <Text key={i} style={styles.ruleItem}>• {rule}</Text>
                ))}
              </View>
            ))}

            <Text style={[styles.sectionTitle, { marginTop: 24 }]}>The House as Microcosm</Text>
            {Object.entries(HouseMicrocosm).map(([key, item]) => (
              <View key={key} style={styles.microRow}>
                <Text style={styles.microKps}>{item.kipsigis}</Text>
                <Text style={styles.microEng}>{item.english}</Text>
                <Text style={styles.microMeaning}>{item.meaning}</Text>
              </View>
            ))}

            <View style={[styles.card, { marginTop: 16 }]}>
              <Text style={styles.cardTitle}>Core Worldview</Text>
              <Text style={styles.worldviewKps}>{Worldview.culture.kipsigis} — {Worldview.culture.english}</Text>
              <Text style={styles.worldviewMeaning}>{Worldview.culture.meaning}</Text>
              <Text style={[styles.worldviewKps, { marginTop: 12 }]}>
                {Worldview.unnatural.kipsigis} — {Worldview.unnatural.english}
              </Text>
              <Text style={styles.worldviewMeaning}>{Worldview.unnatural.meaning}</Text>
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Po oret agenge — We are of one clan
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F0' },
  header: { padding: 24, backgroundColor: '#3B2314' },
  headerTitle: { fontSize: 28, fontWeight: '700', color: '#E8751A' },
  headerSub: { fontSize: 14, color: '#D4C4B0', marginTop: 4 },
  tabRow: { backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#E0D0C0' },
  tab: { paddingHorizontal: 20, paddingVertical: 12, alignItems: 'center' },
  activeTab: { borderBottomWidth: 3, borderBottomColor: '#E8751A' },
  tabText: { fontSize: 14, fontWeight: '600', color: '#8B6F5E' },
  activeTabText: { color: '#E8751A' },
  tabKipsigis: { fontSize: 10, color: '#B0A090', marginTop: 2 },
  content: { flex: 1, padding: 16 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#3B2314', marginBottom: 8 },
  cardMeaning: { fontSize: 13, color: '#8B6F5E', lineHeight: 18 },
  formulaText: { fontSize: 16, color: '#3B2314', lineHeight: 24, fontFamily: 'monospace', backgroundColor: '#F5F0EB', padding: 12, borderRadius: 8 },
  formulaMeaning: { fontSize: 13, color: '#8B6F5E', marginTop: 8, fontStyle: 'italic' },
  identityRow: { marginBottom: 10 },
  identityKps: { fontSize: 15, fontWeight: '600', color: '#E8751A' },
  identityEng: { fontSize: 13, color: '#5C4033' },
  worldviewKps: { fontSize: 16, fontWeight: '600', color: '#3B2314' },
  worldviewEng: { fontSize: 13, color: '#5C4033' },
  worldviewMeaning: { fontSize: 12, color: '#8B6F5E', fontStyle: 'italic', marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#3B2314', marginBottom: 4 },
  sectionSub: { fontSize: 13, color: '#8B6F5E', marginBottom: 16, fontStyle: 'italic' },
  clanRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, padding: 10, marginBottom: 6 },
  clanNumber: { width: 28, fontSize: 12, fontWeight: '600', color: '#8B6F5E' },
  clanName: { fontSize: 14, color: '#3B2314', fontWeight: '500' },
  currentCard: { backgroundColor: '#E8751A', borderRadius: 12, padding: 20, marginBottom: 20, alignItems: 'center' },
  currentLabel: { fontSize: 12, fontWeight: '600', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: 1 },
  currentName: { fontSize: 32, fontWeight: '700', color: '#FFFFFF', marginTop: 4 },
  currentYears: { fontSize: 16, color: '#FFFFFF', marginTop: 4 },
  ageSetRow: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 8, padding: 12, marginBottom: 6 },
  ageSetLeft: { flex: 2 },
  ageSetRight: { flex: 1, alignItems: 'flex-end' },
  ageSetName: { fontSize: 14, fontWeight: '600', color: '#3B2314' },
  ageSetSubs: { fontSize: 10, color: '#8B6F5E', marginTop: 2 },
  ageSetYears: { fontSize: 13, color: '#5C4033' },
  ageSetDuration: { fontSize: 10, color: '#8B6F5E' },
  ruleItem: { fontSize: 12, color: '#5C4033', lineHeight: 18, marginTop: 4 },
  microRow: { backgroundColor: '#FFFFFF', borderRadius: 8, padding: 12, marginBottom: 8 },
  microKps: { fontSize: 15, fontWeight: '600', color: '#E8751A' },
  microEng: { fontSize: 13, color: '#3B2314', marginTop: 2 },
  microMeaning: { fontSize: 11, color: '#8B6F5E', fontStyle: 'italic', marginTop: 2 },
  footer: { padding: 12, alignItems: 'center', backgroundColor: '#3B2314' },
  footerText: { fontSize: 11, color: '#D4C4B0', fontStyle: 'italic' },
});

export default KokwetScreen;
