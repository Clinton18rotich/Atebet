import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { ArchiveClans } from '../data/clans/index';
import { AgeSetChronology, AgeSetCycle } from '../data/ceremonies/agesets';
import { SacredDirections, Worldview, HouseMicrocosm } from '../data/ceremonies/sacred';

type OretTab = 'clans' | 'agesets' | 'sacred' | 'house';

const OretScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<OretTab>('clans');

  const tabs: { key: OretTab; title: string; kipsigis: string }[] = [
    { key: 'clans', title: 'Clans', kipsigis: 'Ortinwek' },
    { key: 'agesets', title: 'Age Sets', kipsigis: 'Ipinda' },
    { key: 'sacred', title: 'Sacred', kipsigis: 'Pitet' },
    { key: 'house', title: 'The House', kipsigis: 'Kot' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Oret</Text>
        <Text style={styles.headerSub}>The Lore Codex — Cultural Knowledge</Text>
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
        {/* Clans */}
        {activeTab === 'clans' && (
          <View>
            <Text style={styles.sectionTitle}>The 39 Clans</Text>
            <Text style={styles.sectionSub}>
              Patrilineal clans with totems (tiondo). Marriage within the same clan is forbidden.
            </Text>
            {ArchiveClans.map((clan, i) => (
              <View key={i} style={styles.clanRow}>
                <Text style={styles.clanNumber}>{i + 1}</Text>
                <Text style={styles.clanName}>{clan.name}</Text>
              </View>
            ))}
            <View style={styles.noteCard}>
              <Text style={styles.noteText}>
                Full enumeration of 100+ clans pending integration from "Kipsigis Heritage and the Origin of Clans" by Bill Ruto & Kipngetich.
              </Text>
            </View>
          </View>
        )}

        {/* Age Sets */}
        {activeTab === 'agesets' && (
          <View>
            <Text style={styles.sectionTitle}>The 7 Age-Set Cycle</Text>
            <Text style={styles.sectionSub}>Ipinda — Rotating cycle of approximately 15-21 years each</Text>
            {AgeSetCycle.map((set, i) => (
              <View key={i} style={styles.ageSetCard}>
                <Text style={styles.ageSetOrder}>{set.order}</Text>
                <View style={styles.ageSetInfo}>
                  <Text style={styles.ageSetName}>{set.name}</Text>
                  {set.subSets && (
                    <Text style={styles.ageSetSubs}>
                      Sub-sets: {set.subSets.join(', ')}
                    </Text>
                  )}
                </View>
              </View>
            ))}

            <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Historical Chronology</Text>
            <Text style={styles.sectionSub}>1783 to Present</Text>
            {AgeSetChronology.map((set, i) => (
              <View key={i} style={styles.chronologyRow}>
                <Text style={styles.chronologyName}>{set.name}</Text>
                <Text style={styles.chronologyYears}>
                  {set.startYear}–{set.endYear || 'Present'}
                </Text>
                {set.durationYears && (
                  <Text style={styles.chronologyDuration}>{set.durationYears} yrs</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Sacred */}
        {activeTab === 'sacred' && (
          <View>
            <Text style={styles.sectionTitle}>Sacred Directions</Text>
            {Object.entries(SacredDirections).map(([key, dir]) => (
              <View key={key} style={styles.sacredCard}>
                <Text style={styles.sacredKps}>{dir.kipsigis}</Text>
                <Text style={styles.sacredEng}>{dir.english}</Text>
                <Text style={styles.sacredMeaning}>{dir.meaning}</Text>
                {'rules' in dir && dir.rules && (
                  <View style={styles.rulesList}>
                    {dir.rules.map((rule: string, j: number) => (
                      <Text key={j} style={styles.ruleItem}>• {rule}</Text>
                    ))}
                  </View>
                )}
              </View>
            ))}

            <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Worldview</Text>
            {Object.entries(Worldview).map(([key, concept]) => (
              <View key={key} style={styles.worldviewRow}>
                <Text style={styles.worldviewKps}>{concept.kipsigis}</Text>
                <Text style={styles.worldviewEng}>{concept.english}</Text>
                <Text style={styles.worldviewMeaning}>{concept.meaning}</Text>
              </View>
            ))}
          </View>
        )}

        {/* House */}
        {activeTab === 'house' && (
          <View>
            <Text style={styles.sectionTitle}>The House as Microcosm</Text>
            <Text style={styles.sectionSub}>
              The Kipsigis house is a model of the universe. Each element carries meaning.
            </Text>
            {Object.entries(HouseMicrocosm).map(([key, element]) => (
              <View key={key} style={styles.houseCard}>
                <Text style={styles.houseKps}>{element.kipsigis}</Text>
                <Text style={styles.houseEng}>{element.english}</Text>
                <Text style={styles.houseMeaning}>{element.meaning}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Pitet — Law, Custom, Nature. One word. One order.
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
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#3B2314', marginBottom: 4 },
  sectionSub: { fontSize: 13, color: '#8B6F5E', marginBottom: 16, fontStyle: 'italic' },
  clanRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, padding: 10, marginBottom: 6 },
  clanNumber: { width: 28, fontSize: 12, fontWeight: '600', color: '#8B6F5E' },
  clanName: { fontSize: 14, color: '#3B2314', fontWeight: '500' },
  noteCard: { backgroundColor: '#F5F0EB', borderRadius: 8, padding: 12, marginTop: 16 },
  noteText: { fontSize: 12, color: '#8B6F5E', fontStyle: 'italic', lineHeight: 18 },
  ageSetCard: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 8, padding: 12, marginBottom: 8, alignItems: 'center' },
  ageSetOrder: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#E8751A', textAlign: 'center', lineHeight: 32, color: '#FFFFFF', fontWeight: '700', fontSize: 14, marginRight: 12 },
  ageSetInfo: { flex: 1 },
  ageSetName: { fontSize: 16, fontWeight: '600', color: '#3B2314' },
  ageSetSubs: { fontSize: 11, color: '#8B6F5E', marginTop: 2 },
  chronologyRow: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 8, padding: 10, marginBottom: 4, alignItems: 'center' },
  chronologyName: { flex: 2, fontSize: 14, fontWeight: '600', color: '#3B2314' },
  chronologyYears: { flex: 1, fontSize: 13, color: '#5C4033' },
  chronologyDuration: { fontSize: 11, color: '#8B6F5E' },
  sacredCard: { backgroundColor: '#FFFFFF', borderRadius: 8, padding: 16, marginBottom: 12 },
  sacredKps: { fontSize: 16, fontWeight: '600', color: '#E8751A' },
  sacredEng: { fontSize: 14, color: '#3B2314', marginTop: 4 },
  sacredMeaning: { fontSize: 12, color: '#8B6F5E', fontStyle: 'italic', marginTop: 4, lineHeight: 18 },
  rulesList: { marginTop: 8, paddingLeft: 4 },
  ruleItem: { fontSize: 12, color: '#5C4033', lineHeight: 18, marginTop: 2 },
  worldviewRow: { backgroundColor: '#FFFFFF', borderRadius: 8, padding: 12, marginBottom: 8 },
  worldviewKps: { fontSize: 15, fontWeight: '600', color: '#3B2314' },
  worldviewEng: { fontSize: 13, color: '#5C4033', marginTop: 2 },
  worldviewMeaning: { fontSize: 11, color: '#8B6F5E', fontStyle: 'italic', marginTop: 2 },
  houseCard: { backgroundColor: '#FFFFFF', borderRadius: 8, padding: 16, marginBottom: 8, borderLeftWidth: 4, borderLeftColor: '#E8751A' },
  houseKps: { fontSize: 16, fontWeight: '600', color: '#E8751A' },
  houseEng: { fontSize: 14, color: '#3B2314', marginTop: 4 },
  houseMeaning: { fontSize: 12, color: '#8B6F5E', fontStyle: 'italic', marginTop: 4, lineHeight: 18 },
  footer: { padding: 12, alignItems: 'center', backgroundColor: '#3B2314' },
  footerText: { fontSize: 11, color: '#D4C4B0', fontStyle: 'italic' },
});

export default OretScreen;
