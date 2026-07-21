import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../theme/colors';

type Era = 'pioneers' | 'bands' | 'songs' | 'legacy';

interface Artist {
  name: string;
  role: string;
  years: string;
  band: string;
  songs: string[];
}

interface Band {
  name: string;
  era: string;
  founded: string;
  leaders: string[];
}

const artists: Artist[] = [
  {
    name: 'Wilson Kipkirui Arap Laboso',
    role: 'First Kalenjin Recording Artist',
    years: '1920–',
    band: 'Solo (Acoustic Guitar)',
    songs: ['Ndamoriret', 'Chebokion Kiyai', 'Yorwokyine ak Chito', 'Ongiyamege (missing)'],
  },
  {
    name: 'Raphael Kipchamba Arap Tapotuk',
    role: 'Father of Kipsigis Rhumba',
    years: '1937–2007',
    band: 'Koilonget Band',
    songs: ['Kiloit', 'Vernonika', 'Matinye Aliot Chepkam', 'Korgob Mondoi'],
  },
  {
    name: 'Morris Arap Mainek',
    role: 'Accordion, Rhythm Guitar, Composer',
    years: '1937–2024',
    band: 'Koilonget Band',
    songs: ['Kapkulumben (Kass FM signature)'],
  },
  {
    name: 'Francis Sonoiya Arap Langat',
    role: 'Lead Guitarist',
    years: '–1975',
    band: 'Koilonget Band',
    songs: ['Nelel ak Netui', 'Cheptirorit', "Ng'omintun Raini"],
  },
  {
    name: 'Francis Koech (Chemirei)',
    role: 'Vocalist, Comedian',
    years: '',
    band: 'Koilonget Band',
    songs: ['Siling Bogol', 'Madam', 'Obot Jeni'],
  },
  {
    name: 'Joel Kileges',
    role: 'Pioneer, GSU Officer',
    years: '',
    band: 'Jamasis Band',
    songs: ['Tapeiga (1977)', 'Kipmatakur (1977)', 'Bandeik (1977)'],
  },
  {
    name: 'Pole Arap Sitonik',
    role: 'Bandleader, Vocalist',
    years: '–2018',
    band: 'History Kumbuka Band',
    songs: ['Kipyou biik tugul Misiri', 'Kongoi Kapyugoi', 'Chemorta'],
  },
  {
    name: 'Cheptorus Arap Chepkwony',
    role: 'Moral Educator, Living Treasure',
    years: '',
    band: 'Bureti Band',
    songs: ['Cham Sigikuk', 'Kipsoiywet', 'Pilora'],
  },
];

const bands: Band[] = [
  { name: 'Koilonget Band', era: 'Pioneer', founded: '1957', leaders: ['Kipchamba', 'Mainek', 'Sonoiya'] },
  { name: 'Jamasis Band', era: 'Pioneer', founded: '1970s', leaders: ['Joel Kileges', 'Alexander Kering'] },
  { name: 'History Kumbuka Band', era: 'Pioneer', founded: '1960s', leaders: ['Pole Arap Sitonik'] },
  { name: 'Bureti Band', era: 'Growth', founded: '1970s', leaders: ['Cheptorus Arap Chepkwony'] },
  { name: 'Olala Boys Band', era: 'Growth', founded: '1989', leaders: ['Joseph Arap Tariraat'] },
  { name: 'Olesoi Band', era: 'Growth', founded: '', leaders: ['Paul Korgoren', 'John Korgoren'] },
  { name: 'Kimaya Jazz Band', era: 'Growth', founded: '', leaders: ['Micah Maritim'] },
];

const historicalMoments = [
  { year: '1950', event: 'Chemirocha recorded by Hugh Tracey at Kapkatet' },
  { year: '1952', event: 'Chebo Moire (fighting song) recorded by ILAM at Kapkatet' },
  { year: '1957', event: 'Koilonget Band founded — the great ensemble' },
  { year: '1975', event: 'Francis Sonoiya dies tragically' },
  { year: '2007', event: 'Kipchamba Arap Tapotuk passes' },
  { year: '2015', event: 'Chemirocha recordings repatriated to Kapkatet' },
  { year: '2024', event: 'Morris Arap Mainek passes — end of an era' },
];

const ChepalunguScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Era>('pioneers');

  const tabs: { key: Era; title: string }[] = [
    { key: 'pioneers', title: 'Pioneers' },
    { key: 'bands', title: 'Bands' },
    { key: 'songs', title: 'Timeline' },
    { key: 'legacy', title: 'Legacy' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chepalungu</Text>
        <Text style={styles.headerSub}>Cradle of Kalenjin Secular Music</Text>
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
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content}>
        {activeTab === 'pioneers' && artists.map((artist, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.artistName}>{artist.name}</Text>
            <Text style={styles.artistRole}>{artist.role}</Text>
            {artist.years ? <Text style={styles.artistYears}>{artist.years}</Text> : null}
            <Text style={styles.artistBand}>{artist.band}</Text>
            {artist.songs.length > 0 && (
              <View style={styles.songList}>
                {artist.songs.map((song, j) => (
                  <Text key={j} style={styles.songItem}>🎵 {song}</Text>
                ))}
              </View>
            )}
          </View>
        ))}

        {activeTab === 'bands' && bands.map((band, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.bandName}>{band.name}</Text>
            <Text style={styles.bandEra}>{band.era} Era{band.founded ? ` · Founded ${band.founded}` : ''}</Text>
            <Text style={styles.bandLeaders}>Leaders: {band.leaders.join(', ')}</Text>
          </View>
        ))}

        {activeTab === 'songs' && historicalMoments.map((moment, i) => (
          <View key={i} style={styles.timelineRow}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineYear}>{moment.year}</Text>
              <Text style={styles.timelineEvent}>{moment.event}</Text>
            </View>
          </View>
        ))}

        {activeTab === 'legacy' && (
          <View style={styles.legacySection}>
            <Text style={styles.legacyTitle}>Five Pillars of Chepalungu Music</Text>
            {[
              'Cultural Preservation — language, values, oral traditions',
              'Economic Livelihood — employment for artists',
              'Talent Nurturing — school festivals, competitions',
              'Production Hub — instrumentalists, producers, songwriters',
              'Community Pride — enduring symbol of Kipsigis identity',
            ].map((pillar, i) => (
              <View key={i} style={styles.pillarRow}>
                <Text style={styles.pillarNumber}>{i + 1}</Text>
                <Text style={styles.pillarText}>{pillar}</Text>
              </View>
            ))}
            <Text style={styles.legacyQuote}>
              "Over 1,200 songs recorded by Koilonget Band alone."
            </Text>
            <Text style={styles.legacyQuote}>
              "The Chepalungu region produced nearly three-quarters of all active Kalenjin musicians."
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Tegistab Sogol — The Impact of Nine</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F0' },
  header: { padding: 24, backgroundColor: '#3B2314' },
  headerTitle: { fontSize: 28, fontWeight: '700', color: '#E8751A' },
  headerSub: { fontSize: 14, color: '#D4C4B0', marginTop: 4, fontStyle: 'italic' },
  tabRow: { backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#E0D0C0' },
  tab: { paddingHorizontal: 20, paddingVertical: 12 },
  activeTab: { borderBottomWidth: 3, borderBottomColor: '#E8751A' },
  tabText: { fontSize: 14, fontWeight: '600', color: '#8B6F5E' },
  activeTabText: { color: '#E8751A' },
  content: { flex: 1, padding: 16 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  artistName: { fontSize: 16, fontWeight: '700', color: '#3B2314' },
  artistRole: { fontSize: 13, color: '#E8751A', fontWeight: '600', marginTop: 2 },
  artistYears: { fontSize: 12, color: '#8B6F5E', marginTop: 2 },
  artistBand: { fontSize: 13, color: '#5C4033', marginTop: 4 },
  songList: { marginTop: 8, paddingLeft: 4 },
  songItem: { fontSize: 12, color: '#5C4033', lineHeight: 20 },
  bandName: { fontSize: 16, fontWeight: '700', color: '#3B2314' },
  bandEra: { fontSize: 13, color: '#8B6F5E', marginTop: 2 },
  bandLeaders: { fontSize: 13, color: '#5C4033', marginTop: 4 },
  timelineRow: { flexDirection: 'row', marginBottom: 16 },
  timelineDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#E8751A', marginTop: 4, marginRight: 12 },
  timelineContent: { flex: 1 },
  timelineYear: { fontSize: 14, fontWeight: '700', color: '#E8751A' },
  timelineEvent: { fontSize: 13, color: '#3B2314', marginTop: 2 },
  legacySection: { padding: 8 },
  legacyTitle: { fontSize: 18, fontWeight: '700', color: '#3B2314', marginBottom: 16 },
  pillarRow: { flexDirection: 'row', marginBottom: 12, alignItems: 'flex-start' },
  pillarNumber: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#E8751A', textAlign: 'center', lineHeight: 28, color: '#FFFFFF', fontWeight: '700', fontSize: 14, marginRight: 12 },
  pillarText: { flex: 1, fontSize: 14, color: '#3B2314', lineHeight: 20 },
  legacyQuote: { fontSize: 13, color: '#8B6F5E', fontStyle: 'italic', textAlign: 'center', marginTop: 16, lineHeight: 18 },
  footer: { padding: 12, alignItems: 'center', backgroundColor: '#3B2314' },
  footerText: { fontSize: 11, color: '#D4C4B0', fontStyle: 'italic' },
});

export default ChepalunguScreen;
