import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Tenses, Negation } from '../data/grammar/tenses';
import { PersonalPronouns, Possessives } from '../data/grammar/pronouns';
import { Connectives, QuestionWords } from '../data/grammar/connectives';

type Lesson = 'pronouns' | 'tenses' | 'negation' | 'questions' | 'connectives';

const KotScreen: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<Lesson>('pronouns');

  const lessons: { key: Lesson; title: string; kipsigis: string }[] = [
    { key: 'pronouns', title: 'Who Is Speaking', kipsigis: 'Pronouns' },
    { key: 'tenses', title: 'When Things Happen', kipsigis: 'Tenses' },
    { key: 'negation', title: 'How to Say No', kipsigis: 'Negation' },
    { key: 'questions', title: 'Asking Questions', kipsigis: 'Questions' },
    { key: 'connectives', title: 'Connecting Words', kipsigis: 'Connectives' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kot — The House</Text>
        <Text style={styles.headerSub}>Core Lessons</Text>
      </View>

      {/* Lesson Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabRow}>
        {lessons.map((lesson) => (
          <TouchableOpacity
            key={lesson.key}
            style={[
              styles.tab,
              activeLesson === lesson.key && styles.activeTab,
            ]}
            onPress={() => setActiveLesson(lesson.key)}
          >
            <Text
              style={[
                styles.tabText,
                activeLesson === lesson.key && styles.activeTabText,
              ]}
            >
              {lesson.title}
            </Text>
            <Text style={styles.tabKipsigis}>{lesson.kipsigis}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lesson Content */}
      <ScrollView style={styles.content}>
        {/* Pronouns */}
        {activeLesson === 'pronouns' && (
          <View>
            <Text style={styles.sectionTitle}>Personal Pronouns</Text>
            {PersonalPronouns.map((p, i) => (
              <View key={i} style={styles.row}>
                <View style={styles.rowLeft}>
                  <Text style={styles.kps}>{p.standalone}</Text>
                </View>
                <View style={styles.rowRight}>
                  <Text style={styles.eng}>{p.english}</Text>
                  <Text style={styles.prefix}>Prefix: {p.subjectPrefix || '(none)'}</Text>
                </View>
              </View>
            ))}

            <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Possessives</Text>
            {Possessives.map((p, i) => (
              <View key={i} style={styles.row}>
                <View style={styles.rowLeft}>
                  <Text style={styles.kps}>{p.kipsigis}</Text>
                </View>
                <View style={styles.rowRight}>
                  <Text style={styles.eng}>{p.english}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Tenses */}
        {activeLesson === 'tenses' && (
          <View>
            <Text style={styles.sectionTitle}>Time Markers</Text>
            {Tenses.map((t, i) => (
              <View key={i} style={styles.card}>
                <Text style={styles.cardTitle}>{t.name}</Text>
                <Text style={styles.cardMarker}>Marker: {t.marker}</Text>
                <Text style={styles.cardExample}>{t.example}</Text>
                <Text style={styles.cardMeaning}>{t.meaning}</Text>
              </View>
            ))}

            <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Negation</Text>
            {Negation.map((n, i) => (
              <View key={i} style={styles.card}>
                <Text style={styles.cardTitle}>{n.type}</Text>
                <Text style={styles.cardMarker}>Marker: {n.marker}</Text>
                <Text style={styles.cardExample}>{n.example}</Text>
                <Text style={styles.cardMeaning}>{n.meaning}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Negation */}
        {activeLesson === 'negation' && (
          <View>
            <Text style={styles.sectionTitle}>How to Say No</Text>
            {Negation.map((n, i) => (
              <View key={i} style={styles.card}>
                <Text style={styles.cardTitle}>{n.type}</Text>
                <Text style={styles.cardMarker}>Marker: {n.marker}</Text>
                <Text style={styles.cardExample}>{n.example}</Text>
                <Text style={styles.cardMeaning}>{n.meaning}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Questions */}
        {activeLesson === 'questions' && (
          <View>
            <Text style={styles.sectionTitle}>Question Words</Text>
            {QuestionWords.map((q, i) => (
              <View key={i} style={styles.row}>
                <View style={styles.rowLeft}>
                  <Text style={styles.kps}>{q.kipsigis}</Text>
                </View>
                <View style={styles.rowRight}>
                  <Text style={styles.eng}>{q.english}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Connectives */}
        {activeLesson === 'connectives' && (
          <View>
            <Text style={styles.sectionTitle}>Connecting Words</Text>
            {Connectives.map((c, i) => (
              <View key={i} style={styles.row}>
                <View style={styles.rowLeft}>
                  <Text style={styles.kps}>{c.kipsigis}</Text>
                </View>
                <View style={styles.rowRight}>
                  <Text style={styles.eng}>{c.english}</Text>
                  <Text style={styles.prefix}>{c.type}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Njor — East side of the house</Text>
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
  tab: { paddingHorizontal: 16, paddingVertical: 12, marginRight: 4 },
  activeTab: { borderBottomWidth: 3, borderBottomColor: '#E8751A' },
  tabText: { fontSize: 13, fontWeight: '600', color: '#8B6F5E' },
  activeTabText: { color: '#E8751A' },
  tabKipsigis: { fontSize: 10, color: '#B0A090', marginTop: 2 },
  content: { flex: 1, padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#3B2314', marginBottom: 16 },
  row: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 8, marginBottom: 8, padding: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  rowLeft: { flex: 1 },
  rowRight: { flex: 2 },
  kps: { fontSize: 18, fontWeight: '600', color: '#3B2314' },
  eng: { fontSize: 14, color: '#5C4033' },
  prefix: { fontSize: 11, color: '#8B6F5E', marginTop: 4 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 8, padding: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#E8751A', marginBottom: 4 },
  cardMarker: { fontSize: 13, color: '#8B6F5E', marginBottom: 4 },
  cardExample: { fontSize: 20, fontWeight: '600', color: '#3B2314', marginBottom: 4 },
  cardMeaning: { fontSize: 13, color: '#5C4033' },
  footer: { padding: 12, alignItems: 'center', backgroundColor: '#3B2314' },
  footerText: { fontSize: 11, color: '#D4C4B0', fontStyle: 'italic' },
});

export default KotScreen;
