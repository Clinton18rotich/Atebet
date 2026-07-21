import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Dictionary, DictionaryDomain, searchDictionary, DictionaryEntry } from '../data/dictionary/index';

const TugaScreen: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('greetings');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<DictionaryEntry[]>([]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.length > 1) {
      setSearchResults(searchDictionary(text));
    } else {
      setSearchResults([]);
    }
  };

  const currentDomain = Dictionary.find((d) => d.name === selectedDomain);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tuga — The Cattle</Text>
        <Text style={styles.headerSub}>Dictionary — {Dictionary.length} domains</Text>
      </View>

      {/* Search */}
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Kipsigis or English..."
          placeholderTextColor="#B0A090"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <ScrollView style={styles.searchResults}>
          {searchResults.map((entry, i) => (
            <View key={i} style={styles.resultRow}>
              <Text style={styles.resultKps}>{entry.kps}</Text>
              <Text style={styles.resultEng}>{entry.eng}</Text>
              {entry.pl && <Text style={styles.resultPl}>Pl: {entry.pl}</Text>}
            </View>
          ))}
        </ScrollView>
      )}

      {/* Domain Tabs */}
      {searchResults.length === 0 && (
        <>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.domainRow}>
            {Dictionary.map((domain) => (
              <TouchableOpacity
                key={domain.name}
                style={[
                  styles.domainTab,
                  selectedDomain === domain.name && styles.activeDomainTab,
                ]}
                onPress={() => setSelectedDomain(domain.name)}
              >
                <Text
                  style={[
                    styles.domainTabText,
                    selectedDomain === domain.name && styles.activeDomainTabText,
                  ]}
                >
                  {domain.name}
                </Text>
                <Text style={styles.domainCount}>{domain.entries.length}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Domain Entries */}
          <ScrollView style={styles.entryList}>
            {currentDomain?.entries.map((entry, i) => (
              <View key={i} style={styles.entryRow}>
                <View style={styles.entryLeft}>
                  <Text style={styles.entryKps}>{entry.kps}</Text>
                  {entry.pl && <Text style={styles.entryPl}>Pl: {entry.pl}</Text>}
                </View>
                <View style={styles.entryRight}>
                  <Text style={styles.entryEng}>{entry.eng}</Text>
                  {entry.lit && <Text style={styles.entryLit}>Lit: {entry.lit}</Text>}
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {Dictionary.reduce((sum, d) => sum + d.entries.length, 0)} words — Piikab Kutit
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
  searchSection: { padding: 12, backgroundColor: '#FFFFFF' },
  searchInput: { backgroundColor: '#F5F0EB', borderRadius: 8, padding: 12, fontSize: 16, color: '#3B2314' },
  searchResults: { flex: 1, padding: 12 },
  resultRow: { backgroundColor: '#FFFFFF', borderRadius: 8, padding: 12, marginBottom: 8 },
  resultKps: { fontSize: 18, fontWeight: '600', color: '#3B2314' },
  resultEng: { fontSize: 14, color: '#5C4033' },
  resultPl: { fontSize: 11, color: '#8B6F5E', marginTop: 4 },
  domainRow: { backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#E0D0C0' },
  domainTab: { paddingHorizontal: 14, paddingVertical: 10, alignItems: 'center' },
  activeDomainTab: { borderBottomWidth: 3, borderBottomColor: '#E8751A' },
  domainTabText: { fontSize: 11, fontWeight: '600', color: '#8B6F5E', textTransform: 'uppercase' },
  activeDomainTabText: { color: '#E8751A' },
  domainCount: { fontSize: 10, color: '#B0A090', marginTop: 2 },
  entryList: { flex: 1, padding: 12 },
  entryRow: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 8, padding: 12, marginBottom: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  entryLeft: { flex: 1 },
  entryRight: { flex: 2 },
  entryKps: { fontSize: 16, fontWeight: '600', color: '#3B2314' },
  entryPl: { fontSize: 11, color: '#8B6F5E', marginTop: 2 },
  entryEng: { fontSize: 14, color: '#5C4033' },
  entryLit: { fontSize: 11, color: '#8B6F5E', fontStyle: 'italic', marginTop: 4 },
  footer: { padding: 12, alignItems: 'center', backgroundColor: '#3B2314' },
  footerText: { fontSize: 11, color: '#D4C4B0', fontStyle: 'italic' },
});

export default TugaScreen;
